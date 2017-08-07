var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")
var Twit = require('twit')

var T = new Twit({
    consumer_key: 'NsYgNoKxa9WquRZ3q5bbWvhze',
    consumer_secret: 'ng2dT8iXPDfFObM1zWwno3a2ANpC9w8OBKC28N9Ysza5pHBJB8',
    access_token: '771129745237020672-EqgjyoVcw07cqJAGHa0KRdsmC22bfFV',
    access_token_secret: 'QkefbU2bKrybfph6D8Z9N6nJUQ6Ig7wfVeKdMnD7Iuq1h',
    timeout_ms: 60*1000
})

var app = express()

app.set('view engine', 'ejs')

app.use (express.static('views'))
app.set ('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.post('/search-twitter-user', function(request, response){
    
    var userToSearch = request.body.twitterUser
    console.log(userToSearch)
    
    T.get('search/tweets', { q: userToSearch }, function(err, data, res){
        if ( err ) console.log(err)
        
        console.log('data:', data)
        
        response.render('twitterUser.ejs', {
            data: data, 
            res: res, 
            err: err
        })  
    })
})

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log (`App running on ${port} hamsters`)
})

//use npm init
//use npm install --save express ejs morgan body-parser
//may need to use npm install firebase-admin