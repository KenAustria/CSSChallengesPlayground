import React from 'react';
import './TileLayout.css';

export const TileLayout = () => {
	return (
		<div className='tiles'>
			<div className='tile'>
				<img src="https://via.placeholder.com/200x150" alt="placeholder" />
			</div>
			<div className='tile'>
				<img src="https://via.placeholder.com/200x150" alt="placeholder" />
			</div>
			<div className='tile'>
				<img src="https://via.placeholder.com/200x150" alt="placeholder" />
			</div>
		</div>
	)
}

export default TileLayout;