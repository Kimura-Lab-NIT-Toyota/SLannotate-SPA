import { Auth } from "aws-amplify";
import { useState } from "react";


export const useAnnotater = (
) => {
  const [video, setVideo] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");
  const handleEditConfirmed = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.username;
    const token = user.signInUserSession.idToken.jwtToken;

    const init = {
      headers: {
        Authorization: token,
      },
    };
    //TODO:Upload fixed result
    // const result = await API.get("slannotate", `users/${userName}/files`, init);
  };
  const handleResultChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const result = e.target.value;
    setResult(result);
    console.log(result);
  };
  return { video, result,handleResultChange, handleEditConfirmed };
};
