import React from 'react';
import styled from 'styled-components';

import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';
import SHOP_DATA from './shop.data.js';

const ShopPage = () => {
	return (
		<ShopWrapper>
			<ShopTitle>Collections</ShopTitle>
			{SHOP_DATA.map((data) => (
				<PreviewCollection
					key={data.id}
					title={data.title}
					items={data.items}
				/>
			))}
		</ShopWrapper>
	);
};

export default ShopPage;

const ShopWrapper = styled.div``;
const ShopTitle = styled.h2`
	font-size: 30px;
	margin: 20px 0;
`;
