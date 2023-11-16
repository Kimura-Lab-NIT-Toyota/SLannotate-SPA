import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { useVideoList } from "@/hooks/useVideoList";

export default function VideoList() {
  //APIから動画一覧を取得するカスタムフックを使う
  const { videos} = useVideoList();
  
  const router = useRouter();

  //TODO:add thumbnail of video
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>videoId</th>
            <th>status</th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>
          {/* map関数を使って動画一覧を表示する、いい感じにtable(表)にする*/}
          {videos.map((video) => (
            <tr key={video.videoId}>
              <td>
                {
                  //sスラッシュ区切りで一番最後の要素を出す。
                  //開発中の仕様ではAPIからスラッシュ込みでidが返るが修正すべきなので、修正しても動くように一旦こう書いている
                  video.videoId.split("/").at(-1)
                }
              </td>
              <td>{video.status}</td>
              <td>{video.result}</td>
              <td>
                <button
                  onClick={() =>
                    router.push(`/annotate/${video.videoId.split("/").at(-1)}`)
                  }
                >
                  <a>アノテーション</a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
