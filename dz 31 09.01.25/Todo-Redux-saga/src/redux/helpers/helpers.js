export function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Httpp error");
    }
    return response.json();
  });
}
