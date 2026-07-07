#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "Starting full project setup..."

bash scripts/setup-node.sh
bash scripts/setup-python.sh

echo "Setup complete."
echo "Next steps:"
echo "  pnpm dev --port 3333"
