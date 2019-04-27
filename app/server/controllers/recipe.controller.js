const Recipe = require('../models/recipe')
const Sequelize = require('sequelize');
const recipeImages = require('../models/recipeImages')
const Op = Sequelize.Op;

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
    limit = 20,
        Recipe.findOne({
            where:
                { recipeName: { [Op.like]: '%' + req.query.recipeName + '%' } }
        }).then(recipes => {
            res.json({ recipe: recipes });
        }).catch(function (err) {
            res.send("error");
        })
}

exports.getRecommendation = async function (req, res) {
    let recipe
    let arr = [];
    let recipeurl;
    //let arr = [1129, 1032, 1023, 1091, 1040, 1048, 1063, 1098];
    try {
        recipe = await getRecipe(req);
        //arr = await getarray(recipe);
        recipeurl = await getImageUrl(arr);
        recipe = await combinethem(recipe, recipeurl)
        res.json(recipe)
    } catch (e) {

    }
}

function getarray(recipe) {

    let arr = [];
    for (let i = 0; i < 8; i++) {
        arr[i] = recipe[i].recipeID;
    }
    return arr;
}

function combinethem(recipe, recipeUrl) {
    for (let i = 0; i < 8; i++) {
        recipe[i].url = recipeUrl[i].recipeImageDir
    }
    return recipe
}

function getRecipe(req) {
    return (Recipe.findAll(
        {
            order: [[Sequelize.literal('RAND()')]],
            limit: 8,
        }
    ))
}

function getImageUrl(arr) {

    return (recipeImages.findAll({
        //        where: {
        order: [[Sequelize.literal('RAND()')]],
        limit: 8,
        // recipeID: arr
        //       }
    }))
}

exports.testSearch = function (req, res) {
    Recipe.findAll({
        where: {
            recipeID: id,
        }
    }).then(recipe => {
        res.json(recipe);
    })
}

/*            recipeImages.findAll({
                where: {
                    recipeID: arr
                }
            }).then((images) => {
                for(let i = 0; i < 8; i++)
                {
                    // console.log(images[j].recipeID);
                    // for(let j = 0; j < 8; j++)
                    //     {
                    //         if(arr[i] === images[j].recipeID)
                    //         {
                    //             console.log('ok');
                    //         }
                    //     }
                }
                res.json(images);
            }).catch(function (err) {
                console.log(err);
                res.send("error");
            })*/



/*
    Recipe.findAll(
{
order: [[Sequelize.literal('RAND()')]],
limit: 8,
}
)
.then((recipe) => {
for(let i = 0; i < 8; i++)
{
recipe[i].url = 'https://images.media-allrecipes.com/userphotos/300x300/25840.jpg';
}
recipeImages.findAll({
where: {
recipeID: arr
}
})
.then(img => {
res.json(img)
}).catch();
console.log(arr)
}).catch(function (err) {
console.log(err);
res.send("error");
})
*/