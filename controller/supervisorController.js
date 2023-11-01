const catchAsync = require("../middlewares/catchAsync");

exports.getAllsupervisors = catchAsync(async (req, res, next) => {

    try {
        // Fetch all supervisors from the 'supervisor s' table
        const supervisors = await Supervisor.findAll();
        res.json(supervisors);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
   
  });
exports.createsupervisor = catchAsync(async (req, res, next) => {

    const supervisor = {
        supervisor_id: req.body.supervisor_id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
      };

  try {
    // Create a new supervisor item
    const supervisor = await Supervisor.create(supervisors);

    res.status(201).json(supervisor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.getsupervisor = catchAsync(async (req, res, next) => {
  const supervisorId = req.params.id;

  try {
    // Find the supervisor with the specified ID
    const supervisor = await Supervisor.findByPk(supervisorId);

    if (supervisor) {
      res.json(supervisor);
    } else {
      res.status(404).json({ message: 'supervisor not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.updatesupervisor = catchAsync(async (req, res, next) => {
  const supervisorId = req.params.id;
  const updatedData = req.body; // JSON body with updated supervisor data

  try {
    // Find the supervisor with the specified ID
    const supervisor = await Supervisor.findByPk(supervisorId);

    if (!supervisor) {
      return res.status(404).json({ message: 'supervisor not found' });
    }

    // Update the supervisor's data
    await Supervisor.update(updatedData);

    res.json(supervisor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

exports.deletesupervisor = catchAsync(async (req, res, next) => {
  const supervisorId = req.params.id;

  try {
    // Find the supervisor with the specified ID
    const supervisor = await Supervisor.findByPk(supervisorId);

    if (!supervisor) {
      return res.status(404).json({ message: 'supervisor not found' });
    }

    // Delete the supervisor
    await Supervisor.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});