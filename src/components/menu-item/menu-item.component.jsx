import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
	return (
		<MenuItemWrapper to={linkUrl}>
			<MenuItemTitle>
				<Title>{title}</Title>
			</MenuItemTitle>
			<MenuItemImg src={imageUrl} alt={title} />
		</MenuItemWrapper>
	);
};

export default MenuItem;

const MenuItemWrapper = styled(Link)`
	height: 500px;
	position: relative;
`;

const MenuItemTitle = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;

	&:hover {
		& h3 {
			background-color: rgba(255, 255, 255, 0.7);
		}
	}
`;

const Title = styled.h3`
	background-color: rgba(255, 255, 255, 0.5);
	color: #000;
	border: 1px solid black;
	padding: 3rem 4rem;
	transition: all 0.3s;
	text-transform: uppercase;
`;

const MenuItemImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 6s;
`;
