const Ingredient = require("../moudules/Ingredient");

exports.ingredientsList = function (req, res) {
    Ingredient.findAll().then(function (ingridients) {
        res.send(ingridients);
    }).catch(function (err) {
        res.send("error");
    });
}

exports.ingredientsSearch = function (req, res) {

    Ingredient.findAll({
        where: {
            ingredientName: req.query.ingredient,
        }
    }).then(ingridient => {
        res.send(ingridient);
    }).catch(function (err) {
        res.send("error");
    })
}

exports.ingredientsAdd = function (req, res) {
    Ingredient.create({
<<<<<<< HEAD
        ingredientName: req.body.ingredientName,
        ingredientType: req.body.ingredientType,
        description: req.body.description
    })
        .then((ingridient) => {
            console.log(ingridient.get({ plain: true }));
            res.send(ingridient.get({ plain: true }));
        })
        .catch(err => {
            res.send('Error');
            console.log(err)
        })

=======
        where: {
            ingredientName: req.body.ingredientName,
            ingredientType: req.body.ingredientType,
            description: req.body.description,
        }
    }).then((ingridient) => {
        console.log(ingridient.get({ plain: true }));
        res.send(ingridient.get({ plain: true }));
    }).catch(err => {
        res.send('Error');
        console.log(err)
    })
>>>>>>> eaad687e4e482cb492a565e83b4046ce65749958
}