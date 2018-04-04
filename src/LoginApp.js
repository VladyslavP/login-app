import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthToken } from "./common/helpers";
import { userAuthenticated }from "./actions/login";
import { authentication } from './selectors';
import LoginComponent from './components/LoginComponent';
import ContentComponent from './components/ContentComponent';
import './LoginApp.css';

class LoginApp extends Component {
  componentDidMount() {
      if (getAuthToken()) {
          this.props.userAuthenticated(true);
      }
  }

  render() {
    const {
        authentication: { isLoggedIn, error, isLoading },
        userAuthenticated
    } = this.props;

    return (
      <div className="App">
          {   isLoggedIn ?
              <ContentComponent
                  userAuthenticated={userAuthenticated}
              /> :
              <LoginComponent
                error={error}
                isLoading={isLoading}
              />
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      authentication: authentication(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAuthenticated: (data) => dispatch(userAuthenticated(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);
