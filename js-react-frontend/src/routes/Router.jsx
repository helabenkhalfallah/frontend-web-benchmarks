import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LazyRoute from './LazyRoutes';
import Path from './Path';

const { ARTICLES_LIST_PATH } = Path;

const { ArticlesListPage } = LazyRoute;

const Router = () => (
	<Suspense fallback={<div>Loading</div>}>
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path={ARTICLES_LIST_PATH}
					element={<ArticlesListPage />}
				/>
				<Route
					path='/'
					element={
						<Navigate
							replace
							to={ARTICLES_LIST_PATH}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	</Suspense>
);

export default Router;
