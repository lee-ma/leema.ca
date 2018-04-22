import React from 'react';
import ReactDOM from 'react-dom';

import Slide from './slide';
import Scroller from './scroller'
import Navbar from './navbar';
import Footer from './footer';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fadein">
        <Navbar active={"blog"}/>
        <div className="container-fluid" style={{marginTop: "17.5em"}}>
          <h3>Coming soon...</h3>
          {/* <div className="row">
            <div className="col-sm-1">
              <Scroller/>
            </div>
            <div className="col-12 col-sm-11">
              <div className="mobile-full"><Slide image={"https://uwaterloo.ca/future-students/sites/ca.future-students/files/uploads/images/engineering_5_2_.jpg"} title="My First Year" color={"#f5f5f5"} comingsoon={true}/></div>
            </div>
          </div> */}
        </div>
        <div style={{marginTop: "37.5em"}}>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Blog;
