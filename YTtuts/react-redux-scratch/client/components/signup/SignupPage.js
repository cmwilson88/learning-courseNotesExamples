import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions'
import PropTypes from 'prop-types';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
    render() {
        const {userSignupRequest, addFlashMessage, isUserExists} = this.props 
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm 
                        userSignupRequest={userSignupRequest}
                        addFlashMessage={addFlashMessage}
                        history={this.props.history}
                        isUserExists={isUserExists}
                    />
                </div>
            </div>
        )
    }
}

SignupPage.propTypes = {
    history: PropTypes.object.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage);