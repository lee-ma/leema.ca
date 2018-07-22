import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import GalleryImage from './galleryimg';

class Contact extends React.Component {
  render() {
    return(
      <div className="fadein">
        <Navbar active={"contact"}/>
        <div className="container-fluid">
          <div className="row" style={{marginTop: "7.5em"}}>
            <div className="col-12 col-sm-6">
              <GalleryImage loadingImg="./assets/gallery/compressed/calgary-min.jpg" hdImg="./assets/gallery/calgary.jpg"/>
            </div>
            <div className="col-12 col-sm-6" style={{padding:"0 0.75em"}}>
              <h3 className="subheader">About me</h3>
              <p className="blog-body">
                Hi there, my name is Lee. I was born in St. John's, Newfoundland, but raised in Calgary, Alberta. I've made some great friends and some equally great memories along the way. These days, I'm somewhere between the two cities, trying to get a degree in Computer Engineering at the University of Waterloo. 🇨🇦 🇨🇦 🇨🇦
              </p>
              <h3 className="subheader" style={{marginTop: "2.5em"}}>Contact info</h3>
              <p><a className="contact-link" href="tel:+14039190588"><i className="fas fa-phone"></i> +1(403)-919-0588</a></p>
              <p><a className="contact-link" href="mailto:lee.ma@uwaterloo.ca"><i className="fas fa-envelope"></i> lee.ma@uwaterloo.ca</a></p>
              <p><a className="contact-link" href="https://www.github.com/lee-ma"><i className="fab fa-github"></i> https://github.com/lee-ma</a></p>
              <p><a className="contact-link" href="https://www.linkedin.com/in/lma321"><i className="fab fa-linkedin"></i> https://linkedin.com/in/lma321</a></p>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Contact
