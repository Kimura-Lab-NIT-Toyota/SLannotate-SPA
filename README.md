## App

https://main.d2twytevk47v4b.amplifyapp.com/

next-app-createとAWS Amplifyで構築されています。

## Getting Started
### requirement
SLannotate-app(バックエンド)がデプロイされていること。
また、APIのエンドポイントやCognito(ユーザ認証)の設定を行う必要があります。
#### local
.env.localファイルを作成し、
```
NEXT_PUBLIC_COGNITO_USER_POOL_ID=CognitoのユーザープールID(AWSコンソールのCognitoで確認)
NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID=CognitoのクライアントID(AWSコンソールのCognito→UserPool→アプリケーションの統合で確認)
NEXT_PUBLIC_API_ENDPOINT=APIエンドポイント(AWSコンソールのAPI Gatewayで確認)
```
#### Cloud
Amplify→アプリを選択→左のメニューから「環境変数」を選択し、上記の値を設定

### development
ローカルで開発用サーバーを立ち上げるには

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

FYI:Amplifyではビルドにyarnを使っているので、yarnを使うのがオススメです。

## How to develop

Nextをざっくりいうと、

- Reactベースのフレームワーク
- /pages以下のフォルダ/ファイル構成がそのままWebページの構造になる

です。

基本的にはReactの開発手法に近いです。/src/components以下に汎用的な部品を置き、/src/stylesにCSSを置き、/pagesでインポートして使います。

開発時は上記のコマンドでサーバーを起動して動作を確認してください。本番環境にデプロイするには、単にGitHubのmainブランチに変更を適用すれば、amplifyがうまいことやってくれます。

もし設定などを変更したい場合、ブラウザのAWSコンソール上のAmplifyのメニューから設定してください。
参考:https://dev.classmethod.jp/articles/amplify-with-existing-cognito-apigateway/

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
