[@react.component]
let make = () => {
  let url = ReasonReact.Router.useUrl();

  switch (url.path) {
  | [] => <ProductListPage />
  | ["product_list"] => <React.Suspense fallback={<div> "Loading..."->React.string </div>}>
           <ProductListPage />
        </React.Suspense>
  | ["product_details"] => <ProductDetailsPage  />
  | _ => <NotFound />
  };
};