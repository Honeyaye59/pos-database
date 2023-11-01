module.exports = (app) => {
    const waitstaffController = require("../controller/employeesController");
    var router = require("express").Router();

    router.route("/")
          .get(waitstaffController.getAllWaitstaffs)
          .post(waitstaffController.createWaitstaff)
    router.route("/:id")
          .get(waitstaffController.getWaitstaff)
          .patch(waitstaffController.updateWaitstaff)
          .delete(waitstaffController.deleteWaitstaff)
    app.use("/api/v1/waitstaffs", router);
}