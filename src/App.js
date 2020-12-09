import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IndexRoute } from "react-dom";
import { Portal } from "./Portal";
import { Dashboard } from "./Dashboard";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
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
		</Router>
	);
}

export default App;
