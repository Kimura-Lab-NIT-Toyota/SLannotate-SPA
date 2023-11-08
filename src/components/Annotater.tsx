import { useAnnotater } from "@/hooks/useAnnotater";
export default function Annotater() {
  const { video,result, handleResultChange, handleEditConfirmed } = useAnnotater();
  return (
    <>
      {video && (
        <video controls>
          <source src={URL.createObjectURL(video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <textarea onChange={handleResultChange}>{result}</textarea>
        <button onClick={handleEditConfirmed}>保存</button>
    </>
  );
}
