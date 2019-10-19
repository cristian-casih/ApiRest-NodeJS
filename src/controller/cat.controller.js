const express = require('express');
const Cats = require('../../schemas/cat.schema');
const mongoose = require('../../connection/database');

let router = express.Router();

router.get('/cat', (req, res) => {
    Cats.find((err, cats) => {
        if (!err) res.json(cats);
        else console.log('ERROR', err);
    });
});
router.get('/cat/:id', (req, res) => {
    Cats.findById(req.params.id, (err, cat) => {
        if (!err) res.json(cat);
        else console.log('ERROR', err);
    });

});
router.post('/cat', async (req, res) => {
    const catName = req.body;
    const newCat = new Cats(catName);
    await newCat.save();
    res.json({
        "success": true,
        "msg": "Cat saved!"
    })
});

router.put('/cat/:id', (req, res) => {
    Cats.findById(req.params.id, (err,cat) => {
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
});
router.delete('/cat/:id', (req, res) => {
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
});
module.exports = router;