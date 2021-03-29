import React from "react";
import { Card, Button, CardDeck, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon_mats from "../assets/mats.png";
import Icon_eqpmt from "../assets/eqpmt.png";
import Icon_lab from "../assets/lab.png";
import "../styles/middleStyle.css";

function Middle() {
	return (
		<div className="center">
			<CardDeck>
				<Card border="secondary">
					<Card.Header>MATERIALS</Card.Header>
					<Image className="card-img" src={Icon_mats} />
					<Card.Body>
						<Card.Text>Click here for Materials cost</Card.Text>
						<Link to="/materials">
							<Button variant="primary" size="lg" block>Materials</Button>
						</Link>
						
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card border="secondary">
					<Card.Header>EQUIPMENT</Card.Header>
					<Card.Img variant="top" src={Icon_eqpmt} />
					<Card.Body>
						<Card.Text>Click here for Equipment cost.</Card.Text>
						<Link to="/equipment">
							<Button variant="primary" size="lg" block>Equipment</Button>
						</Link>
						
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 4 mins ago</small>
					</Card.Footer>
				</Card>
				<Card border="secondary">
					<Card.Header>LABOUR</Card.Header>
					<Card.Img variant="top" src={Icon_lab} />
					<Card.Body>
						<Card.Text>Click here for Labour cost</Card.Text>
						<Link to="/labour">
							<Button variant="primary" size="lg" block>Labour</Button>
						</Link>
						
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 7 mins ago</small>
					</Card.Footer>
				</Card>
			</CardDeck>
		</div>
	);
}

export default Middle;
