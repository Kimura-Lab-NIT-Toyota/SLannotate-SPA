import { useAnnotater } from "@/hooks/useAnnotater";
import AnnotateArea from "@/components/parts/AnnotateArea";

export default function Annotater() {
  //get videoId from query
  const videoId = "test";
  const { video,result, handleResultChange, handleEditConfirmed } = useAnnotater(videoId);
  return (
    <>
      {video && (
        <video controls>
          <source src={URL.createObjectURL(video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      
        <button onClick={handleEditConfirmed}>保存</button>
        <AnnotateArea annotations={result}/>
        {/*TODO:実際に結果を貰ってきて編集できるようにする。カスタムフックで実装する。S3から動画を引っ張ってくるのとアノテート結果を引っ張るAPIを使う。
        後者はGET:FileNameでできるはずだけど、前者はないのでAPI書く必要がありそう。APIで実装しきるのがきれいだけど、S3直接使うのも簡単にできるならあり。
        重めの動画をわざわざAPI通すのはパフォーマンス的にも料金的にも嬉しくないし。*/}
    </>
  );
}
