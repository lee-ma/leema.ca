import React from 'react';

class Scroller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <div className="scroll">
        <div className="scrollbar">
          <div className="scroller"><i className="fas fa-arrow-right scroller" style={{width: "2em", height: "2em"}}></i></div>
        </div>
      </div>
    )
  }
}

export default Scroller
