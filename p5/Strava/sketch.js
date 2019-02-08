var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

var accessTokenDave = "7199a0f11d1a60bcef9005bf7291ebcde9227ee4";

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "7199a0f11d1a60bcef9005bf7291ebcde9227ee4";

var api = new StravaApiV3.ActivitiesApi()

var id = 2122222352; // {Long} The identifier of the activity.

var opts = { 
  'includeAllEfforts': true // {Boolean} To include all segments efforts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getActivityById(id, opts, callback);

function setup() {
background(red);
  createCanvas(width, height);
}

function draw() {
  // put drawing code here
}

