import { Container, Breadcrumb } from "react-bootstrap";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Portal = () => {
	return (
		<div class="hero">
			<div>
				<Container className="content">
					<h1>WELCOME TO MY UEA</h1>
					<h2>UEA's staff & student portal</h2>
					<Row>
						<Col sm>
							<h1>
								<b>Staff and Students</b>
							</h1>{" "}
							<br></br>
							<p>For direct access to My UEA</p>
							<Button variant="primary" as={Link} to="/dashboard">
								My UEA
							</Button>{" "}
							<br></br>
							<p>For direct access to UEA's Learning Portal</p>
							<Button
								variant="primary"
								href="https://learn.uea.ac.uk/"
								target="_blank"
								rel="noreferrer"
							>
								Blackboard
							</Button>{" "}
							<br></br>
							<Button
								variant="primary"
								href="https://evision.uea.ac.uk/"
								target="_blank"
								rel="noreferrer"
							>
								E:vision
							</Button>{" "}
						</Col>
						<Col sm>
							<h1>
								<b>Academics</b>
							</h1>{" "}
							<br></br>
							<p>Including CCN, UoS, NRP Institues and NNUH</p>
							<Button variant="primary">Register</Button> <br></br>
							<p>Already registered?</p>
							<Button variant="primary">Login</Button> <br></br>{" "}
						</Col>
						<Col sm>
							<h1>
								<b>Guests</b>
							</h1>{" "}
							<br></br>
							<p>
								If you don't have a UEA account, the following pages on our
								public website may be helpful.
							</p>
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
