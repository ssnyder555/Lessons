// we dont have to save this whole variable, bc we
// are not doing anything with it
// this is the file will just run, and connect to the
require('./db')
//requiring our model
const Article = require('./article')
//makes a request to create something in mongodb
// Article.create({title: 'Old man in the sea', author: 'hems'}, (err, createdArticle) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(createdArticle);
//     }
// })


// read data from mongodb using our model

// Article.find({aurthor: 'Hems'}, (err, foundArticle) => {
//   //remeber arguments can be called anything
//   if(err){
//     console.log(err);
//   }else{
//     // returns any matches, as an array
//     console.log(foundArticles);
//   }
// })


// update information
// the third argument is an object, which is saying,
// send us back the updated document
// argument one = The document we are changing
// argument two = What we are updating too
// Article.update(
// 	{ author: 'Matt' },
// 	{ $set : { author: 'Matthew' } },
// 	{ multi: true },
// 	(err, response)=>{
// 		console.log(response); //just tells you the action was successful
// 	}
// );

Article.remove({aurthor: 'hemmingway'}, (err,response) => {
  if(err){
    console.log(err);
  }else {
    console.log(response);
  }
});
