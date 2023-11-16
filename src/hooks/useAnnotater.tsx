import { API, Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { AnnotationResult } from "@/components/models/types";
import { useRouter } from "next/router";

export const useAnnotater = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [result, setResult] = useState<string[]>([]);
  const [annotations, setAnnotations] = useState<AnnotationResult[]>([]);
  const router = useRouter();
  const videoId = router.query.videoId as string;

  const handleEditConfirmed = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const userName = user.username;
    const token = user.signInUserSession.idToken.jwtToken;

    const init = {
      headers: {
        Authorization: token,
      },
      body:{
        result:result
      }
    };
    console.log(result)
    //TODO:Upload fixed result
    const res = await API.put("slannotate", `users/${userName}/files/${videoId}`, init);
    if (res.error) {
      console.error(`Failed to upload result: ${res.error}`);
    } else {
      console.log("Success to upload result");
      console.log(res);
    }
  };

  const handleResultChange = (
    v: string,
    id: number
  ) => {
    result[id] = v;
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
    const res = await API.get(
      "slannotate",
      `users/${userName}/files/${videoId}`,
      init
    );

    if (res.error) {
      console.error(`Failed to fetch videos: ${res.error}`);
    } else {
      setAnnotations([{ candidates: ["A","B","c"], probabilities: [1,2,3] },{ candidates: ["犬","猫"], probabilities: [1,2] }])
      // setAnnotations( [{candidates: res.annotations, probabilities: res.probabilities}] as AnnotationResult[]);
      const initiatedResult = annotations.map(
        (annotation: AnnotationResult) => {
          return annotation.candidates[0];
        }
      );
      setResult(initiatedResult);
      console.log(initiatedResult);
    }
  };
  //初期処理
  useEffect(() => {
    if (!router.isReady) return;
    fetchVideo(videoId);
    fetchResult(videoId);
  }, [router]);
  return { video, result, annotations,handleResultChange, handleEditConfirmed };
};
