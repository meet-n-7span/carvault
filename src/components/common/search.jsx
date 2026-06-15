import { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function Search({ className = "", value = "", setValue }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(inputValue);
    }, 550);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return (
    <InputGroup className={`${className}`}>
      <InputGroupInput
        placeholder="Search brand, model, variant..."
        className="placeholder:text-md placeholder:font-semibold"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
