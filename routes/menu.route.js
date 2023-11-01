module.exports = (app) => {
    const menuController = require("../controller/menuController");
    var router = require("express").Router();

    router.route("/")
          .get(menuController.getAllMenus)
          .post(menuController.createMenu)
    router.route("/:id")
          .get(menuController.getMenu)
          .patch(menuController.updateMenu)
          .delete(menuController.deleteMenu)
    app.use("/api/v1/supervisors", router);
}