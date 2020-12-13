import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
} from "mdbreact";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends Component {
	state = {
		collapseID: "",
	};

	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : "",
		}));
	};

	render() {
		return (
			<nav class="hero">
				<MDBNavbar className="justify-content-end">
					<Container>
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
						<Button
							className="navbar-toggler ml-auto"
							type="button"
							onClick={this.toggleCollapse("navbarCollapse1")}
						>
							<FontAwesomeIcon icon={faSearch} />
						</Button>

						<Button
							className="navbar-toggler"
							type="button"
							onClick={this.toggleCollapse("navbarCollapse1")}
						>
							<FontAwesomeIcon icon={faBars} />
						</Button>
						<MDBCollapse
							id="navbarCollapse1"
							isOpen={this.state.collapseID}
							navbar
						>
							{/* 							<MDBNavItem>
								<Form inline>
									<FormControl
										type="text"
										placeholder="Search"
										className="mr-sm-2"
									/>
									<Button
										variant="outline-success"
										type="submit"
										value="Submit"
									>
										Search
									</Button>
								</Form>
							</MDBNavItem> */}
							<MDBNavbarNav left>
								<MDBNavItem active>
									<MDBNavLink
										as={Link}
										to="/"
										onClick={this.toggleCollapse("navbarCollapse1")}
									>
										Home
									</MDBNavLink>
								</MDBNavItem>
								<MDBNavItem>
									<MDBNavLink
										as={Link}
										to="/dashboard"
										onClick={this.toggleCollapse("navbarCollapse1")}
									>
										Dashboard
									</MDBNavLink>
								</MDBNavItem>
							</MDBNavbarNav>
						</MDBCollapse>
					</Container>
				</MDBNavbar>
			</nav>
		);
	}
}

export default Navigation;

/* export const Navigation = () => {
	return (
		<nav class="hero">
			<Navbar variant="dark">
				<Container>
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
}; */
