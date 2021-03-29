import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoBlack from "../assets/logo-black.png";
import MatsIcon from "../assets/icon_mats.png";
import "../styles/materialTopStyle.css";

function Top() {
	return (
		<div>
			<Container fluid className="top-material">
				<Row>
					<Col sm="auto">
						<Image src={LogoBlack} />
					</Col>
					<Col xs={10}>
						<Image src={MatsIcon} />
						<h1 className="h1">MATERIALS COST</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Top;
