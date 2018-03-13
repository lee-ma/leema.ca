import React from 'react';
import ReactDOM from 'react-dom';

import Slide from './slide';
import Scroller from './scroller'
import Navbar from './navbar';
import Footer from './footer';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={`${this.state.className}`}>
        <Navbar active={"projects"}/>
        <div className="container-fluid" style={{marginTop: "17.5em"}}>
          <div className="row">
            <div className="col-sm-1">
              <Scroller/>
            </div>
            <div className="col-12 col-sm-11">
              <div className="mobile-full"><Slide image={"./assets/atheneum-banner.svg"} color={"#f5f5f5"} title="Atheneum" post="/atheneum" live="http://atheneumtutors.info" public={false}/></div>
              <div className="mobile-full"><Slide image={"./assets/whosright-banner.svg"} color={"#6a1b9a"} title="Who's Right" post="/whosright" public={true} github="https://github.com/LeeMa9321/whosright"/></div>
              <div className="mobile-full"><Slide image={"../assets/daytrip-banner.svg"} color={"linear-gradient(to right, #00F29B,#02EE75)"} title="DayTrip" post="/daytrip" public={true} github="https://github.com/LeeMa9321/daytripandroid" live="https://play.google.com/store/apps/details?id=leema.com.daytrip1&hl=en"/></div>
              <div className="mobile-full"><Slide image={"../assets/foodiy-banner.svg"} color={"#eeeeee"} title="FOODIY" comingsoon={true}/></div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Projects;
