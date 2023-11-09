import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

//https://zenn.dev/aldagram_tech/articles/c2cf248bd016fc のコードを参考にしている

type SelectProps = {
  id: number;
  candidates: string[];
  probabilities: number[];
};

const DraggableSelect: React.FC<SelectProps> = ({ id,candidates, probabilities}) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  //optionsで受け取ったもの(手話認識結果の候補一覧)をSelectの選択肢に入れる
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Select label={candidates[0]}>
        {candidates.map((c) => {
          return <MenuItem value={c}>{c}</MenuItem>;
        })}
      </Select>
    </div>
  );
};
export default DraggableSelect;
