import {
	Card,
	CardDeck,
	Button,
	Breadcrumb,
	Row,
	Col,
	ListGroup,
	Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";

export const Dashboard = () => {
	return (
		<div class="dashboard">
			<Breadcrumb>
				<Breadcrumb.Item as={Link} to="/" href="/">
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item active as={Link} to="/dashboard" href="/dashboard">
					Dashboard
				</Breadcrumb.Item>
			</Breadcrumb>

			<h1 className="mt-4">Dashboard</h1>
			<div class="container">
				<div class="mb-5">
					<ListGroup>
						<ListGroup.Item
							variant="info"
							action
							href="https://my.uea.ac.uk/covid-lateral-testing"
							target="_blank"
							rel="noopener noreferrer"
						>
							COVID-19 Rapid Testing for Staff & Students
						</ListGroup.Item>
						<ListGroup.Item
							variant="info"
							action
							href="https://www.uea.ac.uk/covid19/notification-form"
							target="_blank"
							rel="noopener noreferrer"
						>
							COVID-19 self isolation form
						</ListGroup.Item>
						<ListGroup.Item
							variant="info"
							action
							href="https://my.uea.ac.uk/documents/20142/3241028/Safety+First+-+COVID+Checklist.pdf/7b78b3bf-5751-6e96-714c-eb4fe8b72ff0?t=1600183785253"
							target="_blank"
							rel="noopener noreferrer"
						>
							COVID-19 Symptom Checklist
						</ListGroup.Item>
						<ListGroup.Item variant="info">
							<a href="mailto:covidsecure@uea.ac.uk">
								Email: covidsecure@uea.ac.uk
							</a>
						</ListGroup.Item>
					</ListGroup>
				</div>
				<div class="row">
					<div class="col">
						<Card
							style={{ width: "18rem" }}
							border="dark"
							className="mx-auto mt-4 mb-4"
						>
							<Card.Body>
								<Card.Title>Learning Portal</Card.Title>
								<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
								<Card.Text>UEA's Learning Portal on Blackboard</Card.Text>
								<Card.Link href="#">Blackboard</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="col">
						<Card
							style={{ width: "18rem" }}
							border="dark"
							className="mx-auto mt-4 mb-4"
						>
							<Card.Body>
								<Card.Title>My Schedule & Email</Card.Title>
								<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
								<Card.Text>
									Access your UEA Outlook email and calendar
								</Card.Text>
								<Card.Link href="#">Outlook</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="w-100"></div>
					<div class="col">
						<Card
							style={{ width: "18rem" }}
							border="dark"
							className="mx-auto mt-4 mb-4"
						>
							<Card.Body>
								<Card.Title>My Library</Card.Title>
								<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
								<Card.Text>
									Use the library search tools, or access your account
								</Card.Text>
								<Card.Link href="#">Library</Card.Link>
							</Card.Body>
						</Card>
					</div>
					<div class="col">
						<Card
							style={{ width: "18rem" }}
							border="dark"
							className="mx-auto mt-4 mb-4"
						>
							<Card.Body>
								<Card.Title>My Wellbeing</Card.Title>
								<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
								<Card.Text>Wellbeing Services for students</Card.Text>
								<Card.Link href="#">Wellbeing</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</div>

				<div class="mb-5">
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
								<Card style={{ width: "18rem" }} bg={"info"} text={"white"}>
									<Card.Body>
										<Card.Title>COVID-19 Update</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											25 Jan 2021
										</Card.Subtitle>
										<Card.Text>
											Please read for latest updates on COVID-19 including case
											numbers, a reminder on safety measures and how the
											University is supporting self-isolating students.
										</Card.Text>
										<Card.Link href="#">Read More</Card.Link>
									</Card.Body>
								</Card>
								<Card style={{ width: "18rem" }} bg={"info"} text={"white"}>
									<Card.Body>
										<Card.Title>
											UEA study most talked about climate research of 2020
										</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											18 Jan 2021
										</Card.Subtitle>
										<Card.Text>
											A study by Prof Corinne Le Quéré, highlighting the effects
											of lockdown on carbon emissions, was the world’s most
											talked about climate study from 2020.
										</Card.Text>
										<Card.Link href="#">Read More</Card.Link>
									</Card.Body>
								</Card>
								<Card style={{ width: "18rem" }} bg={"info"} text={"white"}>
									<Card.Body>
										<Card.Title>Spotlight On Careers Central</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											19 Jan 2021
										</Card.Subtitle>
										<Card.Text>
											In this week's Spotlight On, Jen Lloyd who is Career
											Central's Marketing and Events Officer, explains how the
											service has continued to support students in spite...
										</Card.Text>
										<Card.Link href="#">Read More</Card.Link>
									</Card.Body>
								</Card>
							</CardDeck>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div class="container mt-3 mb-3">
				<div class="row">
					<div class="col">
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "uniofeastanglia",
							}}
							options={{ theme: "dark", width: "400", height: "400" }}
							className="mx-4"
						/>
					</div>
					<div class="col">
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "UEALibrary",
							}}
							options={{ theme: "dark", width: "400", height: "400" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
