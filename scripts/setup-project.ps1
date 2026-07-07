$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

Write-Host "Starting full project setup..."

powershell -ExecutionPolicy Bypass -File ".\scripts\setup-node.ps1"
powershell -ExecutionPolicy Bypass -File ".\scripts\setup-python.ps1"

Write-Host "Setup complete."
Write-Host "Next steps:"
Write-Host "  pnpm dev --port 3333"
