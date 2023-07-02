[@react.component]
let make = () => {
  let url = ReasonReact.Router.useUrl();

  switch (url.path) {
  | ["product_list"] =>
    <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
      <ProductListPageLazy />
    </React.Suspense>
  | ["product_details"] =>
    <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
      <ProductDetailsPageLazy />
    </React.Suspense>
  | _ => <NotFound />
  };
};
