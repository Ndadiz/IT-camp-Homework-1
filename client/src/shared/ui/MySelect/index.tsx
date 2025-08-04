import type { SortKey } from "@pages/list/TaskList";
import id from "./MySelect.module.css"
import classes from "./MySelect.module.css"

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
    <div className={classes.SelectWrapper}>
      
        <select id={id.MySelect}
        value={value}
        onChange = {event => onChange(event.target.value as SortKey)}
        >
            <option disabled value="">{defaultValue}</option>
            {
                options.map(
                    opt =>
                        <option key={opt.value} value={opt.value} className={classes.SelectOption}>{opt.name} </option>
                )
            }
        </select>
      </div>
  )
}
