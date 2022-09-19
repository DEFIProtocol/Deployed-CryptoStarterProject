import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from './app/actions/authActions';


class Login extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

  render() {
      // const {  } = this.;
    return (
    <div>
        <form onSubmit={this.handleSubmit} className='login'>
            <h2 className="login-title">Login</h2>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button  type = "submit" className="login-submit">
                    Login
                </button>
                <div>
                  
                </div>
            </div>
        </form>
    </div>
    );
  }
}

//const mapStateToProps = (state) => {
//    return {
//        .auth.authError
//    }
//}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect( null, mapDispatchToProps)(Login);

