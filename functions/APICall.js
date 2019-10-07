const axios = require("axios");

exports.handler = (event, context, callback) => {
  const API_URL = `https://api.airtable.com/v0/`;
  const BASE_ID = `appjQS3ko8p1xLggG/MockData`;
  const API_KEY = `?api_key=keyzo2zjIeheSCBhX`;

  const URL = `${API_URL}${BASE_ID}${API_KEY}`;

  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };

  const getMockData = () => {
    axios
      .get(URL)
      .then(res => send(res.data))
      .catch(err => send(err));
  };

  if (event.httpMethod == "GET") getMockData();
};
