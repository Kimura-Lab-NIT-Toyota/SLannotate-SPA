import AnnotationSelect from "./AnnotationSelect";
import {AnnotationResult} from "@/components/models/types";
type props = {
    annotations : AnnotationResult[]
    handleResultChange: (v: string, id: number) => void
}

export default function AnnotateArea(props:props){
    const annotations = Array.isArray(props.annotations) ? props.annotations : []
    return(
        <>
        {annotations.map((r:AnnotationResult,index:number)=>{
            return(
                <AnnotationSelect key={index} candidates={r.candidates} handleResultChange={props.handleResultChange}/>
            )
        })}
        </>
    )
}