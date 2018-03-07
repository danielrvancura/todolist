import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.doThis} <br />
        <button onClick={this.props.deleteItem}>X</button>
      </li>
    );
  }
}

export default ListItem;
