import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './registration-page.css';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="register-home">
            <h2>Register for Quiz Builder</h2>
            <RegistrationForm />
            <Link to="/">Login</Link>
        </div>
    );
}

/*const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});*/

export default (RegistrationPage);