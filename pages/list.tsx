import VideoList from "@/components/VideoList";
import RoutingButton from "@/components/RoutingButton";
export default function List(){
  return(
    <div>
      <RoutingButton at="/"/>
      <VideoList/>
    </div>
  )
}