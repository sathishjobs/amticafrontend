import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {signOut} from "../captain/action/user";
import {connect} from "react-redux";
import "./style.css";
class Home extends Component {
    state = {  }
    handleLogout = ()=>{
        this.props.signOut();
    }
    render() {
        return (
            <div style={{textAlign : "center",marginTop : "100px"}}>
                    <h3>{`Hi ${this.props.user.data.name} Welcome to Home :)`}</h3>
                    <Button onClick={this.handleLogout} primary>Logout</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps,{signOut})(Home);