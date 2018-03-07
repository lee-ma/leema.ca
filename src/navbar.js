import React from 'react';

class Navbar extends React.Component {
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
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">Lee Ma</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <a className="nav-item nav-resume" onMouseOver={this.mouseOver.bind(this)} onMouseOut = {this.mouseOut.bind(this)} href="#">
                {
                  !this.state.hover
                  ?
                  <span><i className="fas fa-file-alt"></i><i className="fas fa-arrow-alt-circle-down" style={{display: "none"}}></i> Resume</span>
                  :
                  <span><i className="fas fa-arrow-alt-circle-down"></i><i className="fas fa-file-alt" style={{display: "none"}}></i> Download</span>
                }
            </a>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
