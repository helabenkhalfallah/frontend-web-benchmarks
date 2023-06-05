import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick-theme.css';

const ProductDetailsSection = styled.section`
	font-family: Monospace, Arial, Helvetica, sans-serif;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 90%;
	margin: 1rem;
	background-color: #fff;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	.product__details--title {
		color: #192e66;
		font-size: 1.5rem;
		text-align: center;
		flex: 0 1 100%;
	}

	.product__details--description {
		line-height: 20px;
		color: #060b19;
		font-size: 1rem;
		margin-left: 1rem;
		flex: 0 1 100%;
		text-align: center;
	}

	.product__details--price-infos {
		flex: 0 1 100%;
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.product__details--price {
		color: #8b0000;
		font-size: 3rem;
	}

	.product__details--discount {
		color: #8b0000;
		font-size: 1rem;
	}

	.product__details--slider {
		width: 300px;
		height: 300px;
	}

	.product__details--slider-image {
		width: 300px;
		height: 300px;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.product__details--slider-controls {
		flex: 0 1 100%;
		text-align: center;
		margin-top: 2rem;
		z-index: 99;
	}

	.product__details--slider-button {
		margin: 1rem;
	}
`;

const IMAGE_SLIDER_SETTINGS = {
	dots: false,
	arrows: false,
	lazyLoad: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const ProductDetailsView = ({ details }) => {
	const imgCarousel = useRef(null);

	return (
		<ProductDetailsSection role='article'>
			<h2 className='product__details--title'>{details?.title}</h2>
			<p className='product__details--description'>{details?.description}</p>
			<Slider
				ref={imgCarousel}
				{...IMAGE_SLIDER_SETTINGS}
				className='product__details--slider'
				role='slider'
			>
				{details?.images?.map((url) => (
					<img
						key={url}
						className='product__details--slider-image'
						alt='Product Quick View'
						src={url}
					/>
				))}
			</Slider>
			<div className='product__details--slider-controls'>
				<button
					className='product__details--slider-button'
					type='button'
					onClick={() => imgCarousel?.current?.slickPrev?.()}
				>
					{`<`}
				</button>
				<button
					className='product__details--slider-button'
					type='button'
					onClick={() => imgCarousel?.current?.slickNext?.()}
				>
					{`>`}
				</button>
			</div>
			<div className='product__details--price-infos'>
				<span className='product__details--price'>{details?.price}</span>
				<span className='product__details--discount'>
					<sup>{`/Discount: ${details?.discountPercentage}%`}</sup>
				</span>
			</div>
		</ProductDetailsSection>
	);
};

ProductDetailsView.propTypes = {
	details: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.string),
		price: PropTypes.number,
		discountPercentage: PropTypes.number,
	}),
};

ProductDetailsView.defaultProps = {
	details: null,
};

ProductDetailsView.displayName = 'ProductDetailsView';

export default ProductDetailsView;
