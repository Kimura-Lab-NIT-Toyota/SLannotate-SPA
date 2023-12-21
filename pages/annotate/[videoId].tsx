import Annotater from "@/components/views/Annotater";
import RoutingButton from "@/components/parts/RoutingButton";

export default function Annotate() {
  //Nextのルーティングの仕様により、pages/annotate/*にマッチする全てのページがここにルーティングされる
  return (
    <>
      <RoutingButton  at="/" />
      <Annotater />
    </>
  );
}
