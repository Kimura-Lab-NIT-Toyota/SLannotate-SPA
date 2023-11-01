import { UseAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
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

//TODO:API叩く関数の位置考える
const handleClick = async function () {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  const myInit = {
    headers: {
      Authorization: token,
    },
  };

  const res = await API.get("slannotate", "/users/usr1/files/test.mp4", myInit);
  console.log(res);
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Authenticator socialProviders={["google"]}>
      <Authenticator.Provider>
        <button onClick={() => handleClick()}>test</button>
        <Logout />
        {children}
      </Authenticator.Provider>
    </Authenticator>
  );
}
