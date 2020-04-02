var SurveyMonkeyAPI = require("surveymonkey").SurveyMonkeyAPI;

var accessToken =
  "vSWTnx5rhxBXb9zNfTzkKm6Lyz6u2HzFKhFoOFnO.6.WdSQj-EbHp579f0KqlW5qvsiNf7iL2KjqLisquFZv8Aarft-MFg.d0x3kNn9FBDHNuYmAspfBVi5lNo.UK3hs";

try {
  var api = new SurveyMonkeyAPI(accessToken, { version: "v3", secure: false });
} catch (error) {
  console.log(error.message);
}

api.getSurveyList({}, function(error, data) {
  if (error) console.log(error.message);
  else console.log(JSON.stringify(data)); // Do something with your data!
});

// or with a survey id
api.getSurveyDetails({ id: "280620127" }, function(error, data) {
  if (error) console.log(error);
  else console.log(JSON.stringify(data)); // Do something with your data!
});
