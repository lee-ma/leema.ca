import React from 'react';

class LandingPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {hover: false}
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

  render() {
    return (
      <div className="container landing-vertical-margin">
        <h1>Hello, I'm Lee</h1>
        <p>I am a Computer Engineering student at the University of Waterloo proficient with building websites using the MERN stack and building mobile apps in Android Studio. While away from my laptop, I can probably be found playing my guitar or at the gym playing badminton.</p>
        <div className="margin-vertical-md">
          <h2 style={{marginBottom: "1em"}}>No time?</h2>
          <a className="resume-btn vertical-align" onMouseOver={this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)} href="#">
            <i className="fas fa-file-alt hover-hidden"></i><i className="fas fa-arrow-alt-circle-down hover-show"></i>
            {
              !this.state.hover
              ?
              <span> Resume</span>
              :
              <span> Download</span>
            }
          </a>
          <div className="row">
            <h2 style={{marginTop: "1em"}}>Otherwise, check out </h2><a href="#" style={{marginTop: "1.15em", marginLeft: "2em", fontSize: "1.5em"}} className="dropdown-toggle" role="button" id="siteDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
            <div class="dropdown-menu" aria-labelledby="siteDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
