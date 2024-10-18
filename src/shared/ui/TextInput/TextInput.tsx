import { Input, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface TextInputProps {
  value: string;
  onValueChange: (val: string) => void;
  onAdornmentClick: () => void;
  className?: string;
}

export const TextInput = ({
  value,
  onValueChange,
  onAdornmentClick,
  className = "",
}: TextInputProps) => {
  return (
    <Input
      disableUnderline
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className={className}
      placeholder="What is need to be done"
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment
          onClick={onAdornmentClick}
          position="start"
          style={{ cursor: "pointer" }}
        >
          <AddIcon />
        </InputAdornment>
      }
    />
  );
};
