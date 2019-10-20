const Dogs = require('../../schemas/dog.schema');

let dogController = {

    getDogs: (req, res) => {
        Dogs.find((err, dogs) => {
            if (err) {
                return res.status(500).send({
                    'error': true,
                    'msg': 'Error consult Dogs'
                });
            }
            if (!dogs) {
                return res.status(404).send({
                    'error': true,
                    'msg': 'Not found Dogs'
                });
            }
            return res.status(200).json({
                dogs
            });
        });
    },
    getDog: (req, res) => {
        Dogs.findById(req.params.id, (err, dog) => {
            if (!err) res.json(dog);
            else console.log('Error', err);

        });
    },
    saveDog: (req, res) => {
        const dogName = req.body;
        const newDog = new Dogs(dogName);
        newDog.save((err, dog) => {
            if (err) {
                return res.status(500).send({
                    'error': 'error creat dog'
                });
            }
            if (!dog) {
                return res.status(404).send({
                    'error': true,
                    'msg': 'Not found Dog'
                });
            }
            return res.status(200).json({
                dog
            });
        });
    },
    updateDog: (req, res) => {
        Dogs.findById(req.params.id, (err, dog) => {
            dog.name = req.body.name,
                dog.race = req.body.race,
                dog.color = req.body.color,
                dog.save(() => {
                    if (!err) {
                        res.json({
                            "success": true,
                            "msg": "Dog Actualizado"
                        })
                    } else {
                        res.status(400).json({
                            "error": true,
                            "msg": "No dog updated"
                        })
                    }

                })
        })
    },
    deleteDog: (req, res) => {
        Dogs.findByIdAndDelete(req.params.id, (err) => {
            if (!err) {
                res.json({
                    "success": true,
                    "msg": "Dog deleted!"
                })
            } else {
                res.status(404).json({
                    "error": true,
                    "msg": "No dog found"
                })
            }
        });
    }
}
module.exports = dogController;