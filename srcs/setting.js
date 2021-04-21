const Settings = {
  port: 8080,
  multiple_port: 8081,
  host: "localhost",
  root_auth_type: "Basic",
  root_auth_scheme: "aG9sZWU6MDIyMg==",
  getAuthHeader: function(root_auth_type, root_auth_scheme) {
    let authHeader = '';
    if (root_auth_scheme) {
      authHeader = "Authorization: " + root_auth_type + ' ' + root_auth_scheme + "\r\n";
    }
    return (authHeader);
  },
  head_path: "/head",
  options_path: "/options",
  trace_path:"/trace"
};
module.exports = Settings;
