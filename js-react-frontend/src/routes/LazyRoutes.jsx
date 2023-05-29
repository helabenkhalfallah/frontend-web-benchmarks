import { lazy } from 'react';

const ArticlesListPage = lazy(() => import('../pages/ArticlesListPage'));

const LazyRoutes = {
	ArticlesListPage,
};

export default LazyRoutes;
