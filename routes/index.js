const express = require("express");
const router = express.Router();
const upload = require("../middleware/qrLogoUpload");
const controllers = require("../controllers/index");
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  res.render("pages/index");
});
router.post(
  "/qrcode",
  upload.single("logo_image"),
  controllers.qrcode.qrcodeGenerate
);

router.post('/login',  controllers.auth.login)
router.post("/signup",controllers.auth.signUp);

router.get('/website/:id', auth, controllers.website.websiteConentFetch)
router.post('/website', auth, upload.single("banner_image"), controllers.website.websiteConentCreator)

router.post('/menu',auth, upload.single("menu_image"), controllers.menu.setMenu)
router.put('/menu',auth, upload.single("menu_image"), controllers.menu.updateMenu)
router.post('/foods/category/:id', auth, controllers.menu.getmenuFoods)
router.delete('/menu/:id', auth, controllers.menu.deleteMenu)

router.post('/menu_category',auth, controllers.category.setMenuCategory)
router.post('/get_menu_category/:id', auth, controllers.category.getMenuCategory)
router.get('/get_menu_category/:id', auth, controllers.category.getCategoryList)
router.delete('/menu_category/:id', auth, controllers.category.deleteCategory)

router.get('/modifier/:id',auth, controllers.modifiers.getmodifier)
router.post('/modifier',auth, controllers.modifiers.setmodifier)
router.delete('/modifier/:id',auth, controllers.modifiers.getmodifier)

module.exports = router;
