const WEB3FORMS_ACCESS_KEY = "2b3c5b68-de4f-4b08-a982-78aaca256a37";

function submitToWeb3Forms(payload) {
  return fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(Object.assign({ access_key: WEB3FORMS_ACCESS_KEY }, payload)),
  })
    .then(function (response) {
      return response.json().then(function (data) {
        return { ok: response.ok && data.success, data: data };
      });
    })
    .catch(function () {
      return { ok: false, data: null };
    });
}
