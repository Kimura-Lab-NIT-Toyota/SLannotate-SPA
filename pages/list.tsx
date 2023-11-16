import VideoList from "@/components/views/VideoList";
import RoutingButton from "@/components/parts/RoutingButton";
export default function List(){
  return(
    <div>
      <RoutingButton at="/"/>
      <VideoList/>
    </div>
  )
}