import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <span style={{float: "right"}}>
          <a href="https://github.com/LeeMa9321"><i className="fab fa-github-square social-icons" style={{transform: "scale(2)"}}></i></a>
          <a href="https://linkedin.com/in/lma321"><i className="fab fa-linkedin social-icons" style={{transform: "scale(2)"}}></i></a>
          <a href="mailto:lee.ma@uwaterloo.ca"><i className="fas fa-envelope-square social-icons" style={{transform: "scale(2)"}}></i></a>
        </span>
      </div>
    )
  }
}

export default Footer;
