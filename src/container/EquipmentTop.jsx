import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoBlack from "../assets/logo-black.png";
import EqpmtIcon from "../assets/icon_eqpmt.png";
import "../styles/equipmentTopStyle.css";

function EquipmentTop() {
	return (
		<div>
			<Container fluid className="top-equipment">
				<Row>
					<Col sm="auto">
						<Image src={LogoBlack} />
					</Col>
					<Col xs={10}>
						<Image src={EqpmtIcon} />
						<h1 className="h1">EQUIPMENT COST</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default EquipmentTop;
