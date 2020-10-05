import React, { Component } from "react";
import Input from "../Components/Input";
import Bar from "../Components/Bar";
var zxcvbn = require("zxcvbn");
let strengthText = [
  {
    text: "Very Weak ☹",
    bgColor: "#e40808",
  },
  {
    text: "Weak ☹",
    bgColor: "#e40808",
  },
  {
    text: "Medium ☹",
    bgColor: "#ffd800",
  },
  {
    text: "Strong ☺",
    bgColor: "#2cb117",
  },
  {
    text: "Very Strong ☻",
    bgColor: "#2cb117",
  },
];
class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      suggestion: null,
      result: "Enter Your Password",
      bgColor: "#e40808",
      barWidth: 0,
      inputWidth: "100%",
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Input
            inputWidth={this.state.inputWidth}
            type="password"
            value={this.state.text}
            onChange={this.print}
          />
          <Bar
            width={this.state.barWidth}
            height="5px"
            bgColor={this.state.bgColor}
          />
        </div>
        <div
          id="result"
          text={() => this.text1()}
          style={{ textAlign: "center" }}
        >
          {this.state.result}
        </div>
        <div
          id="suggestion"
          text={() => this.text2()}
          style={{ textAlign: "center" }}
        >
          {this.state.suggestion}
        </div>
      </React.Fragment>
    );
  }
  text1 = () => {
    return this.state.result;
  };
  text2 = () => {
    // console.log("inside text 2 : ", this.state.suggestion);
    return this.state.suggestion;
  };
  setColor = () => {
    // console.log("inside setcolor: ", this.state.result);
    for (const strength of strengthText) {
      // console.log("inside setcolor loop", this.state.result);
      if (strength.text === this.state.result) {
        this.setState({ bgColor: strength.bgColor });
        return;
      }
    }
    // console.log("after  setcolor");
    this.setState({ bgColor: "#e40808" });
  };

  print = (e) => {
    const text = e.target.value;

    const result = zxcvbn(text);
    const sugg = result.feedback.suggestions;
    // console.log("check: ", sugg);
    if (sugg === undefined) {
      this.setState({ suggestion: null });
    } else if (text.length === 0) {
      // console.log("suggestion : ", sugg[0]);
      this.setState({ suggestion: null });
    } else {
      var string = "";
      for (const ob of sugg) {
        string += ob;
      }
      // console.log("suggestion : ", string);
      this.setState({ suggestion: string });
    }
    if (result.score === 0 && text.length === 0) {
      this.setState({ width: 0 });
    } else {
      // const width = (result.score + 1) * 140;
      let width = (result.score + 1) * 20;
      width += "%";
      console.log(width);
      this.setState({ barWidth: width });
    }
    console.log(result.score);
    console.log("inside print :", this.state.result);
    var resultTxt;
    if (result.score === 0) {
      // console.log(text.length);
      if (text.length === 0) {
        resultTxt = "Enter Your Password";
        // this.setState({ result:  });
      } else {
        resultTxt = "Very Weak ☹";
        // this.setState({ result: "Very Weak ☹" });
      }
    } else if (result.score === 1) {
      resultTxt = "Weak ☹";

      // this.setState({ result: "Weak ☹" });
    } else if (result.score === 2) {
      resultTxt = "Medium ☹";
      // this.setState({ result: "Medium ☹" });
    } else if (result.score === 3) {
      resultTxt = "Strong ☺";
      // this.setState({ result: "Strong ☺" });
    } else if (result.score === 4) {
      resultTxt = "Very Strong ☻";
      // this.setState({ result: "Very Strong ☻" });
    }
    // console.log("end of ifs ,before setcolor : ", this.state.result);

    setTimeout(() => {
      this.setState({ result: resultTxt });
      this.setColor();
      this.setState({ text: text });
    }, 0);
  };
}

export default Password;
