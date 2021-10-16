/*! For license information please see frontend_scripts_formContact_js.bundle.js.LICENSE.txt */
(self.webpackChunkiddeasite=self.webpackChunkiddeasite||[]).push([["frontend_scripts_formContact_js"],{"./frontend/scripts/formContact.js":()=>{eval('var form = document.querySelector(".form");\nvar error = document.getElementById("error-message");\nvar success = document.getElementById("error-success");\nvar chase = document.querySelector(".sk-chase");\nvar name = document.getElementById("user-name");\nvar email = document.getElementById("user-email");\nvar message = document.getElementById("user-mesage");\nvar button = document.getElementById("button-submit");\nform.addEventListener("submit", function (e) {\n  button.disabled = true;\n  chase.classList.add("block");\n  e.preventDefault();\n  var response = grecaptcha.getResponse();\n\n  if (response.length == 0) {\n    chase.classList.remove("block");\n    error.classList.add("block");\n    setTimeout(function () {\n      error.classList.remove("block");\n    }, 2500);\n    button.disabled = false;\n    return;\n  }\n\n  var formData = {\n    name: name.value,\n    email: email.value,\n    message: message.value\n  };\n  fetch("https://iddea.herokuapp.com", {\n    method: "POST",\n    body: JSON.stringify(formData),\n    headers: {\n      "Content-Type": "application/json"\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (resp) {\n    if (resp.status === 200) {\n      chase.classList.remove("block");\n      success.classList.add("block");\n      reset();\n      grecaptcha.reset();\n      setTimeout(function () {\n        success.classList.remove("block");\n      }, 4000);\n      button.disabled = false;\n    }\n  })["catch"](function (error) {\n    chase.classList.remove("block");\n    console.log("Error:", error);\n    button.disabled = false;\n  });\n});\n\nvar reset = function reset() {\n  name.value = "";\n  email.value = "";\n  message.value = "";\n};\n\n//# sourceURL=webpack://iddeasite/./frontend/scripts/formContact.js?')}}]);