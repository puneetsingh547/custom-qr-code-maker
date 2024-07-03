const mongoose = require('mongoose');

const menu_category = new mongoose.Schema({
    store: String,
    name: String,
    description: String,
    tax_categories: String,
    modifier_groups: String,
})

module.exports = mongoose.model('menu_category', menu_category)