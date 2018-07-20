import React from "react";
import { DisableButton } from "./DisableButton";
import { table, tableRow, buttonInline } from "./App.css";

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

export const Table = ({ list, searchTerm, onDismiss }) => {
  return (
    <div className={table}>
      {list.filter(isSearched(searchTerm)).map(item => (
        <div key={item.objectID} className={tableRow}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <DisableButton
              onDismiss={() => onDismiss(item.objectID)}
              className={buttonInline}
            >
              Dismiss
            </DisableButton>
          </span>
        </div>
      ))}
    </div>
  );
};
