@react.component
let make = (~productList: array<ProductDecoder.product>) => {
  let listStyle = `
    font-family: Arial, sans-serif;
    width: 100%;

    .product__card {
      height: 140px;
      margin: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    }

    .product__image {
      width: 80px;
      height: 80px;
      aspect-ratio: 16 / 9;
      object-fit: scale-down;
      margin-top: 5px;
    }

    product__infos {
      display: flex;
      flex-direction: row;
      align-items: left;
    }

    .product__title {
      line-height: 15px;
      color: #20397f;
      font-size: 1rem;
      margin-left: 1rem;
    }

    .product__description {
      line-height: 20px;
      color: #060b19;
      font-size: 0.8rem;
      margin-left: 1rem;
    }

    .product__link {
      font-size: 0.8rem;
      margin-left: 2rem;
    }
  `

  if Belt.Array.length(productList) == 0 {
    <div className={Emotion.css(listStyle)}>
      <span> {React.string("No Data")} </span>
    </div>
  } else {
    <div className={Emotion.css(listStyle)}>
      <ul>
        {Belt.Array.map(productList, item =>
          <div className="product__card" key={item.title}>
            <img
              className="product__image" role="cell" alt="Product Thumbnail" src={item.thumbnail}
            />
            <div className="product__infos" role="cell">
              <h3 className="product__title"> {React.string(item.title)} </h3>
              <p className="product__description"> {React.string(item.description)} </p>
            </div>
          </div>
        )
        /* Since everything is typed, the arrays need to be, too! */
        ->React.array}
      </ul>
    </div>
  }
}
