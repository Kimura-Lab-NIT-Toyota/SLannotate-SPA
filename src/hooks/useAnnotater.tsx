import { API, Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { AnnotationResult } from "@/components/models/types";
import { useRouter } from "next/router";

export const useAnnotater = () => {
  const [base64Video, setbase64Video] = useState<string>("");
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
    const res = await API.put("slannotate", `/users/${userName}/files/${videoId}`, init);
    if (res.error) {
      console.error(`Failed to upload result: ${res.error}`);
    } else {
      console.log("Succeeded to upload result",res);
    }
    router.push("/list");
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
    const res = await API.get('slannotate', `/users/${userName}/files/${videoId}/blob`, init);
    if (res.error) {
      console.error(`Failed to fetch videos: ${res.error}`);
    } else {
      setbase64Video(res)
    }
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
      `/users/${userName}/files/${videoId}`,
      init
    );

    if (res.error) {
      console.error(`Failed to fetch videos: ${res.error}`);
    } else {
      let fetchedAnnotations = [{ candidates: ["A","B","c"], probabilities: [1,2,3] },{ candidates: ["犬","猫"], probabilities: [1,2] }]//res.annotations as AnnotationResult[];
      setAnnotations(fetchedAnnotations);
      //setXXXは関数の中では値が更新されていないので変数から呼ぶ
      const initiatedResult = fetchedAnnotations.map(
        (annotation: AnnotationResult) => {
          return annotation.candidates[0];
        }
      );
      setResult(initiatedResult);
      console.log("result inintiated:",initiatedResult);
    }
  };
  //初期処理
  useEffect(() => {
    if (!router.isReady) return;
    fetchVideo(videoId);
    fetchResult(videoId);
  }, [router]);
  return { base64Video, result, annotations,handleResultChange, handleEditConfirmed };
};
