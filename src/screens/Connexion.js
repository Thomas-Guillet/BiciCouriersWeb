import React, { Component } from 'react';

class Connexion extends Component {

  state = {
    username: '',
    password: '',
    error: ''
  };

  dismissError = () => {
    this.setState({error: ''});
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({error: 'Username is required'});
    }

    if (!this.state.password) {
      return this.setState({error: 'Password is required'});
    }

    if (this.state.username && this.state.password) {
      this.props.history.push("/");
    }

    return this.setState({error: ''});
  };

  handleUserChange = evt => {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange = evt => {
    this.setState({
      password: evt.target.value,
    });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {this.state.error &&(
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange}/>
          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange}/>
          <input type="submit" value="Log In" data-test="submit"/>
        </form>
      </div>
    );
  }
}

export default Connexion;