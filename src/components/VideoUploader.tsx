import {useVideoUploader} from "@/hooks/useVideoUploader";
export default function videoUploader(){
    //動画のアップロードの具体的な実装はカスタムフックにまとめておき、UIの構造のみを定義する
    const {video,handleVideoChange,handleUpload} = useVideoUploader();
    return(
    <>
            <input type="file" accept="video/*" onChange={handleVideoChange}/>
            {video && (
                <video controls>
                    <source src={URL.createObjectURL(video)} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {(video && <button onClick={handleUpload}>Upload</button>)}
    </>
    )
}