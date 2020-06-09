import React from "react";
import "./DisableSelection.css";

const DisableSelection = () => {
	return (
		<div>
			<p>Select Me</p>
			<p className="unselectable">Can't Select Me</p>
		</div>
	)
}

export default DisableSelection;