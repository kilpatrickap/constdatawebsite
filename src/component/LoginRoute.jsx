import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";
import { setUserSession } from "../Utils/Common";


const cardStyle = {
	boxShadow: "5px 8px 24px 5px rgba(208,216,243,0.6)",
	width: "25%",
	padding: "20px",
	textAlign: "Left",
};

function LoginRoute(props) {
	const username = useFormInput("");
	const password = useFormInput("");
	
	// handle button click of login form
	const handleLogin = () => {
		axios
			.post("http://localhost:4000/auth/login/", {
				username: username.value,
				password: password.value,
			})
			.then((response) => {
				console.log(response.data);
				setUserSession( response.data.user);
				props.history.push("/admin"); 		//Unhandled Rejection (TypeError): Cannot read property 'push' of undefined
			});
	};

	return (
		<div class="container mt-5" style={cardStyle}>
			<h1 style={{ textAlign: "Center" }}>Admin</h1>
			<Card>
				<div>
					<div class="card">
						<div class="card-body">
							<div class="form-group">
								<label for="text">Username</label>
								<input
									type="text"
									{...username}
									class="form-control"
									name="username"
								></input>
							</div>
							<div class="form-group">
								<label for="password">Password</label>
								<input
									type="password"
									{...password}
									class="form-control"
									name="password"
								/>
							</div>

							<input
								type="button"
								value="Login"
								className="btn btn-secondary btn-block"
								onClick={handleLogin}
							/>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};

export default withRouter(LoginRoute);
