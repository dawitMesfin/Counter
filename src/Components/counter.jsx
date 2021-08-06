import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 98,
    tags: ["tag1", "tag2", "tag3"],
  };

  tagRender() {
    if (this.state.tags.length == 0) return <p>there is no tag daveye</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length == 0 && "Empty tag dava"}
        {this.tagRender()}
      </React.Fragment>
    );
  }
}

export default Counter;
