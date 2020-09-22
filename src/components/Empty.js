import React from "react";
import "../index.css";
import cat from "../assets/images/cat.svg";

class Empty extends React.PureComponent {
	render() {
		return (
			<>
				<p className="empty-list">
					<img
						className="empty-list-image"
						src={cat}
						alt=""
						height="250"
						width="250"
					/>
				</p>
			</>
		);
	}
}

export default Empty;
