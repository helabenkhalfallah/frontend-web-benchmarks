import React, { useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { onCLS, onFID, onLCP } from 'web-vitals';
import ProductLoader from '../components/ProductLoader';

const ProductListHeader = lazy(() => import('../components/ProductListHeader'));
const ProductListFooter = lazy(() => import('../components/ProductListFooter'));
const ProductListBody = lazy(() => import('../components/ProductListBody'));
const ProductListTitle = lazy(() => import('../components/ProductListTitle'));

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

	const showError = error || !data || false;

	return (
		<Suspense fallback={<ProductLoader />}>
			<ProductListHeader>
				<ProductListTitle>React Frontend Project</ProductListTitle>
			</ProductListHeader>
			<ProductListBody>
				{isLoading ? (
					<ProductLoader />
				) : (
					<>
						{showError ? (
							<div>An error was occured</div>
						) : (
							<ProductDetailsView details={data} />
						)}
					</>
				)}
			</ProductListBody>
			<ProductListFooter>
				<span className='page__copyright'>
					© POC Application For Benchmarking Frontend Framework
				</span>
			</ProductListFooter>
		</Suspense>
	);
};

export default ProductDetailsPage;
