type requestUrlParams = {
  skip: int,
  limit: int,
};

[@react.component]
let make = () => {
  let (error, setError) = React.useState(() => "");
  let (data, setData) = React.useState(() => {
    [||];
  });
  let (loading, setLoading) = React.useState(() => true);

  
  let defaultParams = {
    skip: 0,
    limit: 10,
  };
  
  let (urlParams, setUrlParams) = React.useState(() => defaultParams);

        React.useEffect1(() => {
          let defaultUrl = "https://dummyjson.com/products?skip="++ Belt.Int.toString(urlParams.skip) ++ "&limit=" ++ Belt.Int.toString(urlParams.limit);

          Js.Promise.(
              Request.get(defaultUrl)
                |> then_(response =>
                    {
                      Js.log(response);
                      setLoading(_previousState => false);
                      setData(_ => response);
                      setError(_ => "");
                    }
                    |> resolve
                  )
                |> catch(error => 
                    {
                      Js.log(error);
                      setLoading(_previousState => false); 
                      setError(_ => "An error was occured, please retry another time! :)")
                    }
                    |> resolve
                  )
                |> ignore
          ); 

        /* clean up */
        None;
    }, [||]);

   if(loading == true) {
    <section>
      <ProductListHeader title="Reason Frontend Project" subTitle="Product List" />
        <span>
          {React.string("Loading Data")}
        </span>
      <ProductListFooter />
    </section>
   } else if(error != "") {
    <section>
      <ProductListHeader title="Reason Frontend Project" subTitle="Product List" />
        <span>
          {React.string(error)}
        </span>
      <ProductListFooter />
    </section>
   } else {
    <section>
      <ProductListHeader title="Reason Frontend Project" subTitle="Product List" />
      <ProductListBody productList={data} />
      <ProductListFooter />
    </section>
   }
}
