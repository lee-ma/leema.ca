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
          <h2>findOutMore() {`{`}</h2>
          <h3 className="font-code">time == 0</h3>
          <h3 className="font-code" style={{marginBottom: "1em"}}>?</h3>
          <a className="resume-btn vertical-align" onMouseOver={this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)} href="#">
            {
              !this.state.hover
              ?
              <span><i className="fas fa-file-alt"></i> Resume</span>
              :
              <span><i className="fas fa-arrow-alt-circle-down"></i> Download</span>
            }
          </a>
          <h3 className="font-code" style={{marginTop: "1em"}}>:</h3>
          <h3 className="font-code"><a href="/projects" className="font-link">checkOutProjects();</a></h3>
          <h2>{`}`}</h2>
        </div>
      </div>
    )
  }
}

export default LandingPage;
