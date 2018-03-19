import React from 'react';
import Navbar from './navbar';
import pdf from './files/leemaresume.pdf'

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
      <div>
      <Navbar/>
        <div className="container landing-vertical-margin">
          <h1 className="font-lora">Lee Ma</h1>
          <p>Hot sauce aficionado. NBA armchair coach. Aspiring software developer.</p>
          <div className="margin-vertical-md">
            <h2 style={{marginBottom: "1em", fontFamily: "Lora, serif"}}>No time?</h2>
            <a className="resume-btn vertical-align" onMouseOver={this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)} target="_blank" href={pdf}>
              <i className="fas fa-file-alt hover-hidden"></i><i className="fas fa-arrow-alt-circle-down hover-show"></i>
              {
                !this.state.hover
                ?
                <span> Resume</span>
                :
                <span> Download</span>
              }
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
