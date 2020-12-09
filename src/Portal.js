import { Container } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Col, Row, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Portal = () => {
	return (
		<div class="hero">
			<div>
				<Container className="content">
					<Row>
						<Col>
							<h1>
								<b>Staff and Students</b>
							</h1>{" "}
							<br></br>
							<Button variant="primary" as={Link} to="/dashboard">
								My UEA
							</Button>{" "}
							<br></br>
							<Button variant="primary">Blackboard</Button> <br></br>
							<Button variant="primary">eVision</Button>{" "}
						</Col>
						<Col>
							<h1>
								<b>Academics</b>
							</h1>{" "}
							<br></br>
							<Button variant="primary">Register</Button> <br></br>
							<Button variant="primary">Login</Button> <br></br>{" "}
						</Col>
						<Col>
							<h1>
								<b>Guests</b>
							</h1>{" "}
							<br></br>
							<Button variant="primary">New Students</Button> <br></br>
							<Button variant="primary">Library and Archives</Button> <br></br>
							<Button variant="primary">Information for Visitors</Button>{" "}
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};
