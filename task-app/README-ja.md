# React Router へようこそ！

React Router を用いたフルスタック React アプリを構築するための、最新かつ本番運用向けのテンプレートです。

[StackBlitz で開く](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

---

## 主な特長

- 🚀 **サーバーサイドレンダリング（SSR）**
- ⚡️ **ホットモジュールリプレースメント（HMR）**
- 📦 **アセットのバンドル & 最適化**
- 🔄 **データの読み込み & ミューテーション**
- 🔒 **標準で TypeScript 対応**
- 🎉 **Tailwind CSS によるスタイリング**
- 📖 **[React Router ドキュメント](https://reactrouter.com/)**

---

## はじめ方

### インストール

依存関係をインストールします:

```bash
npm install
```

### 開発モード起動

HMR 付きの開発サーバーを起動します:

```bash
npm run dev
```

アプリは `http://localhost:5173` で閲覧できます。

---

## 本番ビルド

本番用ビルドを作成します:

```bash
npm run build
```

---

## デプロイ方法

### Docker でのデプロイ

```bash
docker build -t my-app .

# コンテナを起動
docker run -p 3000:3000 my-app
```

このコンテナは Docker をサポートする任意のプラットフォームに配置できます（例: AWS ECS・Google Cloud Run・Azure Container Apps・Digital Ocean App Platform・Fly.io・Railway）。

### DIY デプロイ（Node アプリに慣れている場合）

`npm run build` で生成されるファイルを配置してください。

```
├── package.json
├── package-lock.json（または pnpm-lock.yaml / bun.lockb）
├── build/
│   ├── client/    # 静的アセット
│   └── server/    # サーバーサイドコード
```

内蔵のアプリサーバーは本番環境でそのまま利用可能です。

---

## スタイリング

このテンプレートには [Tailwind CSS](https://tailwindcss.com/) があらかじめ設定されています。お好みの CSS フレームワークに置き換えても問題ありません。

---

❤️  このテンプレートは React Router で作られています。
