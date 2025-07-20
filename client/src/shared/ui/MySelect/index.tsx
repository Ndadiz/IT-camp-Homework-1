import type { SortKey } from "@pages/list/TaskList";
import {Select, Option} from "@admiral-ds/react-ui";
import id from "./MySelect.module.css"
type Option = {
  value: string;
  name: string;
}

type MySelectProps = {
  options: Option[];
  defaultValue: string;
  value:string;
  onChange:(value: SortKey) => void;
}

export default function MySelect({options, defaultValue, value, onChange}:MySelectProps) {
  return (
    <div>
      
        <Select id={id.MySelect}
        value={value}
        onChange = {event => onChange(event.target.value as SortKey)}
        >
            <Option disabled value="">{defaultValue}</Option>
            {
                options.map(
                    opt =>
                        <Option key={opt.value} value={opt.value}>{opt.name}</Option>
                )
            }
        </Select>
      </div>
  )
}
