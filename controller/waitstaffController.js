const catchAsync = require("../middlewares/catchAsync");

exports.getAllwaitstaffs = catchAsync(async (req, res, next) => {

    try {
        // Fetch all waitstaffs from the 'waitstaff s' table
        const waitstaffs = await Waitstaff.findAll();
        res.json(waitstaffs);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
   
  });
exports.createwaitstaff = catchAsync(async (req, res, next) => {

    const waitstaff = {
        waitstaff_id: req.body.waitstaff_id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
      };

  try {
    // Create a new waitstaff item
    const waitstaff = await Waitstaff.create(waitstaffs);

    res.status(201).json(waitstaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.getwaitstaff = catchAsync(async (req, res, next) => {
  const waitstaffId = req.params.id;

  try {
    // Find the waitstaff with the specified ID
    const waitstaff = await Waitstaff.findByPk(waitstaffId);

    if (waitstaff) {
      res.json(waitstaff);
    } else {
      res.status(404).json({ message: 'waitstaff not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.updatewaitstaff = catchAsync(async (req, res, next) => {
  const waitstaffId = req.params.id;
  const updatedData = req.body; // JSON body with updated waitstaff data

  try {
    // Find the waitstaff with the specified ID
    const waitstaff = await Waitstaff.findByPk(waitstaffId);

    if (!waitstaff) {
      return res.status(404).json({ message: 'waitstaff not found' });
    }

    // Update the waitstaff's data
    await Waitstaff.update(updatedData);

    res.json(waitstaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

exports.deletewaitstaff = catchAsync(async (req, res, next) => {
  const waitstaffId = req.params.id;

  try {
    // Find the waitstaff with the specified ID
    const waitstaff = await Waitstaff.findByPk(waitstaffId);

    if (!waitstaff) {
      return res.status(404).json({ message: 'waitstaff not found' });
    }

    // Delete the waitstaff
    await Waitstaff.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});