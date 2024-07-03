const menu_category = require("../models/menu_category");
const menu = require("../models/menu");

exports.setMenuCategory = async (req, res) => {
    try {
        let { _id, store, name, description, tax_categories, modifier_groups } = req.body;

        if(_id){
            const queryResponse = await menu_category.updateOne(
              {
                _id: _id,
              },
              {
                $set: {
                    store,
                    name,
                    description,
                    tax_categories,
                    modifier_groups,
                },
              }
            );
        
            return res.status(200).send({
              status: true,
              queryResponse,
            });
          } else {
            let queryResponse = await menu_category.create({store, name, description, tax_categories, modifier_groups })
            res.send({
                status: true,
                queryResponse
            });
          }

    } catch (error) {
        res.status(400).send({
            status: false,
            error: error.message
        })
    }

};

exports.getMenuCategory = async (req, res) => {
    try {
        let result = await menu_category.find({
            store: req.body.categoryId
        })
        res.send({
            data: result,
            status: true,
            message: 'Successfully fetch the categories'
        })
    } catch (error) {
        res.send(req.body)
    }
}

exports.getCategoryList = async (req, res) => {
    try {
        let result = await menu_category.find({
            store: req.params.id
        })
        res.send({
            data: result,
            status: true,
            message: 'Successfully fetch the categories'
        })
    } catch (error) {
        res.send(req.body)
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const deleteMenu = await menu.deleteMany({ "category" : req.params.id })
        const result = await menu_category.findByIdAndDelete(req.params.id)
        if(result){
            res.send({
            status: true,
            messgae: 'Item Deleted Successfully.'
            })
        }
    } catch (error) {
      console.log(error)
      res.status(401).send(error.message)
    }
}
