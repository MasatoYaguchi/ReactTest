#!/usr/bin/env sh

# エラー時は停止
set -e

cd vite-project

# ビルド
npm run build

# ビルド出力ディレクトリに移動
cd dist