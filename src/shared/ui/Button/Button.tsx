import { Button as StyledButon } from "@mui/material";
import { CurrentToDo } from "../../lib/enums/CurrentToDo";

interface ButtonProps<T> {
  childNode: T;
  onClickHandler: (ReactNode: T) => void;
  className?: string;
}
export const Button = <T extends CurrentToDo | string>({
  childNode,
  onClickHandler,
  className = "",
}: ButtonProps<T>) => {
  return (
    <StyledButon
      onClick={() => onClickHandler(childNode)}
      variant="text"
      className={className}
    >
      {childNode}
    </StyledButon>
  );
};
