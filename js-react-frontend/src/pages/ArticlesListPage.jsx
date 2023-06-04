import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { onCLS, onFID, onLCP } from 'web-vitals';

class ArticlesListPage extends Component {
	componentDidMount() {
		// eslint-disable-next-line no-console
		onCLS(console.log);
		// eslint-disable-next-line no-console
		onFID(console.log);
		// eslint-disable-next-line no-console
		onLCP(console.log);
	}

	render() {
		return <div>**Article Page List**</div>;
	}
}

export default ArticlesListPage;
