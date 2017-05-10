var React  = require('react');
var Nav    = require('./nav');
var MapHomeRedux = require('./mapHomeRedux');


class Home extends React.Component {

  constructor() {
    super();
    this.refresh = this.refresh.bind(this);
    this.state   = {lastupdate: Date.now()};

  }

  refresh() {
        var objHome = this;
        fetch('/refresh?userId='+objHome.props.userId+'&lastupdate='+objHome.state.lastupdate)
        .then(function(data) {return data.json()} )
        .then(function(tabEvents) {
            //console.log(tabEvents);
            objHome.setState({lastupdate:  Date.now()});
            objHome.props.onHandleRefresh(tabEvents);
        });
    }

  componentDidMount(){
    this.refreshEvent = setInterval(this.refresh, 9000);
  }

  componentWillUnmount(){
    clearInterval(this.refreshEvent);
  }


  render() {
    //console.log(this.props.Events);
    var teuff  = [];
    var after  = [];
    var before = [];
    var apero  = [];  
    for(var i=0; i < this.props.Events.length; i++) {
        if (this.props.Events[i].event == "Teuff") {
            teuff.push(this.props.Events[i].name);
        } else if (this.props.Events[i].event == "After") {
            after.push(this.props.Events[i].name);
        } else if (this.props.Events[i].event == "Before") {
            before.push(this.props.Events[i].name);
        } else {
            apero.push(this.props.Events[i].name);
        }
    }   
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
            <span id="item1mobile" className="control-content active">{after}</span>
            <span id="item2mobile" className="control-content">{before}</span>
            <span id="item3mobile" className="control-content">{teuff}</span>
            <span id="item4mobile" className="control-content">{apero}</span>
          </div>
          <MapHomeRedux/>
        </div>
        <Nav/>
      </div>
    );
  }
}

module.exports = Home;