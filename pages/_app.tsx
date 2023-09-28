import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Authenticator } from "@aws-amplify/ui-react";
import { I18n, Amplify } from "aws-amplify";
import awsConfig from "../src/aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { translations } from "@aws-amplify/ui";
I18n.putVocabularies(translations);
I18n.setLanguage("ja");
Amplify.configure(awsConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator socialProviders={["google"]}>
      <Authenticator.Provider>
        <Component {...pageProps} />
      </Authenticator.Provider>
    </Authenticator>
  );
}
