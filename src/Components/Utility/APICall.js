const APICall = (api, requestOption, defaultValue = null) => {
  return new Promise((resolve, reject) => {
    fetch(api, requestOption)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(defaultValue);
        }
      })
      .catch((error) => {
        console.error("APICallError", error);
        reject(error);
      });
  });
};
export default APICall;
