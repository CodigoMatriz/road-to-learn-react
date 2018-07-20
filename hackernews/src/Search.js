import React from "react";

export const Search = ({ searchTerm, children, onSearchChange }) => {
  const doSearch = e => {
    const v = e.target.value;
    onSearchChange(v);
  };

  return (
    <form action="">
      {children} <input type="text" value={searchTerm} onChange={doSearch} />
    </form>
  );
};
