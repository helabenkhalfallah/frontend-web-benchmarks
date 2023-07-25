@react.component
let make = (~title) => {
  let titleStyle = `

		text-align: center;
  `

  <h1 className={Emotion.css(titleStyle)}> {React.string(title)} </h1>
}
