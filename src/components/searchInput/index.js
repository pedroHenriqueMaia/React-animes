import { useState } from "react";
import Usedebounce from "./useDebounce";

function SearchInput({value, onChange}) {
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedChange = Usedebounce(onChange, 500)

    function handleChange(event){
      setDisplayValue(event.target.value);
      debouncedChange(event.target.value);
    }
  
    return (
      <input type="search" value={displayValue} onChange={handleChange} className="form-control" placeholder="Ex: Naruto" />
    );
  }
  
  export default SearchInput;