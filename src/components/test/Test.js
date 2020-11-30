import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // componentWillRecieveProps(nextProps, nextState) {
  //   console.log("componentWillRecieveProps...");
  // }

  // static getDerivedStateFromProps() {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
