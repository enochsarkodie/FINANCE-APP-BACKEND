const Budget = require('./models/budget');
const Category = require('./models/category');

const createBudget = async (req, res) => {
  const { user, categories, budgetAmount } = req.body;

  //array of categories
  const categoryIds = await Promise.all(categories.map(async (category) => {
    let categoryObj = await Category.findOne({ name: category });
    if (!categoryObj) {
      categoryObj = new Category({ name: category });
      await categoryObj.save();
    }
    return categoryObj._id;
  }));

  // Creating a new budget object
  const budget = new Budget({
    user: req.user.id,
    categories: categoryIds,
    budgetAmount
  });

  await budget.save();
 
  res.send('Budget created successfully!');
};

module.exports = {createBudget};
