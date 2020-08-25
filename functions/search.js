var request = require("request");
const axios = require('axios');


exports.handler = async (event,context,callback) => {

  const body = JSON.parse(event.body)
  console.log(body.url)

    axios({
      "method":"GET",
      "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"realtor.p.rapidapi.com",
      "x-rapidapi-key":"558cb1cf59msh3a3c8e6217dc657p19a4aejsn03e0b4658960",
      "useQueryString":true
      },"params":{
        "sort":"relevance",
        "city":"New York City",
        "limit":"200",
        "offset":"0",
        "state_code":"NY"
        }
      })
    .then(res => {
      console.log(res)
      console.log(body.url)
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify(body)
      })
    })
    .catch(err => console.log(err))
}