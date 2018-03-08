import React from 'react';
import Slide from './slide';
import Scroller from './scroller'

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className="container-fluid" style={{marginTop: "15em"}} id="bottom">
        <div className="row">
          <div className="col-sm-2">
            <Scroller/>
          </div>
          <div className="col-12 col-sm-10">
            <Slide image={"https://fsmedia.imgix.net/bd/00/ec/c7/77a9/4e0e/b216/e65853da8769/from-the-quotcollecting-innovation-todayquot-interview-with-innovator-elon-musk-on-june-26-2008.jpeg"}/>
            <Slide image={"https://www.thestar.com/content/dam/thestar/business/2018/03/07/amazon-ceo-jeff-bezos-hits-100-billion-milestone-trumps-wealth-sinks-annual-forbes-list-shows/jeff_bezos_list.jpg.size.custom.crop.1086x653.jpg"}/>
            <Slide image={"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/03/104818765-GettyImages-864125128-tim-cook.1910x1000.jpg"} />
          </div>
          <p>{this.state.message}</p>
        </div>
      </div>
    )
  }
}

export default Projects;
