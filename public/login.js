var React  = require('react');
import {Redirect} from 'react-router';


class Login extends React.Component {

  constructor() {
    super();
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    this.state       = {redirect: false};
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }
  
  handleSubmit(e){
    e.preventDefault()
    //console.log(this.state);

    let data = {
        username: this.state.username,
        password: this.state.password
    }
    fetch('/login?data='+JSON.stringify(data))
      .then(() => this.setState({ redirect: true }));
  }


  render() {
    if (this.state.redirect == true) {
      return (<Redirect to="/home"/>);
    }

    return (
      <div>
        <div>
            <h1 className="titleTop">Login:</h1>
            <form onSubmit={this.handleSubmit} className="input-group">
              <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/>
              <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
              <button type="submit" className="btn btn-primary btn-block btn-outlined">Block button</button>
            </form>
        </div>
      </div>
    );
  }
}

module.exports = Login;