import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import Kil from "../assets/kil.png";

const carouselStyle = {
	backgroundColor: "#40394a",
	color: "#40394a",
	paddingTop: "50px",
	paddingBottom: "50px",
	textAlign: "center",
};

const testimonialImage = {
	width: "200px",
	height: "200px",
	borderRadius: "100%",
	margin: "auto",
	textAlign: "left",
	position: "relative",
	right: "400px",
};

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div>
			<Container fluid style={carouselStyle}>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img
							style={testimonialImage}
							// className="d-block w-100"
							src={Kil}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
								vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
								elit libero, a pharetra augue mollis interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={testimonialImage}
							// className="d-block w-100"
							src={Kil}
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={testimonialImage}
							// className="d-block w-100"
							src={Kil}
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
}

export default ControlledCarousel;
