import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './global-styles/globalStyles.js';
import Wrapper from './global-styles/wrapper.js';

import Header from './components/header/header.component.jsx';
import Homepage from './pages/homepage/homepage.page.jsx';
import ShopPage from './pages/shop/shop.page.jsx';

const App = () => {
	return (
		<Router>
			<Fragment>
				<GlobalStyle />
				<Wrapper>
					<Header />

					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/shop" component={ShopPage} />
					</Switch>
				</Wrapper>
			</Fragment>
		</Router>
	);
};

export default App;
