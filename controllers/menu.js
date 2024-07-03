const menu = require("../models/menu");

exports.setMenu = async (req, res) => {
  try {
    let {
      _id,
      store,
      name,
      description,
      price,
      size,
      unit,
      tax_categories,
      ingredient_warnings,
      modifier_groups=[null],
      featured,
      availability,
      mark_sold_out,
      label,
      display_on,
      preparation_time,
      recommended,
      category,
      storeIds
    } = req.body;
    var menu_image = "menu/";
    if (req?.file?.filename) {
      menu_image += req?.file?.filename;
    }
    if(!modifier_groups){
      modifier_groups=[]
    }
    
    if(_id){
      const menuToBeUpdate = {
        name,
        description,
        price,
        size,
        unit,
        tax_categories,
        ingredient_warnings,
        modifier_groups,
        featured,
        availability,
        mark_sold_out,
        label,
        display_on,
        preparation_time,
        recommended,
      }

      if(menu_image !== 'menu/'){
        menuToBeUpdate.menu_image = menu_image;
      }
      const queryResponse = await menu.updateOne(
        {
          _id: _id,
        },
        {
          $set: menuToBeUpdate,
        }
      );
  
      return res.status(200).send({
        status: true,
        queryResponse,
      });
    }

    else {
      let result = await menu.create({
        store,
        name,
        description,
        price,
        size,
        unit,
        tax_categories,
        ingredient_warnings,
        modifier_groups,
        featured,
        availability,
        mark_sold_out,
        label,
        display_on,
        preparation_time,
        recommended,
        menu_image,
        category,
        storeIds
      });
      res.send(result);
    }

  } catch (error) {
    console.log(error)
    res.status(401).send({
      message: error.message
    })
  }
  
};

exports.updateMenu = async (req, res) => {
  try {
    let {
      id,
      name,
      description,
      price,
      size,
      unit,
      tax_categories,
      ingredient_warnings,
      modifier_groups,
      featured,
      availability,
      mark_sold_out,
      label,
      display_on,
      preparation_time,
      recommended,
    } = req.body;
    if (!id) {
      return res.status(404).send({
        message: "Menu id is reduired",
      });
    }
    const queryResponse = await menu.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name,
          description,
          price,
          size,
          unit,
          tax_categories,
          ingredient_warnings,
          modifier_groups,
          featured,
          availability,
          mark_sold_out,
          label,
          display_on,
          preparation_time,
          recommended,
        },
      }
    );

    res.status(200).send({
      status: true,
      queryResponse,
    });
  } catch (error) {
    res.send(400).send({
      status: false,
      error: error.message,
    });
  }
};

exports.getmenuFoods = async (req, res) => {
  try {
    let result = await menu.find({
      storeIds: req.params.id,
      category: req.body.categoryId
    })
    res.send({
        status: true,
        data: result,
        message: "Successfully fetch the food"
    })
  } catch (error) {
    console.log('get food', error )
  }
}

exports.deleteMenu = async (req, res) => {
  try {
    const result = await menu.findByIdAndDelete(req.params.id)
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
