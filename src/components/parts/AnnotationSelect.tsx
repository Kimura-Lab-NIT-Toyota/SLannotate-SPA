import CreatableSelect from 'react-select/creatable';
type props = {
  id: number;
  candidates: string[];
  handleResultChange: (v: string, id: number) => void;
};

export default function AnnotationSelect(props: props){
 
  //optionsで受け取ったもの(手話認識結果の候補一覧)をSelectの選択肢に入れる
  props.candidates.map((c,index) => {
    
  })
  return (
      <CreatableSelect
        isClearable
        placeholder="選択肢にない場合は入力できます"
        onChange={(e)=>{
          if (!e) return;
            props.handleResultChange(e?.value,props.id)
        }}
        options={props.candidates.map((c,index) => {
          return {value:c,label:c}
        })}
      />
  );
};
