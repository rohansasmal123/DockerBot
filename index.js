const axios = require('axios');

exports.handler = async (event) => {
    // TODO implement
    var image = event.currentIntent.slots.slotOne;
    
        axios.post('http://fcbd699c.ngrok.io/'+image+'.php')
        .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
    console.log(error);
    });     
    
    const response = {
        dialogAction: {
            type: "Close",
            "fulfillmentState": "Fulfilled",
            "message": {
                "contentType": "PlainText",
                "content": image + " Successfully Launched"
    },
    }
    };
    return response;
};
