import React from 'react';

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLoaded: false
    }
  }

  handleLoad(){
    this.setState({imgLoaded: true})
  }

  render() {
    const {hdImg, loadingImg} = this.props
    return (
      <img
        src={this.state.imgLoaded ? hdImg : loadingImg}
        onLoad={this.handleLoad.bind(this)}
        className="img-fluid fadein-img"
      />
    )
  }
}

export default GalleryImage;
