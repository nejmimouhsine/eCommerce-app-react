import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderWrapper>
			<Logo>Ecommerce App</Logo>
			<HeaderMenu>
				<HeaderList>
					<HeaderLink to="/">Home</HeaderLink>
				</HeaderList>
				<HeaderList>
					<HeaderLink to="/shop">Shop</HeaderLink>
				</HeaderList>
				<HeaderList>
					<HeaderLink to="/contact">Contact</HeaderLink>
				</HeaderList>
				<HeaderList>
					<HeaderLink to="/singin">SignIn</HeaderLink>
				</HeaderList>
			</HeaderMenu>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.h2``;
const HeaderMenu = styled.ul`
	list-style: none;
	display: flex;
`;
const HeaderList = styled.li`
	:hover {
		& a {
			text-decoration: underline;
		}
	}
`;
const HeaderLink = styled(Link)`
	padding: 0 5px;
	transition: all 0.3s;
`;
