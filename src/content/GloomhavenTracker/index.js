import React, { Component } from "react";
import Cookies from "js-cookie";
import NameList from "./components/NameList";
import { Container, Button, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white'
  },
  container: {
    display: "flex",
  },
  steps: {
    fontSize: "calc(10px + 2vmin)",
    margin: "10px 0",
    color: 'white'
  }
});

const names1 = ["Brandt", "Frank", "Shahmeen", "Alina", "Spencer", "James"];
const names2 = ["Spencer", "James", "Brandt", "Frank", "Shahmeen", "Alina"];

class GloomhavenTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names1: names1,
      names2: names2,
      step: 0
    };
  }

  componentDidMount = () => {
    let names1 = Cookies.get("names1");
    let names2 = Cookies.get("names2");
    const stepCount = parseInt(Cookies.get("stepCount"));
    if (!names1 || !names2) return;
    names1 = names1.split(",");
    names2 = names2.split(",");
    this.setState({
      names1: names1,
      names2: names2,
      step: stepCount
    });
  };

  handleClick = () => {
    const step = this.state.step + 1;
    let names1 = this.state.names1.slice();
    let names2 = this.state.names2.slice();

    names1 = this.getNext(names1);
    names2 = this.getNext(names2);

    if (step % 6 === 0) names1 = this.getNext(names1);
    if (names1[0] === names2[0]) names1 = this.getNext(names1);

    this.setState({
      names1: names1,
      names2: names2,
      step: step
    });
    Cookies.set("names1", names1.toString(), {
      expires: 365,
      path: ""
    });
    Cookies.set("names2", names2.toString(), {
      expires: 365,
      path: ""
    });
    Cookies.set("stepCount", step, {
      expires: 365,
      path: ""
    });
  };

  getNext = names => {
    const [n] = names.splice(0, 1);
    names.push(n);
    return names;
  };

  resetState = () => {
    this.setState({
      names1: names1,
      names2: names2,
      step: 0
    })
    Cookies.set("names1", names1.toString(), {
      expires: 365,
      path: ""
    });
    Cookies.set("names2", names2.toString(), {
      expires: 365,
      path: ""
    });
    Cookies.set("stepCount", 0, {
      expires: 365,
      path: ""
    });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Button onClick={this.resetState} className={classes.steps}>
          {this.state.step}
        </Button>
        <Container>
          <Button
            fullWidth
            variant="contained"
            onClick={this.handleClick}
          >
            next
          </Button>
          <div className={classes.container}>
            <NameList names={this.state.names1} />
            <NameList names={this.state.names2} />
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(GloomhavenTracker);
