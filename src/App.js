import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Portal } from "./Portal";
import { Dashboard } from "./Dashboard";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import "./App.css";

function App() {
	const [sidebarIsOpen, setSidebarOpen] = useState(true);
	const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
	return (
		<HashRouter basename="/">
			<div className="App h-100">
				<nav>
					<Navigation></Navigation>
				</nav>
				<Switch>
					<Route exact path="/">
						<Portal />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route component={Portal} />
				</Switch>
			</div>
			<Footer></Footer>
		</HashRouter>
	);
}

export default App;
