import React from "react";
import { Form } from "react-bootstrap";

interface SearchBarProps {
  filterText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filterText,
  onChange,
}) => (
  <Form.Control
    className="mb-2 mr-sm-2"
    id="searchInput"
    placeholder="Search Name"
    value={filterText}
    onChange={onChange}
  />
);
