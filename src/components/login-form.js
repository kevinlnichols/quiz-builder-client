import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import './login-form.css';

import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

const inputStyle = {
    border: '1 px solid black',
    height: 100
}

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    className="input-field"
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                    style={inputStyle}
                />
                <label htmlFor="password">Password</label>
                <Field
                    className="input-field"
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log In
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);