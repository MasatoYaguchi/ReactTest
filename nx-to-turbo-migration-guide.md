# Nx → Turborepo 移行手順書

この手順書は、**Nx v13 モノレポ (Yarn v1) を Turborepo へ完全移行**するための最終的な TODO リストです。  
対象プロジェクト構成:

```
packages/
  front-app-pc/              # React + Vite (Webアプリ: PC)
  front-account-service/     # React + Vite (Webアプリ: アカウント)
  front-libs/
    core/ helpers/ modules/ ui/  # 共有ライブラリ (ビルド不要)
  front-app-sp/              # **未使用・削除予定**
```

---

## 0. 事前準備

```bash
git checkout -b feat/turbo-migration
node -v   # >= 18.18.0
yarn -v   # 1.x
```

---

## 1. 不要パッケージの削除

```bash
git rm -r packages/front-app-sp
```

---

## 2. Yarn Workspaces の宣言

ルート `package.json` を編集:

```diff
{
   "private": true,
+  "workspaces": [
+    "packages/*",
+    "packages/front-libs/*"
+  ],
   ...
}
```

---

## 3. 各パッケージ `package.json`

| ディレクトリ | 最低限のスクリプト | 備考 |
|--------------|-------------------|------|
| **packages/front-app-pc** | `"dev": "vite"`, `"build": "vite build"` | 必須 |
| **packages/front-account-service** | 同上 | 必須 |
| **packages/front-libs/*** | *(script なし可)*<br>型検査のみなら `"type": "tsc -p tsconfig.json --noEmit"` | ビルド不要 |

> ライブラリ間依存がある場合は `dependencies` に `"workspace:*"` を追加してください。

---

## 4. Turborepo 導入

```bash
yarn add -D turbo
echo -e "\n# Turborepo\n.turbo/" >> .gitignore
```

### `turbo.json`

```jsonc
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "dev":   { "cache": false },
    "build": { "outputs": ["dist/**"], "dependsOn": ["^build"] },
    "type":  { "outputs": [] }
  },
  "globalDependencies": ["tsconfig.base.json", "yarn.lock"]
}
```

---

## 5. ルートスクリプト切替

```diff
"scripts": {
-  "build:pc": "nx build front-app-pc --skip-nx-cache",
-  "serve:pc": "nx serve front-app-pc",
+  "dev":   "turbo run dev --parallel",
+  "build": "turbo run build",
+  "type":  "turbo run type",
   ...
}
```

---

## 6. CI (GitHub Actions)

```yaml
- run: yarn turbo run type build --since=${{ github.event.before }}
  env:
    TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
    TURBO_TEAM:  ${{ secrets.TURBO_TEAM }}
```

---

## 7. 動作確認

```bash
yarn dev
yarn build
yarn type
```

### トラブルシューティング

| 症状 | 対策 |
|------|------|
| パッケージ検出されない | `yarn workspaces info` で確認 |
| キャッシュ効かない | `outputs` を見直す |

---

## 8. Nx 依存の削除

```bash
yarn remove nx @nrwl/cli @nrwl/* nx-plugin-vite
git rm nx.json workspace.json
```

---

## 9. 最終コミット

```bash
git add -A
git commit -m "chore: migrate from Nx to Turborepo"
```

---

## 10. デプロイ確認

本番ビルド(`yarn build`)の成果物が同等であることを確認し、CI/CD を通常運用へ戻す。

---

### 付録: ライブラリ間依存例

```jsonc
{
  "name": "@hitotsu/front-libs-modules",
  "version": "0.0.0",
  "dependencies": {
    "@hitotsu/front-libs-core": "workspace:*"
  }
}
```

---
