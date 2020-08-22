var request = require("request");

exports.handler = (event,context,callback) => {
  console.log(event)
    var options = {
      method: 'GET',
      uri: event.body.url,
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      return(body);
    });
  }