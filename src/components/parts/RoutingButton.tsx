import Link from "next/link";
export default function RoutingButton(props: { at: string }) {
  return (
    <Link href={props.at}>
      <button>Go to {props.at === "/" ? "Home" : props.at}</button>
    </Link>
  );
}
