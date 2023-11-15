import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type props = {
  id: number;
  candidates: string[];
  handleResultChange: (v: string, id: number) => void;
};

export default function AnnotationSelect(props: props){
 
  //optionsで受け取ったもの(手話認識結果の候補一覧)をSelectの選択肢に入れる
  return (
      <Select
        onChange={(e)=>{
          const v = e.target.value as string
          console.log(v)
          props.handleResultChange(v,props.id)
        }}
        defaultValue={props.candidates[0]}
        >
        {props.candidates.map((c) => {
          return <MenuItem value={c}>{c}</MenuItem>;
        })}
      </Select>
  );
};
