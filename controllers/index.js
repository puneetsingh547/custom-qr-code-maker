const qrcode = require('./qrcodeGenerate')
const auth = require('./login')
const website = require('./website')
const menu = require('./menu')
const category = require('./category')
const modifiers = require('./modifiers')

module.exports = {
    qrcode,
    auth,
    website,
    menu,
    category,
    modifiers
}