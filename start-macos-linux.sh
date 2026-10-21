#!/usr/bin/env bash
ROOT="$(cd "$(dirname "$0")" && pwd)"
echo "Terminal 1: cd \"$ROOT/backend\" && cp .env.example .env && npm install && npm run dev"
echo "Terminal 2: cd \"$ROOT/frontend\" && npm install && npm run dev"
