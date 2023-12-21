import Link from "next/link";
import styles from "@/styles/RoutingButton.module.css";
export default function RoutingButton(props: {at: string }) {
  return (
    <Link href={props.at}>
      <button className={styles.routingButton}> {props.at === "/" ? "Home" : props.at}に移動</button>
    </Link>
  );
}
