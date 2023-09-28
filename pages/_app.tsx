import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Authenticator } from "@aws-amplify/ui-react";
import { I18n, Amplify,API,Auth } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import { translations } from "@aws-amplify/ui";
import { get } from "http";
I18n.putVocabularies(translations);
I18n.setLanguage("ja");

const awsConfig = {
  Auth: {
    region: "ap-northeast-1",
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_WEB_CLIENT_ID,
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
//TODO:Fix CORS
const handleClick = async function () {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  const myInit = {
    headers: {
      Authorization: token,
    },
  };

  const res = await API.get('slannotate', '/users', myInit);
  console.log(res);
};


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Authenticator socialProviders={["google"]}>
      <Authenticator.Provider>
        <button onClick={()=>handleClick()}>test</button>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </Authenticator>
  );
}
