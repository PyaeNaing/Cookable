const Recipe = require('../moudules/Recipe')

exports.createRecipe = function (req, res) {
    Recipe.create({
        recipeName: req.body.recipeName,
        description: req.body.description,
        cuisine: req.body.cuisine,
        calorieCount: req.body.calorieCount,
        cookingTime: req.body.cookingTime,
        authorName: req.body.authorName,
        userID: req.body.userID,
        isUserCreated: req.body.isUserCreated
    })
        .then((recipe) => {
            console.log(recipe.get({ plain: true }));
            res.send(recipe.get({ plain: true }));
        })
        .catch(err => {
            res.send('Error');
            console.log(err)
        });
}

exports.searchRecipe = function (req, res) {
    
    Recipe.findOne({
        recipeName: req.query.recipeName
    }).then(recipe => {
        res.send(recipe);
    }).catch(function (err) {
        res.send("error");
    })

}