import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import Logo from '../../../components/Logo';
import useDarkMode from '../../../hooks/useDarkMode';



// eslint-disable-next-line react/prop-types
const LoginHeader = ({ isNewUser }) => {
	if (isNewUser) {
		return (
			<>
				<div className='text-center h1 fw-bold mt-5'>Create Account,</div>
				<div className='text-center h4 text-muted mb-5'>Sign up to get started!</div>
			</>
		);
	}
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>
		</>
	);
};

const Login = ({ isSignUp }) => {
	const { darkModeStatus } = useDarkMode();

	const [usernameInput, setUsernameInput] = useState(false);
	const [isNewUser, setIsNewUser] = useState(isSignUp);
	const [user, setuser] = useState({
		name: "",
		username: "",
		city: "",
		father_name: "",
		job_designation: "",
		job_location: "",
		year_of_graduation: "",
		institute: "",
		country: "",
		mobile_number: "",
		packages: "",
		duration: "",
		email: "",
		password: ""
	})
	const Handle = e => {
		const { name, value } = e.target
		setuser({
			...user,
			[name]: value
		})
	}



	async function Register() {

		axios.post("http://localhost:4000/Register",user)
        .then(res=> alert(res.data.message))
	
	}
	const handleLogin = async e => {
		e.preventDefault();
		const token = await Register();

		if (token.success) {
			setToken(token.data.access_token);
			alertSuccess();
		} else {
			alertError();
		}
	}
	function setToken(userToken) {
		sessionStorage.setItem('token', JSON.stringify(userToken));

		console.log(sessionStorage.getItem('token'));
	}

	function alertSuccess() {
		alert('success')
	}

	function alertError() {
		alert("error")
	}

	// const navigate = useNavigate();
	// const handleOnClick = useCallback(() => navigate('/'), [navigate]);

	return (
		<PageWrapper
			title={isNewUser ? 'Sign Up' : 'Login'}
			className={classNames({ 'bg-warning': !isNewUser, 'bg-info': !!isNewUser })}>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Link
										to='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<Logo width={200} />
									</Link>
								</div>
								<div
									className={classNames('rounded-3', {
										'bg-l10-dark': !darkModeStatus,
										'bg-lo10-dark': darkModeStatus,
									})}>
									<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!!isNewUser}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setUsernameInput(false);
													setIsNewUser(!isNewUser);
												}}>
												Login
											</Button>
										</div>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!isNewUser}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setUsernameInput(false);
													setIsNewUser(!isNewUser);
												}}>
												Sign Up
											</Button>
										</div>
									</div>
								</div>

								<LoginHeader isNewUser={isNewUser} />

								<form className='row g-4' >
									{isNewUser ? (
										<>
											<div className='col-12'>
												<FormGroup
													id='name'
													isFloating
													label='Name'>

													<Input type='text' autoComplete='Name' onChange={Handle} />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='uername'
													isFloating
													label='UserName'>
													<Input autoComplete='given-name' onChange={Handle} />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='city'
													isFloating
													label='City'>
													<Input autoComplete='city' onChange={Handle} />
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='father_name'
													isFloating
													label='Father Name'>
													<Input
														type='FatherName'
														autoComplete='FatherName'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='job_designation'
													isFloating
													label='job_designation'>
													<Input
														type='text'
														autoComplete='job_designation'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='Job_location'
													isFloating
													label='Job_location'>
													<Input
														type='text'
														autoComplete='Job_location'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='year_of_graduation'
													isFloating
													label='Year_of_graduation'>
													<Input
														type='text'
														autoComplete='ye'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='institute'
													isFloating
													label='institute'>
													<Input
														type='text'
														autoComplete='institute'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='country'
													isFloating
													label='Country'>
													<Input
														type='text'
														autoComplete='country'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='mobile_number'
													isFloating
													label='mobile_number'>
													<Input
														type='number'
														autoComplete='mobile_number'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='Packages'
													isFloating
													label='Packages'>
													<Input
														type='text'
														autoComplete='Packeges'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='Duration'
													isFloating
													label='Duration'>
													<Input
														type='number'
														autoComplete='Duration'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='Email'
													isFloating
													label='Email'>
													<Input
														type='email'
														autoComplete='Email'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='Password'
													isFloating
													label='Password'>
													<Input
														type='Password'
														autoComplete='Password'
														onChange={Handle}
													/>
												</FormGroup>
											</div>
											{/* <div className='col-12'>
												<FormGroup
													id='Password_confirmation'
													isFloating
													label='Password_confirmation'>
													<Input
														type='password'
														autoComplete='Password'
														onChange={Handle}

													/>
												</FormGroup>
											</div> */}
											<div className='col-12'>
												<Button
													color='info'
													className='w-100 py-3'
													onClick={handleLogin}      >
													Sign Up
												</Button>
											</div>
										</>
									) : (
										<>
											<div className='col-12'>
												{!usernameInput ? (
													<FormGroup
														id='login-username'
														isFloating
														label='Your email or username'>
														<Input autoComplete='username' />
													</FormGroup>
												) : (
													<FormGroup
														id='login-password'
														isFloating
														label='Password'>
														<Input
															type='password'
															autoComplete='password'
														/>
													</FormGroup>
												)}
											</div>
											<div className='col-12'>
												{!usernameInput ? (
													<Button
														color='warning'
														className='w-100 py-3'
														onClick={() => setUsernameInput(true)}>
														Continue
													</Button>
												) : (
													<Button
														color='warning'
														className='w-100 py-3'
													>
														Login
													</Button>
												)}
											</div>
										</>
									)}

									{/* BEGIN :: Social Login */}
									{!usernameInput && (
										<>
											<div className='col-12 mt-3 text-center text-muted'>
												OR
											</div>
											<div className='col-12 mt-3'>
												<Button
													isOutline
													color={darkModeStatus ? 'light' : 'dark'}
													className={classNames('w-100 py-3', {
														'border-light': !darkModeStatus,
														'border-dark': darkModeStatus,
													})}
													icon='CustomApple'
												>
													Sign in with Apple
												</Button>
											</div>
											<div className='col-12'>
												<Button
													isOutline
													color={darkModeStatus ? 'light' : 'dark'}
													className={classNames('w-100 py-3', {
														'border-light': !darkModeStatus,
														'border-dark': darkModeStatus,
													})}
													icon='CustomGoogle'
												>
													Continue with Google
												</Button>
											</div>
										</>
									)}
									{/* END :: Social Login */}
								</form>
							</CardBody>
						</Card>
						<div className='text-center'>
							<a
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-light': isNewUser,
									'link-dark': !isNewUser,
								})}>
								Privacy policy
							</a>
							<a
								href='/'
								className={classNames('link-light text-decoration-none', {
									'link-light': isNewUser,
									'link-dark': !isNewUser,
								})}>
								Terms of use
							</a>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Login.propTypes = {
	isSignUp: PropTypes.bool,
};
Login.defaultProps = {
	isSignUp: false,
};

export default Login;
