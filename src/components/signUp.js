import React, { Component } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
/**
|--------------------------------------------------
| Local imports
|--------------------------------------------------
*/
import TextInput from "./formHelpers/textInput";
import { signUpValidation } from "./formHelpers/formValidations";
import { Field, reduxForm } from "redux-form";
import { signUp } from "../captain/action/user";

import "./style.css";
import {
    Link,
    Redirect,
} from "react-router-dom";

class SignUp extends Component {
    state = {
        loading: false,
        loggedIn: false
    };

    componentDidMount() {
        this.mounted = true;
    }

    componentDidUpdate(prevProps) {
        if(this.props.user.isLoggedIn !== prevProps.user.isLoggedIn){
            this.setState({
                loggedIn : this.props.user.isLoggedIn
            })
        }
      }

    componentWillUnmount() {
        this.mounted = false;
    }

    _handleSignUp = async values => {
        try {
            this.setState({
                loading: true
            });
            await this.props.signUp(values);
        } catch (error) {
            throw error;
        } finally {
            if (this.mounted) {
                this.setState({
                    loading: false
                });
            }
        }
    };


    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        if (this.state.loggedIn) return <Redirect to={from} />;
        return (
            <div>
                <br />
                <br />
                <Grid
                    textAlign="center"
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header
                            className="textColor"
                            as="h2"
                            color="blue"
                            textAlign="center"
                        >
                            Amtica
                        </Header>
                        <br />
                        <Form onSubmit={this.props.handleSubmit(this._handleSignUp)}>
                            <Field
                                component={TextInput}
                                name="name"
                                label=""
                                containerStyle={{}}
                                placeholder="Name"
                            />
                            <Field
                                component={TextInput}
                                name="email"
                                label=""
                                containerStyle={{}}
                                placeholder="Email address"
                            />

                            <Field
                                component={TextInput}
                                name="password"
                                label=""
                                containerStyle={{}}
                                inputType="password"
                                placeholder="Password"
                            />
                            <br />
                            <Button
                                loading={this.state.loading}
                                disabled={this.props.submitting}
                                basic
                                fluid
                                color="blue"
                                content="Sign Up"
                            />
                            <div style={{marginTop : "6px",textAlign : "left"}}>
                                <Link to="/signin">Already have account Sign In </Link>
                            </div>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

SignUp = reduxForm({
    form: "signup",
    validate: signUpValidation,
})(SignUp);

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { signUp })(SignUp);
