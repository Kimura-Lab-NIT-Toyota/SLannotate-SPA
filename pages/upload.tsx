export default function Home() {
  return (
    <main>
      <input type="file" accept="video/*" onChange={(e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target.result;
          // ここでdataUrlを使ってビデオをアップロードする処理を書く
        };
        reader.readAsDataURL(file);
      }} />

    </main>
  )
}
