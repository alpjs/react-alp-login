import React from "react";
export default (() => React.createElement(
  "form",
  { model: "User", action: "/site/login" },
  React.createElement(
    "fieldset",
    { legend: "Login" },
    React.createElement("input", { name: "email", label: "Email", placeholder: "Enter your email" }),
    React.createElement("input", { name: "pwd" }),
    React.createElement("submit", {
      "container-class": "center"
    })
  )
));
//# sourceMappingURL=LoginForm.js.map