async function doFetch(url, method, body) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);

  const responseBody = await res.json();
  const error = res.ok ? null : responseBody;
  const data = res.ok ? responseBody : null;

  return { error, data };
}

export const get = (url) => doFetch(url, 'GET');
export const post = (url, body) => doFetch(url, 'POST', body);
export const put = (url, body) => doFetch(url, 'PUT', body);
export const patch = (url, body) => doFetch(url, 'PATCH', body);
export const del = (url) => doFetch(url, 'DELETE');

