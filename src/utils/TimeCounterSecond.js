import React, { Component } from "react";
import Moment from "moment";

class TimeCounterSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: !isNaN(props.horario) != true ? 0 : props.horario * 1000,
      start: 0,
      isOn: false
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    });

    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1000
    );
  }
  componentDidMount() {
    if (!this.state.isOn) {
      this.startTimer();
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {Moment.utc(this.state.time).format("HH:mm:ss")}
      </React.Fragment>
    );
  }
}
export default TimeCounterSecond;
