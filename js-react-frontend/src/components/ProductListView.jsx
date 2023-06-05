import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List } from 'react-virtualized';
import ProductListRow from './ProductListRow';

const ProductListSection = styled.section`
	font-family: Monospace, Arial, Helvetica, sans-serif;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	margin: 1rem;

	.product__list--title {
		color: #192e66;
		font-size: 1.5rem;
		text-align: center;
		flex: 0 1 100%;
	}

	.product__list {
		border: 1px solid #8cabff;
		flex: 0 1 80%;
	}
`;

const ProductList = ({ data }) => (
	<ProductListSection>
		<h2 className='product__list--title'>Product List</h2>
		<List
			className='product__list'
			role='grid'
			aria-readonly={null}
			width={650}
			height={300}
			rowHeight={150}
			rowCount={data?.length}
			rowRenderer={({ index, key, style }) => (
				<ProductListRow
					key={key}
					item={data[index]}
					style={style}
				/>
			)}
		/>
	</ProductListSection>
);

ProductList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			thumbnail: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
		})
	),
};

ProductList.defaultProps = {
	data: null,
};

ProductList.displayName = 'ProductList';

export default ProductList;
