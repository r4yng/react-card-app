import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  filterText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ filterText, onChange }) => (
  <Form.Control
    className="mb-2 mr-sm-2"
    id="searchInput"
    placeholder="Search Name"
    value={filterText}
    onChange={onChange}
  />
);

export default SearchBar;
