#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "==> Python environment setup"

if [[ ! -f "pyproject.toml" ]]; then
  echo "No pyproject.toml found. Skipping Python environment setup."
  exit 0
fi

UV_BIN=""
if command -v uv >/dev/null 2>&1; then
  UV_BIN="uv"
elif [[ -x "$HOME/.local/bin/uv" ]]; then
  UV_BIN="$HOME/.local/bin/uv"
fi

if [[ -z "$UV_BIN" ]]; then
  echo "uv not found. Installing uv..."
  if ! command -v curl >/dev/null 2>&1; then
    echo "Error: curl is required to install uv automatically."
    exit 1
  fi

  curl -LsSf https://astral.sh/uv/install.sh | sh

  if command -v uv >/dev/null 2>&1; then
    UV_BIN="uv"
  elif [[ -x "$HOME/.local/bin/uv" ]]; then
    UV_BIN="$HOME/.local/bin/uv"
  fi
fi

if [[ -n "$UV_BIN" ]]; then
  if [[ -f "uv.lock" ]]; then
    echo "Syncing Python dependencies from uv.lock..."
    "$UV_BIN" sync --frozen
  else
    echo "No uv.lock found. Syncing Python dependencies from pyproject.toml..."
    "$UV_BIN" sync
  fi

  echo "Python environment ready via uv."
  echo "Use: $UV_BIN run <command>"
  exit 0
fi

PYTHON_BIN=""
if command -v python3.14 >/dev/null 2>&1; then
  PYTHON_BIN="python3.14"
elif command -v python3 >/dev/null 2>&1; then
  PYTHON_BIN="python3"
fi

if [[ -z "$PYTHON_BIN" ]]; then
  curl -LsSf https://astral.sh/uv/install.sh | sh
fi

if ! "$PYTHON_BIN" -c 'import sys; raise SystemExit(0 if sys.version_info >= (3, 14) else 1)'; then
  echo "Error: ${PYTHON_BIN} is below Python 3.14, but pyproject.toml requires >=3.14."
  exit 1
fi

echo "uv not found. Falling back to venv with ${PYTHON_BIN}."
"$PYTHON_BIN" -m venv .venv
.venv/bin/python -m pip install --upgrade pip
.venv/bin/pip install -e .

echo "Python environment ready in .venv."
echo "Activate with: source .venv/bin/activate"
