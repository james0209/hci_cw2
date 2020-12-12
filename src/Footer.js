import React from "react";

export const Footer = () => {
	return (
		<div>
			<footer className="footer py-3 bg-dark text-white">
				<div className="container">
					© UEA. All rights reserved. University of East Anglia, Norwich
					Research Park, Norwich, Norfolk, NR4 7TJ, UK | +44 (0) 1603 456161{" "}
					<div className="footer-links">
						<a
							href="https://www.uea.ac.uk/about/university-information/statutory-and-legal/website"
							target="_blank"
							rel="noreferrer"
						>
							Accessibility
						</a>
						|
						<a
							href="https://www.uea.ac.uk/about/university-information/statutory-legal-policies"
							target="_blank"
							rel="noreferrer"
						>
							Legal Statements
						</a>
						|
						<a
							href="https://www.uea.ac.uk/about/university-information/statutory-legal-policies/modern-slavery-statement"
							target="_blank"
							rel="noreferrer"
						>
							Statement on Modern Slavery
						</a>
						|
						<a
							href="https://www.uea.ac.uk/about/university-information/statutory-and-legal/website"
							target="_blank"
							rel="noreferrer"
						>
							Cookie Policy
						</a>
						|
						<a
							href="https://www.uea.ac.uk/about/university-information/statutory-and-legal/data-protection"
							target="_blank"
							rel="noreferrer"
						>
							Data Protection
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};
