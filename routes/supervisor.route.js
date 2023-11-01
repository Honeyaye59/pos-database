module.exports = (app) => {
    const supervisorController = require("../controller/supervisorController");
    var router = require("express").Router();

    router.route("/")
          .get(supervisorController.getAllSupervisors)
          .post(supervisorController.createSupervisor)
    router.route("/:id")
          .get(supervisorController.getSupervisor)
          .patch(supervisorController.updateSupervisor)
          .delete(supervisorController.deleteSupervisor)
    app.use("/api/v1/supervisors", router);
}