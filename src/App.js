import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Portal } from "./Portal";
import { Dashboard } from "./Dashboard";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import NotFound from "./NotFound";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
	return (
		<HashRouter>
			<div className="App d-flex flex-column h-100">
				<nav>
					<Navigation></Navigation>
					<Sidebar></Sidebar>
				</nav>
				<Switch>
					<Route exact path="/">
						<Portal />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route component={NotFound} />
				</Switch>
			</div>
			<Footer></Footer>
		</HashRouter>
	);
}

export default App;
