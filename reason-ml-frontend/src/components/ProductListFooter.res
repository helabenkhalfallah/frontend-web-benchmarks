@react.component
let make = () => {
  let footerStyle = `
	font-family: Arial, sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	margin-top: 2rem;

	.page__copyright {
		color: #192e66;
		font-size: 1rem;
		padding: 1rem;
	}
  `
  let applicationName = "© POC Application"
  let applicationInfo = "Benchmarking Frontend Framework"

  <footer className={Emotion.css(footerStyle)}>
    <span className="page__copyright"> {applicationName->React.string} </span>
    <span className="page__copyright"> {applicationInfo->React.string} </span>
  </footer>
}
