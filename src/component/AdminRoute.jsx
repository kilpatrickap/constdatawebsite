import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminMaterialsRoute from "./AdminMaterialsRoute";
import AdminPlantsRoute from "./AdminPlantsRoute";

class AdminRoute extends Component {
	render() {
		return (
			<div>
				<Router>
					<div style={{ textAlign: "center" }}>
						<Link to="/admin">
							<h3>Admin</h3>
						</Link>
					</div>
					<Switch>
						<div>
							<div style={{ textAlign: "center" }}>
								<Link to="/admin/materials" style={{ padding: 5 }}>
									<button type="button" class="btn btn-secondary">
										Materials
									</button>
								</Link>

								<Link to="/admin/plant" style={{ padding: 5 }}>
									<button type="button" class="btn btn-secondary">
										Plant
									</button>
								</Link>
								<Link to="/admin/labour" style={{ padding: 5 }}>
									<button type="button" class="btn btn-secondary">
										Labour
									</button>
								</Link>
							</div>

							<br />

							<Route path="/admin/materials" exact component={AdminMaterialsRoute} />
							<Route path="/admin/plant" exact component={AdminPlantsRoute} />
							{/* <Route path="/admin/labour" exact component={""} /> */}
						</div>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default AdminRoute;
