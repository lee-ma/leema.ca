import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <span style={{float: "right", paddingBottom: "2em"}}>
          <a href="https://github.com/lee-ma"><i className="fab fa-github-square social-icons" style={{transform: "scale(2)"}}></i></a>
          <a href="https://linkedin.com/in/lma321"><i className="fab fa-linkedin social-icons" style={{transform: "scale(2)"}}></i></a>
          <a href="mailto:lee.ma@uwaterloo.ca"><i className="fas fa-envelope-square social-icons" style={{transform: "scale(2)"}}></i></a>
        </span>
      </div>
    )
  }
}

export default Footer;
