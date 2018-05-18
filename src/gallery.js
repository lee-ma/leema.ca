import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import GalleryImage from './galleryimg';

class Gallery extends React.Component {
  render() {
    return(
      <div style={{width: "fit-content"}} className="fadein-img">
        <Navbar active={"gallery"}/>
        <div className="container-fluid" style={{textAlign: "center"}}>
          <div className="row gal-row" style={{marginTop: "7.5em"}}>
            <div className="col-12 col-sm-4">
              <GalleryImage loadingImg="./assets/gallery/compressed/raps-min.jpg" hdImg="./assets/gallery/raps.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/nfl-min.jpg" hdImg="./assets/gallery/nfl.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/forest-min.jpg" hdImg="./assets/gallery/forest.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/la1-min.jpg" hdImg="./assets/gallery/la1.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/nfl_2-min.jpg" hdImg="./assets/gallery/nfl_2.jpg"/>
            </div>
            <div className="col-12 col-sm-4">
              <GalleryImage loadingImg="./assets/gallery/compressed/mtns-min.jpg" hdImg="./assets/gallery/mtns.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/nyc1-min.jpg" hdImg="./assets/gallery/nyc1.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/umbrellas-min.jpg" hdImg="./assets/gallery/umbrellas.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/uclabear-min.jpg" hdImg="./assets/gallery/uclabear.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/la2-min.jpg" hdImg="./assets/gallery/la2.jpg"/>

            </div>
            <div className="col-12 col-sm-4">
              <GalleryImage loadingImg="./assets/gallery/compressed/magic-min.jpg" hdImg="./assets/gallery/magic.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/lobsters-min.jpg" hdImg="./assets/gallery/lobsters.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/ilybtc-min.jpg" hdImg="./assets/gallery/ilybtc.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/washington-min.jpg" hdImg="./assets/gallery/washington.jpg"/>
              <GalleryImage loadingImg="./assets/gallery/compressed/skiing-min.jpg" hdImg="./assets/gallery/skiing.jpg"/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Gallery
