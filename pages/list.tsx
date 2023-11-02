import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API, Auth } from "aws-amplify";

export default function List() {
  const router = useRouter();
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
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
      console.log(result);
      console.log(typeof result);

      if (result.error) {
        console.error(`Failed to fetch videos: ${result.error}`);
      } else{
        setVideos(result.videos);
      }
    };

    fetchVideosList();
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>status</th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.videoId}>
              <td>{video.status}</td>
              <td>{video.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}