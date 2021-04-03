import React from 'react';
import styled from 'styled-components';

import directoryData from './directory.data.js';
import MenuItem from '../menu-item/menu-item.component.jsx';

const Directory = () => {
	return (
		<DirectoryWrapper>
			{directoryData.map((data) => {
				return (
					<MenuItem
						key={data.id}
						title={data.title}
						imageUrl={data.imageUrl}
						linkUrl={data.linkUrl}
					/>
				);
			})}
		</DirectoryWrapper>
	);
};

export default Directory;

const DirectoryWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	margin: 40px 0;
`;
