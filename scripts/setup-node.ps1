$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

$RequiredNodeMajor = 22

Write-Host "==> Node/PNPM setup"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw "Node.js is required (>= $RequiredNodeMajor)."
}

$nodeVersionRaw = (node -v).Trim()
$nodeVersion = $nodeVersionRaw.TrimStart("v")
$nodeMajor = [int]($nodeVersion.Split(".")[0])

if ($nodeMajor -lt $RequiredNodeMajor) {
  throw "Detected Node.js $nodeVersionRaw, but >= v$RequiredNodeMajor is required."
}

if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
  if (Get-Command corepack -ErrorAction SilentlyContinue) {
    Write-Host "pnpm not found. Enabling with corepack..."
    corepack enable
    corepack prepare pnpm@latest --activate
  } else {
    throw "pnpm is required and corepack is unavailable."
  }
}

Write-Host "Installing Node dependencies with pnpm..."
pnpm install

if (Test-Path ".githooks" -PathType Container) {
  Write-Host "Configuring git hooks path..."
  pnpm run setup:githooks
}

Write-Host "Node/PNPM setup complete."
