module.exports = (app) => {
    const managerController = require("../controller/managerController");
    var router = require("express").Router();

    router.route("/")
          .get(managerController.getAllManagers)
          .post(managerController.createManager)
    router.route("/:id")
          .get(managerController.getManager)
          .patch(managerController.updateManager)
          .delete(managerController.deleteManager)
    app.use("/api/v1/managers", router);
}