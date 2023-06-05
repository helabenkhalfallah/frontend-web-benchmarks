import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetailsSection = styled.section`
	font-family: Monospace, Arial, Helvetica, sans-serif;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	margin: 1rem;

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
	}

	.product__details--price-infos {
		flex: 0 1 100%;
		text-align: center;
		margin-top: 2rem;
	}

	.product__details--price {
		color: #8b0000;
		font-size: 3rem;
	}

	.product__details--discount {
		color: #8b0000;
		font-size: 1rem;
	}

	.product__details--image-slider {
		width: 400px;
		height: 300px;
		margin-top: 2rem;
	}

	.product__details--image-slider-controls {
		flex: 0 1 100%;
		text-align: center;
		margin-top: 2rem;
		z-index: 99;
	}

	.product__details--image-slider-button {
		margin: 1rem;
	}
`;

const IMAGE_SLIDER_SETTINGS = {
	dots: false,
	arrows: false,
	lazyLoad: true,
	infinite: true,
	fade: true,
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
				className='product__details--image-slider'
				role='slider'
			>
				{details?.images?.map((url) => (
					<img
						key={url}
						alt='Product Quick View'
						src={url}
					/>
				))}
			</Slider>
			<div className='product__details--image-slider-controls'>
				<button
					className='product__details--image-slider-button'
					type='button'
					onClick={() => imgCarousel?.current?.slickPrev?.()}
				>
					{`<`}
				</button>
				<button
					className='product__details--image-slider-button'
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
