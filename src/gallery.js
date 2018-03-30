import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Gallery extends React.Component {
  render() {
    return(
      <div style={{width: "fit-content"}} className="fadein-img">
        <Navbar active={"gallery"}/>
        <div className="container-fluid" style={{textAlign: "center"}}>
          <div className="row gal-row" style={{marginTop: "7.5em"}}>
            <div className="col-12 col-sm-4">
              <img className="img-fluid fadein-img" src="./assets/gallery/raps.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/nfl.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/forest.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/la1.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/nfl_2.jpg"/>
            </div>
            <div className="col-12 col-sm-4">
              <img className="img-fluid fadein-img" src="./assets/gallery/mtns.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/nyc1.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/umbrellas.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/uclabear.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/la2.jpg"/>

            </div>
            <div className="col-12 col-sm-4">
              <img className="img-fluid fadein-img" src="./assets/gallery/magic.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/lobsters.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/ilybtc.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/washington.jpg"/>
              <img className="img-fluid fadein-img" src="./assets/gallery/skiing.jpg"/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Gallery
