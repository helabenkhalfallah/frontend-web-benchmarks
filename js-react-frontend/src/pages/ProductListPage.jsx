import React, { useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { onCLS, onFID, onLCP } from 'web-vitals';
import ProductLoader from '../components/ProductLoader';
import 'react-virtualized/styles.css';

const ProductListHeader = lazy(() => import('../components/ProductListHeader'));
const ProductListFooter = lazy(() => import('../components/ProductListFooter'));
const ProductListBody = lazy(() => import('../components/ProductListBody'));
const ProductListView = lazy(() => import('../components/ProductListView'));

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
					<ProductListView data={data} />
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
