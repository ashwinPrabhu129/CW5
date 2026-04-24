import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All" 
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  }

  render() {
    const filterItem = this.props.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
      const matchesType = this.state.type === "All" || item.type === this.state.type;
      return matchesSearch && matchesType;
    });

    return (
      <div className="filter-list task-card">
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        
        <DropdownButton title="Filter" id="typeDropdown" onSelect={this.onFilter}>
          <MenuItem eventKey="All">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
        </DropdownButton>

        <List items={filterItem} />
      </div>
    );
  }
}

export default FilteredList;