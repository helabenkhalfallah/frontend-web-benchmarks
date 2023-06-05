/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceHolder from '../assets/SM-placeholder.png';

const ProductListRowWrapper = styled.article`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 5px;
	background-color: #fff;

	.product__image {
		width: 120px;
		height: 100px;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	product__infos {
		display: flex;
		flex-direction: row;
		align-items: left;
	}

	.product__title {
		height: 30px;
		padding: 0 5px;
		color: #20397f;
		font-size: 1rem;
	}

	.product__description {
		height: 30px;
		padding: 0 5px;
		color: #060b19;
		font-size: 1rem;
	}
`;

const ProductListRow = ({ item, style }) => {
	return (
		<ProductListRowWrapper
			role='row'
			style={style}
		>
			<LazyLoadImage
				className='product__image'
				role='cell'
				alt='Product Thumbnail'
				placeholderSrc={PlaceHolder}
				src={item?.thumbnail}
			/>
			<div
				className='product__infos'
				role='cell'
			>
				<h3 className='product__title'>{item?.title}</h3>
				<p className='product__description'>{item?.description}</p>
			</div>
		</ProductListRowWrapper>
	);
};

ProductListRow.propTypes = {
	item: PropTypes.shape({
		thumbnail: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
	}),
	style: PropTypes.shape({}),
};

ProductListRow.defaultProps = {
	item: null,
	style: {},
};

ProductListRow.displayName = 'ProductListRow';

export default ProductListRow;
