import AnnotationSelect from "./AnnotationSelect";
import {AnnotationResult} from "@/components/models/types";
import styles from "@/styles/AnnotateArea.module.css";
type props = {
    annotations : AnnotationResult[]
    handleResultChange: (v: string, id: number) => void
}

export default function AnnotateArea(props:props){
    const annotations = Array.isArray(props.annotations) ? props.annotations : []
    return(
        <>
        <div className={styles.selectContainer}>
        {annotations.map((r:AnnotationResult,index:number)=>{
            return(
                <AnnotationSelect id={index} key={index} candidates={r.candidates} handleResultChange={props.handleResultChange}/>
            )
        })}
        </div>
        </>
    )
}