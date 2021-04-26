const Settings = {
  port: 8080,
  multiple_port: 8081,
  host: "localhost",
  root_auth_type: "Basic",
  root_auth_scheme: "dG9ueWJ5ZW9uOjAyMjI=",
  getAuthHeader: function(root_auth_type, root_auth_scheme) {
    let authHeader = '';
    if (root_auth_scheme) {
      authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
    }
    return (authHeader);
  },
  head_path: "/head",
  options_path: "/options",
  trace_path:"/trace",
  redirect_301_port: 8081,
  redirect_302_port: 8082,
  location: "http://localhost:8080"
};
module.exports = Settings;
