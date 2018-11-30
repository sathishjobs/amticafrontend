import React, { Component } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";

/**
|--------------------------------------------------
| Local imports
|--------------------------------------------------
*/
import TextInput from "./formHelpers/textInput";
import { signInValidation } from "./formHelpers/formValidations";
import { Field, reduxForm } from "redux-form";
import { signIn } from "../captain/action/user";
import "./style.css";
import {
    Link,
    Redirect,
} from "react-router-dom";

class SignIn extends Component {
    state = {
        loading: false,
        loggedIn: false,
    };

    componentDidMount() {
        this.mounted = true;
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.isLoggedIn != prevProps.user.isLoggedIn) {
            this.setState({
                loggedIn: this.props.user.isLoggedIn
            })
        }
    }

    _handleSignIn = async values => {
        try {
            this.setState({
                loading: true
            });
            let result = await this.props.signIn(values);
        } catch (e) {
            throw e;
        }
        finally {
            if (this.mounted) {
                this.setState({
                    loading: false
                })
            }
        }

    };

    componentWillUnmount() {
        this.mounted = false;
    }

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
                        <Form onSubmit={this.props.handleSubmit(this._handleSignIn)}>
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
                                content="Sign In"
                            />
                            <div style={{ marginTop: "6px", textAlign: "left" }}>
                                <Link to="/signup">Click here to Sign Up</Link>
                            </div>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

SignIn = reduxForm({
    form: "signin",
    validate: signInValidation
})(SignIn);

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { signIn })(SignIn);
