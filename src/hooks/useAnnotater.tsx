import { API, Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { AnnotationResult } from "@/components/interfaces/interfaces";

export const useAnnotater = (videoId: string) => {
  const [video, setVideo] = useState<File | null>(null);
  const [result, setResult] = useState<string[]>([]);
  const [annotations, setAnnotations] = useState<AnnotationResult[]>([]);

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

  const handleResultChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number
  ) => {
    result[id] = e.target.value;
    setResult(result);
  };
  const fetchVideo = async (videoId: string) => {
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.username;
    const token = user.signInUserSession.idToken.jwtToken;

    const init = {
      headers: {
        Authorization: token,
      },
    };
    //TODO:fetch video from S3
    //setVideo(video)
  };
  const fetchResult = async (videoId: string) => {
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.username;
    const token = user.signInUserSession.idToken.jwtToken;

    const init = {
      headers: {
        Authorization: token,
      },
    };
    const result = await API.get(
      "slannotate",
      `users/${userName}/files/${videoId}`,
      init
    );

    if (result.error) {
      console.error(`Failed to fetch videos: ${result.error}`);
    } else {
      //TODO:適当に実装しているのでちゃんと確認する
      setAnnotations(result.annotations);
      const initiatedResult = result.annotations.map(
        (annotation: AnnotationResult) => {
          return annotation.candidates[0];
        }
      );
      setResult(initiatedResult);
    }
  };
  //初期処理
  useEffect(() => {
    fetchVideo(videoId);
    fetchResult(videoId);
  }, []);
  return { video, result, handleResultChange, handleEditConfirmed };
};
