import React from 'react';

class Slide extends React.Component {
  render() {
    return (
      <div className="slide" style={{background: `${this.props.color}`}}>
        <div href="#" className="image" style={{background: `url(${this.props.image}) no-repeat center`}}>
          <div className="mask">
            <h1 className="mask-header">{this.props.title}</h1>
            {
              !this.props.comingsoon
              ?
              <div style={{float: "right"}}>
                <ul style={{textAlign: "right", marginRight: "0.75em"}}>
                  <li style={{marginBottom: "2em"}}><a href={`${this.props.post}`} className="slide-links">More info</a></li>
                  <li style={{marginBottom: "2em"}}><a href="#" className="slide-links">Live example</a></li>
                  <li><a href="#" className="slide-links">Github</a></li>
                </ul>
              </div>
              :
              <div><h4 href="#" style={{color: "#bcbcbc", textAlign: "right", marginRight: "1.5em"}}>Coming Soon</h4></div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Slide;
