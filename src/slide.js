import React from 'react';

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="slide">
        <div className="image" style={{background: `url(${this.props.image})`}}>
          <div className="font-white">Hello</div>
        </div>
      </div>
    )
  }
}

export default Slide;
