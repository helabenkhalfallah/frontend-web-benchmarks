import React, { useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { onCLS, onFID, onLCP } from 'web-vitals';
import ProductLoader from '../components/ProductLoader';

const ProductListHeader = lazy(() => import('../components/ProductListHeader'));
const ProductListFooter = lazy(() => import('../components/ProductListFooter'));
const ProductListBody = lazy(() => import('../components/ProductListBody'));

const ProductDetailsView = lazy(() =>
	import('../components/ProductDetailsView')
);

const ProductDetailsPage = () => {
	const [searchParams] = useSearchParams();

	const { isLoading, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: () =>
			axios
				.get(`https://dummyjson.com/products/${searchParams?.get?.('id')}`)
				.then((response) => response?.data),
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
					<ProductDetailsView details={data} />
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

export default ProductDetailsPage;
