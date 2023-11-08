import Logout from "@/components/Logout";
import { Authenticator } from "@aws-amplify/ui-react";
import { I18n, Amplify, API, Auth } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import { translations } from "@aws-amplify/ui";

//全体で共通する部品をまとめたコンポーネント
//ログアウトボタンやヘッダーなど
// pages/_app.tsxで使うことで、全てのコンポーネントをラップする


//I18n = Internationalization
I18n.putVocabularies(translations);
I18n.setLanguage("ja");

//AWS周りの設定
const awsConfig = {
  Auth: {
    region: "ap-northeast-1",
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId:
      process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "slannotate",
        endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
        region: "ap-northeast-1",
      },
    ],
  },
};

Amplify.configure(awsConfig);

interface Props {
  children: React.ReactNode;
}
//引数で受け取ったChildren(子コンポーネント)を全体で使うスタイルでラップして返す
//これで全てのコンポーネントがログアウトボタンを持ったり、認証機能を使えるようになる
export default function Layout({ children }: Props) {
  return (
    <Authenticator socialProviders={["google"]}>
      <Authenticator.Provider>
        <Logout />
        {children}
      </Authenticator.Provider>
    </Authenticator>
  );
}
