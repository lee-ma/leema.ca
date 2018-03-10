import React from 'react';

class AtheneumBlog extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="container">
        <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
        <h1 className="blog-title">Atheneum</h1>
        <h4 className="blog-subtitle">Find and connect with local teachers and students</h4>
        <p></p>
      </div>
    )
  }
}

export default AtheneumBlog;
