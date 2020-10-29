import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <Form>
      <FormControl
        type="text"
        placeholder="&#128269;  Search integrations"
        className="mr-sm-2 search-bar"
      />
    </Form>
  );
};

export default SearchBar;
