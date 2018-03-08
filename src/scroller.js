import React from 'react';

class Scroller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <div className="scroll">
        <div className="row">
          <div className="col-3">
            <div className="scrollbar">
              <div><i className="fas fa-arrow-right scroller"></i></div>
            </div>
          </div>
          <div className="col-9 margin-vertical-sm">
            <p className="list">Elon</p>
            <p className="list">Jeff</p>
            <p className="list">Tim</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Scroller
