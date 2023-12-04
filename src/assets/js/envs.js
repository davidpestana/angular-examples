(function(window) {
  window["env"] = window["env"] || {};
  window["env"]["URL"] = "http://loquesea";
})(this);

console.log('App runnig with env vars', window.env);
