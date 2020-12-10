import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div class="hero">
			<footer className="footer mt-auto py-3 bg-dark text-white">
				<div className="container">
					© UEA. All rights reserved. University of East Anglia, Norwich
					Research Park, Norwich, Norfolk, NR4 7TJ, UK | +44 (0) 1603 456161{" "}
					<div className="footer-links">
						<a href="#" target="_blank">
							Accessibility
						</a>
						|
						<a href="#" target="_blank">
							Legal Statements
						</a>
						|
						<a href="#" target="_blank">
							Statement on Modern Slavery
						</a>
						|
						<a href="#" target="_blank">
							Cookie Policy
						</a>
						|
						<a href="#" target="_blank">
							Data Protection
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};
