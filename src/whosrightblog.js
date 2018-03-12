import React from 'react';

class WhosRight extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-1">
            <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
          </div>
          <div className="col-11">
            <h1 className="blog-title">Who's Right?</h1>
            <p className="blog-subtitle">See what the internet thinks about your opinions</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WhosRight
