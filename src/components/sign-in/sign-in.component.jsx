import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss'

export class SignIn extends Component {
	constructor() {
		super()

		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		this.setState({ email: '', password: '' })
	}

	handleChange = event => {
		const { value, name } = event.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						handleChange={this.handleChange}
						label='email'
						value={this.state.email}
						required
					/>

					<FormInput
						type='password'
						name='password'
						label='password'
						handleChange={this.handleChange}
						value={this.state.password}
						required
					/>

					<input type='submit' value='Submit Form' />
				</form>
			</div>
		)
	}
}

export default SignIn