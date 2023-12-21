import { useAnnotater } from "@/hooks/useAnnotater";
import AnnotateArea from "@/components/parts/AnnotateArea";
import styles from "@/styles/Annotater.module.css";

export default function Annotater() {
  const { base64Video,result, annotations,handleResultChange, handleEditConfirmed } = useAnnotater();
  return (
    <>
      {base64Video && (
        <video controls className={styles.videoContainer} >
          <source src={base64Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

        <button onClick={handleEditConfirmed}>保存</button>
        <AnnotateArea annotations={annotations} handleResultChange={handleResultChange}/>
    </>
  );
}
