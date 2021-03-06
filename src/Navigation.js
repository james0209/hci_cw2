import { React, useState, Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Toast, Modal } from "react-bootstrap";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
	MDBCol,
	MDBInput,
	MDBBtn,
	MDBFormInline,
	MDBContainer,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
} from "mdbreact";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
	const [showToast, setShowToast] = useState(false);
	const [collapseIDMenu, setShowMenu] = useState(false);
	const [collapseIDSearch, setShowSearch] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const toggleSearch = () => setShowSearch(!collapseIDSearch);
	const toggleMenu = () => setShowMenu(!collapseIDMenu);
	const toggleModal = () => setShowModal(!showModal);
	const toggleToast = () => setShowToast(!showToast);

	return (
		<nav class="hero">
			<MDBNavbar className="justify-content-end">
				<Container>
					<Navbar.Brand as={Link} to="/">
						<img
							alt="UEA Logo"
							src="./uea_logo.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						MY UEA
					</Navbar.Brand>
					<MDBBtn outline className="extra-buttons" onClick={toggleModal}>
						Post an Article
					</MDBBtn>
					<MDBBtn outline className="extra-buttons" onClick={toggleToast}>
						Post an Event
					</MDBBtn>
					<Button
						className="navbar-toggler ml-auto"
						type="button"
						// onClick={this.toggleCollapseSearch("navbarCollapse2")}
						onClick={toggleSearch}
						alt="Search"
						title="Search"
						role="search"
					>
						<FontAwesomeIcon icon={faSearch} role="search" alt="Search">
							Search
						</FontAwesomeIcon>
					</Button>
					<Button
						className="navbar-toggler"
						type="submit"
						// onClick={this.toggleCollapseMenu("navbarCollapse1")}
						onClick={toggleMenu}
						alt="Menu"
						title="Menu"
						role="navigation"
					>
						<FontAwesomeIcon icon={faBars} />
					</Button>

					<MDBCollapse id="navbarCollapse3" isOpen={collapseIDSearch} navbar>
						<MDBNavbarNav left>
							<MDBFormInline className="md-form mr-auto m-0">
								<input
									className="form-control mr-sm-2"
									type="text"
									placeholder="Search"
									aria-label="Search"
								/>
								<MDBBtn
									outline
									color="white"
									size="sm"
									type="submit"
									// onClick={this.toggleCollapseSearch("navbarCollapse2")}
									onClick={toggleMenu}
									className="mr-auto btn-search"
								>
									Search
								</MDBBtn>
							</MDBFormInline>
						</MDBNavbarNav>
					</MDBCollapse>

					<MDBCollapse id="navbarCollapse4" isOpen={collapseIDMenu} navbar>
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
						<MDBNavbarNav>
							<MDBNavItem active>
								<MDBNavLink
									as={Link}
									to="/"
									onClick={toggleMenu}
									// onClick={this.toggleCollapseMenu("navbarCollapse1")}
								>
									Home
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink
									as={Link}
									to="/dashboard"
									onClick={toggleMenu}
									// onClick={this.toggleCollapseMenu("navbarCollapse1")}
								>
									Dashboard
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink
									className="extra-buttons-nav"
									as={Link}
									to="/dashboard"
									onClick={toggleModal}
									// onClick={this.toggleCollapseMenu("navbarCollapse1")}
								>
									Post an Article
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink
									className="extra-buttons-nav"
									as={Link}
									to="/dashboard"
									onClick={toggleToast}
									// onClick={this.toggleCollapseMenu("navbarCollapse1")}
								>
									Post an Event
								</MDBNavLink>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</Container>
			</MDBNavbar>

			<Toast
				onClose={toggleToast}
				show={showToast}
				delay={2000}
				autohide
				style={{
					position: "absolute",
					top: 60,
					right: 0,
				}}
			>
				<Toast.Header>
					<strong className="mr-auto">Error</strong>

					<small>Just now</small>
				</Toast.Header>

				<Toast.Body>
					You need to be logged in to access this functionality.
				</Toast.Body>
			</Toast>

			<Modal show={showModal} onHide={toggleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Post an Article</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					This is the modal that would open where users can create an article if
					they have the correct permissions. Keeps the user on the same page for
					mapping.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={toggleModal}>
						Close
					</Button>
					<Button variant="primary" onClick={toggleModal}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</nav>
	);
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
