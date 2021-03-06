import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AdminMaterialsRouteTableRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.get("http://localhost:4000/materials/delete/" + this.props.obj._id)			//before: ("http://localhost:4000/materials/delete/")	
			.then(console.log("Deleted"))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<tr>
				<td>{this.props.obj.mat_code}</td>
				<td>{this.props.obj.mat_description}</td>
				<td>{this.props.obj.mat_quantity}</td>
				<td>{this.props.obj.mat_unit}</td>
				<td>{this.props.obj.mat_price}</td>
				<td>{this.props.obj.mat_supplier}</td>
				<td>{this.props.obj.mat_location}</td>
				<td>{this.props.obj.mat_address}</td>
				<td>{this.props.obj.mat_contact}</td>
				<td>{this.props.obj.mat_date}</td>
				<td>
					<Link
						to={"/edit/" + this.props.obj._id}
						className="btn btn-primary btn-sm"
					>
						Edit
					</Link>
				</td>
				<td>
					<button onClick={this.delete} className="btn btn-danger btn-sm">
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default AdminMaterialsRouteTableRow;
