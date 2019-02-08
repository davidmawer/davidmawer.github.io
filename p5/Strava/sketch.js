var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

var accessTokenDave = "7199a0f11d1a60bcef9005bf7291ebcde9227ee4";

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = accessTokenDave;

var api = new StravaApiV3.ActivitiesApi()

var name = name_example; // {String} The name of the activity.

var type = type_example; // {String} Type of activity. For example - Run, Ride etc.

var startDateLocal = startDateLocal_example; // {String} ISO 8601 formatted date time.

var elapsedTime = 56; // {Integer} In seconds.

var opts = { 
  'description': description_example, // {String} Description of the activity.
  'distance': 3.4, // {Float} In meters.
  'trainer': 56, // {Integer} Set to 1 to mark as a trainer activity.
  'photoIds': photoIds_example, // {String} List of native photo ids to attach to the activity.
  'commute': 56 // {Integer} Set to 1 to mark as commute.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createActivity(name, type, startDateLocal, elapsedTime, opts, callback);

function setup() {
background(red);
  createCanvas(width, height);
}

function draw() {
  // put drawing code here
}

