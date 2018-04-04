import React from 'react';

class ZephyrBlog extends React.Component {
  render() {
    return(
      <div className="container fadein">
        <div className="row">
          <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
          <div className="col-11 offset-md-1">
            <h1 className="blog-title">Zephyr</h1>
            <p className="blog-subtitle">A place to keep my daily reflections.</p>
            <div>
              <p className="blog-body">Coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ZephyrBlog;
