var main=function(n){"use strict";return n.handleError=async function(n,e){n.agents.logging.error(e.message)},n.run=async function(n){const e=await(n.agents.http?.get("https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL",{"X-API-KEY":"m43XOEe8YC1LqmcKoUi5s6IMTOyBeazv7KFhvLoK"},"Json",null,null)),r=JSON.parse((a=e.body,(new TextDecoder).decode(new Uint8Array(a))));var a;n.agents.logging.info({respBody:r}),await n.agents.sessionStorage.putJson("queryStock",r)},Object.defineProperty(n,"__esModule",{value:!0}),n}({});globalThis.run=main.run,globalThis.handleError=main.handleError;