

const getCategories = async (req, res) => {
    try {
      const foods = await categoryModel.find();
      res.json(foods);
    } catch (error) {}
  };
  
  export default getCategories;