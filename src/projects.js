import React from 'react';
import ReactDOM from 'react-dom';

import Slide from './slide';
import Scroller from './scroller'
import Navbar from './navbar';
import Footer from './footer';

class Projects extends React.Component {
  render() {
    return (
      <div className="fadein">
        <Navbar active={"projects"}/>
        <div className="container-fluid" style={{marginTop: "10em"}}>
          <div className="row">
            <div className="col-12">
              <div className="mobile-full"><Slide image={"./assets/atheneum-banner.svg"} color={"#f5f5f5"} title="Atheneum" post="/atheneum" live="http://atheneumtutors.info" public={false}/></div>
              <div className="mobile-full"><Slide image={"../assets/zephyr-banner.svg"} color={"#FF8A65"} title="Zephyr" post="/zephyr" public={true} github="https://github.com/lee-ma/zephyr" live="http://lee-zephyr.herokuapp.com"/></div>
              <div className="mobile-full"><Slide image={"./assets/whosright-banner.svg"} color={"#6a1b9a"} title="Who's Right" post="/whosright" public={true} github="https://github.com/lee-ma/whosrightapp"/></div>
              <div className="mobile-full"><Slide image={"../assets/daytrip-banner.svg"} color={"linear-gradient(to right, #00F29B,#02EE75)"} title="DayTrip" post="/daytrip" public={true} github="https://github.com/lee-ma/daytripandroid" live="https://play.google.com/store/apps/details?id=leema.com.daytrip1&hl=en"/></div>
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
