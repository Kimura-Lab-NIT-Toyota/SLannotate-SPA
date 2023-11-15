import DraggableSelect from "@/components/parts/DraggableSelect";
import {AnnotationResult} from "@/components/models/types";
type props = {
    annotations : AnnotationResult[]
}

export default function AnnotateArea(props:props){
    const annotations = Array.isArray(props.annotations) ? props.annotations : []
    return(
        <>
        {annotations.map((options:AnnotationResult,index:number)=>{
            return(
                <DraggableSelect id={index} candidates={options.candidates} probabilities={options.probabilities}/>
            )
        })}
        </>
    )
}