import { Checkbox } from "@mui/material";
import classNames from "classnames";
import s from "./ListItem.module.scss";

interface ListItemProps {
  /* isChecked - сделано ли задание  */
  isChecked: boolean;

  /* description - текст описания дела*/
  description: string;

  id: string;

  onCheckboxClickHandler: (id: string) => void;
}
export const ListItem = ({
  isChecked,
  description,
  onCheckboxClickHandler,
  id,
}: ListItemProps) => {
  const descriptionClassName = isChecked ? s.checkedItemDescription : "";

  return (
    <li className={classNames(s.wrapper, { [s.disabled]: isChecked })}>
      {" "}
      <Checkbox
        onClick={() => onCheckboxClickHandler(id)}
        checked={isChecked}
      />
      <p
        onClick={() => onCheckboxClickHandler(id)}
        className={descriptionClassName}
      >
        {description}
      </p>
    </li>
  );
};
