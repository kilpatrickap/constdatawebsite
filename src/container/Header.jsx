import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "../assets/icon.png";
import "../styles/headerStyle.css";


function Header() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="/">
					<img
						alt="Icon"
						src={Icon}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					const DATA
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/materials">Materials</Nav.Link>
						<Nav.Link href="/equipment">Equipment</Nav.Link>
						<Nav.Link href="/labour">Labour</Nav.Link>
						<Nav.Link href="/feedback">Feedback</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
