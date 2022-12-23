import React, { Component, Profiler } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  // };

  //Approach 1: To handle event using custom compartaor

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }

  //   handleIncrement() {
  //     console.log("Increment clicked",this);
  //   }

  //Approach 2: using Arrow functions
  /*
  handleIncrement = () => {
    // console.log("Increment clicked", this)
    this.setState({count: this.state.count + 1})
  }
*/
  // reset = () => {
  //   this.setState({ value: 0 });
  // };

  // //event argument
  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    console.log("prop", this.props);
    return (
      <div>
        {/* we can use children prop for rendering since it is an react element */}
        {this.props.children}

        <span>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* <button onClick={this.reset}>Reset</button> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }
  formatCount() {
    return this.props.counter.value === 0 ? <h1>Zero</h1> : <h1>{this.props.counter.value}</h1>;
  }
}

export default Counter;
