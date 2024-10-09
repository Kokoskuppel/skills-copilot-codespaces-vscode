// Create web server using express
// Create a route to handle the GET request to the /comments URL
// Create a route to handle the POST request to the /comments URL
// Create a route to handle the PUT request to the /comments URL
// Create a route to handle the DELETE request to the /comments URL

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var comments = [
  {
    name: 'John',
    message: 'Hello everyone!'
  },
  {
    name: 'Jane',
    message: 'Hi John!'
  }
];

app.get('/comments', function(req, res){
  res.json(comments);
});

app.post('/comments', function(req, res){
  var newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.put('/comments', function(req, res){
  var updatedComment = req.body;
  comments = comments.map(function(comment){
    if(comment.name === updatedComment.name){
      return updatedComment;
    }
    return comment;
  });
  res.json(updatedComment);
});

app.delete('/comments', function(req, res){
  var deletedComment = req.body;
  comments = comments.filter(function(comment){
    return comment.name !== deletedComment.name;
  });
  res.json(deletedComment);
});

app.listen(3000);