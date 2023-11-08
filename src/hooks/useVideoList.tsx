import { useState } from "react";
import { API, Auth } from "aws-amplify";

export const useVideoList = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const fetchVideosList = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.username;
    const token = user.signInUserSession.idToken.jwtToken;

    const init = {
      headers: {
        Authorization: token,
      },
    };
    const result = await API.get("slannotate", `users/${userName}/files`, init);

    if (result.error) {
      console.error(`Failed to fetch videos: ${result.error}`);
    } else {
      setVideos(result.videos); //stateの更新をするとコンポーネントが更新される
    }
  };

  return { videos, fetchVideosList };
};
