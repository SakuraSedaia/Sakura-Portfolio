#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

REQUIRED_NODE_MAJOR=22

echo "==> Node/PNPM setup"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is required (>= ${REQUIRED_NODE_MAJOR})."
  exit 1
fi

NODE_VERSION_RAW="$(node -v)"
NODE_VERSION="${NODE_VERSION_RAW#v}"
NODE_MAJOR="${NODE_VERSION%%.*}"

if [[ "$NODE_MAJOR" -lt "$REQUIRED_NODE_MAJOR" ]]; then
  echo "Error: Detected Node.js ${NODE_VERSION_RAW}, but >= v${REQUIRED_NODE_MAJOR} is required."
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  if command -v corepack >/dev/null 2>&1; then
    echo "pnpm not found. Enabling with corepack..."
    corepack enable
    corepack prepare pnpm@latest --activate
  else
    echo "Error: pnpm is required and corepack is unavailable."
    exit 1
  fi
fi

echo "Installing Node dependencies with pnpm..."
pnpm install

if [[ -d ".githooks" ]]; then
  echo "Configuring git hooks path..."
  pnpm run setup:githooks
fi

echo "Node/PNPM setup complete."
