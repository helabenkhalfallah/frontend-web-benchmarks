import { lazy } from 'react';

const ProductListPage = lazy(() => import('../pages/ProductListPage'));
const ProductDetailsPage = lazy(() => import('../pages/ProductDetailsPage'));

const LazyRoutes = {
	ProductListPage,
	ProductDetailsPage,
};

export default LazyRoutes;
