import React, { Component } from "react";
// import Projects from "./components/Projects";
import Header from "./components/Header";
import BodyContents from "./components/BodyContents";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showProfile : true
    };
  }
  toggleButton = () => {
    this.setState({ showProfile: !this.state.showProfile})
  }

  render(){
    return(
      <div>
        {/* {this.state.showProfile ? <p> I'm showing Sudhir Gupta</p> : <p> I'm Hidden</p>}
        <button onClick={this.toggleButton}>{this.state.showProfile ? <span>Hide Profile</span> : <span>Show Profile</span>}</button> */}
        <Header />
        <BodyContents />
        <Footer />
        {/* <Projects /> */}
      </div>
    )
  }
}

export default App;