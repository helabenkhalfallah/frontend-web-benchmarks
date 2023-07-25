@react.component
let make = (~title, ~subTitle) => {
  let headerStyle = `
    font-family: Arial, sans-serif;
    display: block;
    text-align: center;
    background-color: #fff;
    margin-top: 2rem;
  `

  <header className={Emotion.css(headerStyle)}>
    <ProductListTitle title={title} />
    <ProductListSubTitle subTitle={subTitle} />
  </header>
}
