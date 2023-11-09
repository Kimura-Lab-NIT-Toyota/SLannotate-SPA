import RoutingButton from "@/components/parts/RoutingButton";
import VideoUploader from "@/components/views/VideoUploader";
export default function Home() {
  return (
    <main>
      <RoutingButton at="/" />
      <VideoUploader/>
    </main>
  );
}
