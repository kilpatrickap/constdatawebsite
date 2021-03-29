import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoBlack from "../assets/logo-black.png";
import LabIcon from "../assets/icon_lab.png";
import "../styles/labourTopStyle.css";

function LabourTop() {
	return (
		<div>
			<Container fluid className="top-labour">
				<Row>
					<Col sm="auto">
						<Image src={LogoBlack} />
					</Col>
					<Col xs={10}>
						<Image src={LabIcon} />
						<h1 className="h1">LABOUR COST</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default LabourTop;
