var React  = require('react');
var Nav    = require('./nav');
var MapHome = require('./mapHome');


class Home extends React.Component {

  constructor() {
    super();

  }


  render() {
    return (
      <div>
        <div className="content">
          <div className="segmented-control">
            <a className="control-item active" href="#item1mobile">
              After
            </a>
            <a className="control-item" href="#item2mobile">
              Before
            </a>
            <a className="control-item" href="#item3mobile">
              Teuff
            </a>
            <a className="control-item" href="#item4mobile">
              Apéro
            </a>
          </div>
          <div className="card">
            <span id="item1mobile" className="control-content active">After 1</span>
            <span id="item2mobile" className="control-content">Before 1<br/>Before2</span>
            <span id="item3mobile" className="control-content">Teuff 1<br/>Teuff 2<br/>Teuff 3</span>
            <span id="item4mobile" className="control-content">Apéro 1<br/>Apéro 2<br/>Apéro 3<br/>Apéro 4</span>
          </div>
          <MapHome/>
        </div>
        <Nav/>
      </div>
    );
  }
}

module.exports = Home;