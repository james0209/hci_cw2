import { Container } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Col, Row, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Dashboard = () => {
	return (
		<div class="hero">
			<div>
				<Container className="content">
					<h1>Dashboard</h1>
					<h2>Latest News</h2>
				</Container>
			</div>
		</div>
	);
};
