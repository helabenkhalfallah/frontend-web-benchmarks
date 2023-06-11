[@react.component]
let make = () => {
  let url = ReasonReact.Router.useUrl();

  switch (url.path) {
  | ["product_list"] => <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
           <ProductListPageLazy />
        </React.Suspense>
  | ["product_details"] => <ProductDetailsPage  />
  | _ => <NotFound />
  };
};