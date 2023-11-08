import Annotater from "@/components/Annotater";
import RoutingButton from "@/components/RoutingButton";

export default function Annotate() {
  //Nextのルーティングの仕様により、pages/annotate/*にマッチする全てのページがここにルーティングされる
  return (
    <>
      <RoutingButton at="/" />
      <Annotater />
    </>
  );
}
