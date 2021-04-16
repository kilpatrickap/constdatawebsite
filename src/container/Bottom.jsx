import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/bottomStyle.css";

function Bottom() {
	return (
		<div>
			<Container fluid className="bottom">
				<Row>
					<Col xs lg="6">
						<h5>About const DATA center</h5>
						<p>
							const DATA center is Ghana’s pioneer and leading source of construction
							cost information. We offer dependable cost data that is locally
							relevant, accurate and up-to-date. Available in online formats,
							Clients, Developers, Architects, Engineers, Quantity Surveyors and Contractors use
							const DATA center to get the information they need to build competitive
							cost estimates and control construction costs.
						</p>
					</Col>
					<Col xs lg="4">
						{" "}
					</Col>
					<Col xs lg="2">
						<h5>Contact</h5>
						<p>Tel: +233541193598</p>
						<p>Email: constdatacenter@gmail.com</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Bottom;
