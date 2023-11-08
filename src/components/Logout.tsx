import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

export default function Logout() {
  //Authenticator.Providerでラップされたコンポーネント(layoutで囲っているのでどこでも使える)でしか使えない
  //認証周りを触るためのおまじない
  useAuthenticator((context) => [context.route]); 
  return (
    <Button>
      <a onClick={() => Auth.signOut()}>ログアウト</a>
    </Button>
  );
}
