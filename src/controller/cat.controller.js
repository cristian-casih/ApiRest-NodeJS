const Cats = require('../../schemas/cat.schema');

let catController = {

    getCats: (req, res) => {
        Cats.find((err, cats) => {
            if (err) {
                return res.status(500).send({
                    'error': true,
                    'msg': 'Error consult Cats'
                });
            }
            if (!cats) {
                return res.status(404).send({
                    'error': true,
                    'msg': 'Not found Cats'
                });
            }
            return res.status(200).json({
                cats
            });
        });
    },
    getCat: (req, res) => {
        Cats.findById(req.params.id, (err, cat) => {
            if (!err) res.json(cat);
            else console.log('Error', err);

        });
    },
    saveCat: (req, res) => {
        const catName = req.body;
        const newCat = new Cats(catName);
        newCat.save((err, cat) => {
            if (err) {
                return res.status(500).send({
                    'error': 'error creat cat'
                });
            }
            if (!cat) {
                console.log(cat);

                return res.status(404).send({
                    'error': true,
                    'msg': 'Not found Cat'
                });
            }
            return res.status(200).json({
                cat
            });
        });
    },
    updateCat: (req, res) => {
        Cats.findById(req.params.id, (err, cat) => {
            cat.name = req.body.name,
                cat.race = req.body.race,
                cat.color = req.body.color,
                cat.save(() => {
                    if (!err) {
                        res.json({
                            "success": true,
                            "msg": "Cat Actualizado"
                        })
                    } else {
                        res.status(400).json({
                            "error": true,
                            "msg": "No cat updated"
                        })
                    }

                })
        })
    },
    deleteCat: (req, res) => {
        Cats.findByIdAndDelete(req.params.id, (err) => {
            if (!err) {
                res.json({
                    "success": true,
                    "msg": "Cat deleted!"
                })
            } else {
                res.status(404).json({
                    "error": true,
                    "msg": "No cat found"
                })
            }
        });
    }
}
module.exports = catController;