import React, { Component, Fragment } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.handleIncreament = this.handleIncreament.bind(this);
  }
  state = {
    count: 9,
  };

  formatCount() {
    return this.state.count == 0 ? "zero" : this.state.count;
  }

  getBadge() {
    let classes = "badge m-5 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  handleIncreament() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    );
  }
}

export default Counter;
