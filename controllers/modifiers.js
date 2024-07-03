const modifiers = require('../models/modifiers');

exports.setmodifier = async (req, res) => {
    try {
        let { name,
            restaurantId,
            multipleItems,
            modifierType,
            forceMaximum,
            forceMinimum, } = req.body;

        let queryResponse = await modifiers.create({ name,
            restaurantId,
            multipleItems,
            modifierType,
            forceMaximum,
            forceMinimum })
        res.send({
            status: true,
            queryResponse
        });
    } catch (error) {
        res.status(400).send({
            status: false,
            error: error.message
        })
    }
}

exports.getmodifier = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await modifiers.find({
            restaurantId: id
        });
        res.send({
            status: true,
            message: "Successfully loaded the ModifierGroups",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            status: false,
            message: error.message
        })
    }
}