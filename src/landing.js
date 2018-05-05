import React from 'react';
import Navbar from './navbar';
import pdf from './files/leemaresume.pdf'
import Footer from './footer'

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
      <div className="fadein">
      <Navbar/>
        <div className="container landing-vertical-margin">
          <h1 className="font-lora">Lee Ma</h1>
          <p>Hot sauce aficionado. NBA armchair coach. Aspiring software developer.</p>
          <div className="margin-vertical-md">
            <h2 style={{marginBottom: "1em", fontFamily: "Lora, serif"}}>Check out what I've built:</h2>
            <a className="proj-btn vertical-align" onMouseOver={this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)} href="/projects">
              <i className="fas fa-code hover-hidden"></i><i className="fas fa-arrow-alt-circle-right hover-show"></i>
              {
                !this.state.hover
                ?
                <span> Projects</span>
                :
                <span> Projects</span>
              }
            </a>
          </div>
        </div>
        <div style={{marginTop: "28.5em"}}>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default LandingPage;
