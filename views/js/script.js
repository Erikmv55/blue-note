function getDataFromTwitter(){
    var apiKey = 'AIzaSyAc8Y9i_9FpmgHiXz6hpA-tTtNkFGCMRhs'
    var url = 'https://api.twitter.com/1.1/search/tweets.json'
    
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


function getDataFromFacebook(){
    var apiKey = 'AIzaSyAc8Y9i_9FpmgHiXz6hpA-tTtNkFGCMRhs'
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