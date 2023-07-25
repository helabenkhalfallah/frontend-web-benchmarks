@react.component
let make = (~productList: array<ProductDecoder.product>) => {
  let listStyle = `
    font-family: Arial, sans-serif;
    width: 100%;
  `

  if Belt.Array.length(productList) == 0 {
    <div className={Emotion.css(listStyle)}>
      <span> {React.string("No Data")} </span>
    </div>
  } else {
    <div className={Emotion.css(listStyle)}>
      <ul>
        {Belt.Array.map(productList, item => <li key={item.title}> {React.string(item.title)} </li>)
        /* Since everything is typed, the arrays need to be, too! */
        ->React.array}
      </ul>
    </div>
  }
}
