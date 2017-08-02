function getDataFromTwitter(){
    var apiKey = ''
    var url = ''
    
    fetch(url, {
        headers: {
            'user-key': apiKey,
            'Accept' :'application/json'
        }
    })
    .then( function(data) { return data.json() })
    .then( function(json) {
        console.log(json)
    })
    .catch( function(error){
        console.log(error)
    })
}


function getDataFromYoutube(){
    var apiKey = ''
    var url = ''
    
    fetch(url, {
        headers: {
            'user-key': apiKey,
            'Accept' :'application/json'
        }
    })
    .then( function(data) { return data.json() })
    .then( function(json) {
        console.log(json)
    })
    .catch( function(error){
        console.log(error)
    })
}

function getDataFromSpotify(){
    var apiKey = 'AIzaSyCeCu7mt56s4cMqA-pAsqx2i27cNgPON9M	'
    var url = ''
    
    fetch(url, {
        headers: {
            'user-key': apiKey,
            'Accept' :'application/json'
        }
    })
    .then( function(data) { return data.json() })
    .then( function(json) {
        console.log(json)
    })
    .catch( function(error){
        console.log(error)
    })
}

function getDataFromNews(){
    var apiKey = ''
    var url = ''
    
    fetch(url, {
        headers: {
            'user-key': apiKey,
            'Accept' :'application/json'
        }
    })
    .then( function(data) { return data.json() })
    .then( function(json) {
        console.log(json)
    })
    .catch( function(error){
        console.log(error)
    })
}
