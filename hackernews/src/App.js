import React, { Component } from "react";
import { Search } from "./Search";
import { Table } from "./Table";
import { page, interactions } from "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(v) {
    this.setState({ searchTerm: v });
  }

  onDismiss(id) {
    const isNotId = listItem => listItem.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className={page}>
        <div className={interactions}>
          <Search searchTerm={searchTerm} onSearchChange={this.onSearchChange}>
            Search
          </Search>
          <Table
            list={list}
            searchTerm={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    );
  }
}

export default App;
