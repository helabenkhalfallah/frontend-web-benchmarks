import React, { useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from '@tanstack/react-query';
import { onCLS, onFID, onLCP } from 'web-vitals';
import styled from 'styled-components';
import ProductLoader from '../components/ProductLoader';
import 'react-virtualized/styles.css';

const ProductList = lazy(() => import('../components/ProductList'));

const ProductListHeader = styled.header`
	font-family: Monospace, Arial, Helvetica, sans-serif;
	display: block;
	text-align: center;
	background-color: #fff;
	margin-top: 2rem;

	.page__title {
		color: #0c1733;
		text-align: center;
		font-size: 2rem;
	}
`;

const ProductListBody = styled.main`
	font-family: Monospace, Arial, Helvetica, sans-serif;
	width: 100%;
`;

const ProductListFooter = styled.footer`
	font-family: Monospace, Arial, Helvetica, sans-serif;
	display: block;
	text-align: center;
	background-color: #fff;
	margin-top: 2rem;

	.page__copyright {
		color: #192e66;
		font-size: 1.5rem;
		padding: 1rem;
	}
`;

const ProductListPage = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: () =>
			axios
				.get('https://dummyjson.com/products')
				.then((response) => response?.data?.products),
	});

	useEffect(() => {
		// eslint-disable-next-line no-console
		onCLS(console.log);
		// eslint-disable-next-line no-console
		onFID(console.log);
		// eslint-disable-next-line no-console
		onLCP(console.log);
	}, []);

	if (isLoading) return <ProductLoader />;

	if (error) return 'An error has occurred: ';

	return (
		<>
			<ProductListHeader>
				<h1 className='page__title'>Frontend project using JS(ES6) & React</h1>
			</ProductListHeader>
			<ProductListBody>
				<Suspense fallback={<ProductLoader />}>
					<ProductList data={data} />
				</Suspense>
			</ProductListBody>
			<ProductListFooter>
				<span className='page__copyright'>
					© POC Application For Benchmarking Frontend Framework
				</span>
			</ProductListFooter>
		</>
	);
};

ProductListPage.propTypes = {};

ProductListPage.defaultProps = {};

ProductListPage.displayName = 'ProductListPage';

export default ProductListPage;
