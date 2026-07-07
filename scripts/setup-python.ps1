$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

Write-Host "==> Python environment setup"

if (-not (Test-Path "pyproject.toml" -PathType Leaf)) {
  Write-Host "No pyproject.toml found. Skipping Python environment setup."
  exit 0
}

$uvCommand = Get-Command uv -ErrorAction SilentlyContinue
if (-not $uvCommand) {
  $localUvPath = Join-Path $env:USERPROFILE ".local\bin\uv.exe"
  if (Test-Path $localUvPath -PathType Leaf) {
    $uvCommand = $localUvPath
  }
}

if (-not $uvCommand) {
  Write-Host "uv not found. Installing uv..."
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

  $uvCommand = Get-Command uv -ErrorAction SilentlyContinue
  if (-not $uvCommand) {
    $localUvPath = Join-Path $env:USERPROFILE ".local\bin\uv.exe"
    if (Test-Path $localUvPath -PathType Leaf) {
      $uvCommand = $localUvPath
    }
  }
}

if ($uvCommand) {
  if (Test-Path "uv.lock" -PathType Leaf) {
    Write-Host "Syncing Python dependencies from uv.lock..."
    & $uvCommand sync --frozen
  } else {
    Write-Host "No uv.lock found. Syncing Python dependencies from pyproject.toml..."
    & $uvCommand sync
  }

  Write-Host "Python environment ready via uv."
  Write-Host "Use: uv run <command>"
  exit 0
}

$pythonCommand = $null

if (Get-Command py -ErrorAction SilentlyContinue) {
  try {
    py -3.14 -c "import sys; raise SystemExit(0 if sys.version_info >= (3, 14) else 1)"
    if ($LASTEXITCODE -eq 0) {
      $pythonCommand = @("py", "-3.14")
    }
  } catch {
  }
}

if (-not $pythonCommand -and (Get-Command python -ErrorAction SilentlyContinue)) {
  python -c "import sys; raise SystemExit(0 if sys.version_info >= (3, 14) else 1)"
  if ($LASTEXITCODE -eq 0) {
    $pythonCommand = @("python")
  }
}

if (-not $pythonCommand) {
  throw "Python 3.14+ is required. Install uv or Python 3.14+."
}

Write-Host "uv not found. Falling back to venv with $($pythonCommand -join ' ')."
if ($pythonCommand.Count -gt 1) {
  & $pythonCommand[0] $pythonCommand[1] -m venv .venv
} else {
  & $pythonCommand[0] -m venv .venv
}
& ".\.venv\Scripts\python.exe" -m pip install --upgrade pip
& ".\.venv\Scripts\pip.exe" install -e .

Write-Host "Python environment ready in .venv."
Write-Host "Activate with: .\.venv\Scripts\Activate.ps1"
