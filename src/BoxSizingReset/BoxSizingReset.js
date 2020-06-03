import React from "react";
import "./BoxSizingReset.css";
import classNames from 'classnames'

const BoxSizingReset = () => {
	const contentBox = classNames('box', 'content-box');
	return (
		<div>
			<div className='box'>border-box</div>
			<div className={contentBox}>content-box</div>
		</div>
	)
}

export default BoxSizingReset;