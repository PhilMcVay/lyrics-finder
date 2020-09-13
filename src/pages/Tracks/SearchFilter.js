import React from "react";

import { Input } from "./SearchFilter.styles";

const SearchFilter = ({ value, placeholder, onChange }) => (
  <Input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default SearchFilter;
