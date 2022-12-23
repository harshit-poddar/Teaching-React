import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  //1 way to do conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      // 2nd way to do conditional rendering
      <div>
        
        {this.state.tags.length === 0 && "please create new tag"}
        {this.renderTags()}
      </div>
    );

  }
}

// export default Counter;
