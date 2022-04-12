# React + TypeScript + Viteで体重入力アプリ

~~~
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.3.0"
~~~

Vite でプロジェクト作成
~~~ bash
npm init vite
~~~

react-tsで設定
`npm run dev`でローカルサーバー起動
~~~
Scaffolding project in /home/[username]/git/reactTest/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
~~~


## 簡単な体重管理アプリを作成する
機能  
体重入力 | 履歴

### 体重入力ページ
`体重と体脂肪`入力

### 履歴
`日付 / 体重 / 体脂肪率` を表示

### React Router追加
~~~ bash
npm i react-router-dom
~~~


### deploy
GitHubPagesに上げるためdocsにビルドするようにvite.config.tsを変更
Routerが動作するようにbuild時はBrowserRouterにbasenameを代入する対応追加
~~~ typescript
const baseName = import.meta.env.MODE === "production" ? "ReactTest" : "";
    return (
        <BrowserRouter basename={baseName}>
~~~




