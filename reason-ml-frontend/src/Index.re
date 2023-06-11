switch(ReactDOM.querySelector("#reasonml-frontend-root")) {
    | Some(root) => ReactDOM.render(<Router />, root)
    | None => ()
}