const catchAsync = require("../middlewares/catchAsync");

exports.getAllMenus = catchAsync(async (req, res, next) => {

    try {
        // Fetch all menus from the 'Menus' table
        const menus = await Menu.findAll();
        res.json(menus);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
   
  });

exports.createMenu = catchAsync(async (req, res, next) => {
    const menus = {
        category_id: req.body.category_id,
        ingredient_id: req.body.ingredient_id,
        extraFood_id: req.body.extraFood_id,
        food_name: req.body.food_name,
        price: req.body.price,
        img: req.body.img,
        is_available: req.body.is_available
      };

  try {
    // Create a new menu item
    const menu = await Menu.create(menus);

    res.status(201).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

exports.getMenu = catchAsync(async (req, res, next) => {
    const menuId = req.params.id;
    
  try {
    // Find the menu with the specified ID
    const menu = await Menu.findByPk(menuId);

    if (menu) {
      res.json(menu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
   
});

exports.updateMenu = catchAsync(async (req, res, next) => {
    const id = req.params.id * 1;

    await Menu.update(req.body, {
      where: { menu_id: id },
    }).then((updated) => {
      if (updated) {
        res.status(200).json({
          status: "success",
          message: "Updated successfully",
        });
      } else {
        res.status(404).json({
          status: "fail",
          message: "Invalid ID",
        });
      }
    });
   
});

exports.deleteMenu = catchAsync(async (req, res, next) => {
    const id = req.params.id * 1;

    await Menu.destroy({ where: { menu_id: id } }).then((deleted) => {
      if (deleted) {
        res.status(200).json({
          status: "success",
          message: "Deleted successfully",
        });
      } else {
        res.status(404).json({
          status: "fail",
          message: "Invalid ID",
        });
      }
    });
});