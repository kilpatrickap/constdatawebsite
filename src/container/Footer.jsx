import React from "react";
import { Col, Image } from "react-bootstrap";
import Icon from "../assets/icon.png";
import "../styles/footerStyle.css";

function Footer() {
	return (
		<footer className="footer">
			
				<Col>
					<Image src={Icon} />
					<p>const DATA center ©</p>
					<p>Copyright @ 2021</p>
				</Col>
			
		</footer>
	);
}

export default Footer;
