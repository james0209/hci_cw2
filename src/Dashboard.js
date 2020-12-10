import { Container, Card, CardDeck } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Col, Row, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Dashboard = () => {
	return (
		<div class="dashboard">
			<div class="container">
				<div class="row">
					<div class="col">
						<Card style={{ width: "18rem" }} className="mx-auto mt-4 mb-4">
							<Card.Body>
								<Card.Title>UEA Blackboard</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="col">
						<Card style={{ width: "18rem" }} className="mx-auto mt-4 mb-4">
							<Card.Body>
								<Card.Title>UEA Outlook</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="w-100"></div>
					<div class="col">
						<Card style={{ width: "18rem" }} className="mx-auto mt-4 mb-4">
							<Card.Body>
								<Card.Title>E:vision</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="col">
						<Card style={{ width: "18rem" }} className="mx-auto mt-4 mb-4">
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</div>
				<Card>
					<Card.Header as="h5">
						Latest UEA News{" "}
						<Button
							variant="primary"
							size="sm"
							className="text-right float-right"
						>
							View All
						</Button>{" "}
					</Card.Header>
					<Card.Body>
						<CardDeck>
							<Card style={{ width: "18rem" }} className="mx-auto ml-2 mr-2">
								<Card.Body>
									<Card.Title>COVID-19 Update</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										Card Subtitle
									</Card.Subtitle>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Card.Link href="#">Card Link</Card.Link>
								</Card.Body>
							</Card>
							<Card style={{ width: "18rem" }} className="mx-auto">
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										Card Subtitle
									</Card.Subtitle>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Card.Link href="#">Card Link</Card.Link>
								</Card.Body>
							</Card>
							<Card style={{ width: "18rem" }} className="mx-auto">
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										Card Subtitle
									</Card.Subtitle>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Card.Link href="#">Card Link</Card.Link>
								</Card.Body>
							</Card>
						</CardDeck>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
