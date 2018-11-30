import React from 'react'
import {connect} from "react-redux";

import {
    Route,
    Redirect,
  } from "react-router-dom";



const  PrivateRoute = ({user, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          user.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  
  const mapStateToProps = (state)=>{
      return {
          user : state.user
      }
  };

export default connect(mapStateToProps,{})(PrivateRoute);
  