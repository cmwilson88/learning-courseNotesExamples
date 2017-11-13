import React from 'react';
import timezones from '../../data/timezones'
import map from 'lodash/map';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import classnames from 'classnames';

class SignupForm extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);
		if(!isValid)  {
			this.setState({
				errors
			})
		}

		return isValid
	}

	onSubmit(e) {
		e.preventDefault();
		
		if(this.isValid()) {
			this.setState({
				isLoading: true
			})
			this.props.userSignupRequest(this.state)
				.then(() => {
					this.props.history.push('/')
				})
				.catch(err => {
					console.log(err)
					if(err) {
						this.setState({
							errors: err.response.data,
							isLoading: false
						})
					}
				})
		}
	}

	render() {
		const { errors } = this.state
		const options = map(timezones, (val, key) => {
			return <option key={val} value={val}>{key}</option>
		})
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community</h1>

				<TextFieldGroup
					error={errors.username}
					label="Username"
					onChange={this.onChange}
					value={this.state.username}
					field="username"
				/>

				<TextFieldGroup
					error={errors.email}
					label="Email"
					onChange={this.onChange}
					value={this.state.email}
					field="email"
					type="email"
				/>

				<TextFieldGroup
					error={errors.password}
					label="Password"
					onChange={this.onChange}
					value={this.state.password}
					field="password"
					type="password"
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation}
					label="Confirm Password"
					onChange={this.onChange}
					value={this.state.passwordConfirmation}
					field="passwordConfirmation"
					type="password"
				/>

				<div className={classnames("form-group", { 'has-error': errors.timezone})}>
					<label className="control-label">Timezone</label>
					<select 
						className="form-control"
						name="timezone"
						onChange={this.onChange}
						value={this.state.timezone}>
						<option value="" disabled>Choose Your Timezone</option>
						{options}
					</select>
					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
				</div>

				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
				</div>
			</form>
		)
	}
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm