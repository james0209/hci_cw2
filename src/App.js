import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Portal } from "./Portal";
import { Dashboard } from "./Dashboard";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import NotFound from "./NotFound";
import "./App.css";
import { ToastProvider, useToasts } from "react-toast-notifications";

function App() {
	return (
		<HashRouter>
			<ToastProvider>
				<div className="App d-flex flex-column h-100">
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
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer></Footer>
			</ToastProvider>
		</HashRouter>
	);
}

export default App;
