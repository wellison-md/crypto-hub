import { useState } from "react";
import { WindowContainer } from "./searchStyle";

export default function Search() {
  const [search, setSearch] = useState('');

  return (
    <WindowContainer>
      <input
        type="text"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
    </WindowContainer>
  );
}
