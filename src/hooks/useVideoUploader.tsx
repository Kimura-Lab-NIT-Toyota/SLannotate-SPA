//APIの操作などを定義したカスタムフック
import { useState } from "react";
import { API, Auth } from "aws-amplify";
import { useRouter } from "next/router";

export const useVideoUploader = () => {
  const [video, setVideo] = useState<File | null>(null);
  const router = useRouter();
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    console.log(file);
    setVideo(file);
  };

  const handleUpload = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.username;
    const token = user.signInUserSession.idToken.jwtToken;

    
    
    const init = {
      headers: {
        Authorization: token,
      },
      body: video,
    };
    //upload file with using API
    if (!video) return;
    await API.put(
      "slannotate",
      `users/${userName}/files/${video.name}/blob`,
      init
    )
      .then((res) => {
        console.log(res);
        router.push(`/annotate/${video.name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { video, handleVideoChange, handleUpload };
};
