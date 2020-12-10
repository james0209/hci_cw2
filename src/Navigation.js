import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";

export const Navigation = () => {
	return (
		<nav class="hero" role="navigation">
			<Navbar collapseOnSelect expand="lg" variant="dark">
				<Container>
					{/* 					<Navbar.Brand
						className="navbar-brand  navbar-custom"
						as={Link}
						to="/"
					>
						<a
							className=" navbar-brand navbar-custom"
							href="/"
							as={Link}
							to="/"
							title="Go to University of East Anglia"
						>
							My UEA
						</a>
					</Navbar.Brand> */}

					<Navbar.Brand as={Link} to="/">
						<img
							alt=""
							src="./uea_logo.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						MY UEA
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end"
					>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success" type="submit" value="Submit">
								Search
							</Button>
						</Form>
						<Nav>
							<Nav.Link as={Link} to="/about">
								Menu
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</nav>
	);
};
