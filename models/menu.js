const mongoose = require('mongoose');

const menu = new mongoose.Schema({
    store: String,
    name: String,
    description: String,
    price: Number,
    size: String,
    unit: Number,
    tax_categories: String,
    ingredient_warnings: String,
    modifier_groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'modifiers',required: false }],
    featured: String,
    availability : Boolean,
    mark_sold_out : String,  
    label: String,
    display_on : String,
    preparation_time : String,
    menu_image: String,
    recommended: String,
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'menu_category', required: true }],
    storeIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }]
})

module.exports = mongoose.model('menus', menu)