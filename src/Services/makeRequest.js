//all the requests that are allowed to have body 
const BODY_METHODS = ['POST', 'PUT', 'PATCH'];

//responsible of making request and give us back a json body 
export const makeRequest = (url, method, body) => {
  return fetch(url, {
    method,
    //if method is included inside of our allowed bodies, then we will put a body there, otherwise nothing (undefined or null)
    body: BODY_METHODS.includes(method) ? body : null,
    //we want a content type header only if method is put, patch or post
    headers: {
      'Content-type': BODY_METHODS.includes(method) ? 'application/json' : null
    }
  })
    .then(res => res.json());
};