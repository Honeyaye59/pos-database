const catchAsync = require("../middlewares/catchAsync");

exports.getAllManagers = catchAsync(async (req, res, next) => {

    try {
        // Fetch all Managers from the 'Manager s' table
        const managers = await Manager.findAll();
        res.json(managers);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
   
  });
exports.createManager = catchAsync(async (req, res, next) => {

    const manager = {
        manager_id: req.body.manager_id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
      };

  try {
    // Create a new Manager item
    const Manager = await Manager.create(Managers);

    res.status(201).json(Manager);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.getManager = catchAsync(async (req, res, next) => {
  const managerId = req.params.id;

  try {
    // Find the manager with the specified ID
    const manager = await Manager.findByPk(managerId);

    if (manager) {
      res.json(manager);
    } else {
      res.status(404).json({ message: 'Manager not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.updateManager = catchAsync(async (req, res, next) => {
  const managerId = req.params.id;
  const updatedData = req.body; // JSON body with updated manager data

  try {
    // Find the manager with the specified ID
    const manager = await Manager.findByPk(managerId);

    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }

    // Update the manager's data
    await manager.update(updatedData);

    res.json(manager);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

exports.deleteManager = catchAsync(async (req, res, next) => {
  const managerId = req.params.id;

  try {
    // Find the manager with the specified ID
    const manager = await Manager.findByPk(managerId);

    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }

    // Delete the manager
    await manager.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});