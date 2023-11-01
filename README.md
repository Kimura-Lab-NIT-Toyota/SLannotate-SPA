next-app-createとAWS Amplifyで構築されています。

## Getting Started

run the development server:

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

です。基本/pages以下以外は触らなくて良い(自動生成されたlintや依存関係のファイル)です。

開発時は上記のコマンドで動作を確認してください。本番環境にデプロイするには、単にGitHubのmainブランチに変更を適用すれば、amplifyがいい感じにやってくれます。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
