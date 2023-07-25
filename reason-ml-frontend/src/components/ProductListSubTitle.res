@react.component
let make = (~subTitle) => {
  let subTitleStyle = `
		color: #192e66;
		font-size: 1.25rem;
		text-align: center;
  `

  <h2 className={Emotion.css(subTitleStyle)}> {React.string(subTitle)} </h2>
}
