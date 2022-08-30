/**
*
*  The codes in 'run' is executed when no error occurred in Generic Logic.
*
*/
export async function run(ctx) {
  // a function that transforms byte array to string
  function UTF8ArrToStr(aBytes) {
    let utf8decoder = new TextDecoder();
    return utf8decoder.decode(new Uint8Array(aBytes));
  }

  // parse payload body
  const query_payload = JSON.parse(UTF8ArrToStr(ctx.payload.http.body));
  const region = query_payload.region
  const symbol = query_payload.symbol



  // const queryStock = await ctx.agents.http.get(
  //   `https://yfapi.net/v11/finance/quoteSummary/${symbols}`,  // URL
  //   { 'x-api-key': 'm43XOEe8YC1LqmcKoUi5s6IMTOyBeazv7KFhvLoK' },  // no headers needed to be set
  //   "Json",  // content type
  // )


  // HTTP Agent
  const apiURL = `https://yfapi.net/v6/finance/quote?region=${region}&lang=en&symbols=${symbol}`;
  const resp = await ctx.agents.http?.get(
    apiURL,
    {
      "X-API-KEY": "235xQrJDW65NHaZwGm3rw6247da9chqb6dRZQZDO"
    },
    "Json",
    null,
    null
  );

  const respBody = JSON.parse(UTF8ArrToStr(resp.body));
  await ctx.agents.sessionStorage.putJson("queryStock", respBody);
}


/**
*
*  The codes in 'handleError' is executed when there is any error occurred
*  in Generic Logic or CURRENT running Logic just gets an error.
*
*/
export async function handleError(ctx, error) {
  ctx.agents.logging.error(error.message);
}