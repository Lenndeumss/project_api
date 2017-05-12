var React  = require('react');
import {Redirect} from 'react-router';


class Register extends React.Component {

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
        email   : this.state.email,
        password: this.state.password
    }
    fetch(serverPath+'register?data='+JSON.stringify(data))
      .then(() => this.setState({ redirect: true }));
  }


  render() {
    if (this.state.redirect == true) {
      return (<Redirect to="/home"/>);
    }

    return (
      <div>
        <div>
            <h1 className="titleTop">Register</h1>
            <form onSubmit={this.handleSubmit} className="input-group">
              <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/>
              <input onChange={this.handleChange} type="email" name="email" placeholder="Email"/>
              <input onChange={this.handleChange} type="text" name="password" placeholder="Password"/>
              <button type="submit" className="btn btn-primary btn-block btn-outlined">Block button</button>
            </form>
        </div>
      </div>
    );
  }
}

module.exports = Register;