const baseUrl = 'http://localhost:4000';

async function request(method, path, data) {
  const options = {
    method,
    headers: {},
  };
  const userData = localStorage.getItem('auth');

  if (userData) {
    options.headers['x-auth'] = JSON.parse(userData).accessToken;
  }

  if (data) {
    options.headers['content-type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(baseUrl + path, options);
    const data = await res.json();

    if (!res.ok) {
      throw ({ server: true, message: data.message });
    }

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const remove = request.bind(null, 'DELETE');
export const put = request.bind(null, 'PUT');
