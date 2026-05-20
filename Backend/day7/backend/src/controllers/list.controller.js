const ListModel = require("../models/list.model");

let createListController = async (req, res) => {
  try {
    let { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({
        message: "ALl fields are required",
      });

    let newList = await ListModel.create({
      taskName: name,
      description,
    });

    return res.status(201).json({
      message: "List created successfully",
      list: newList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

let getAllListsController = async (req, res) => {
  try {
    let allLists = await ListModel.find();

    if (!allLists.length)
      return res.status(204).json({
        message: "Lists fetched successfully",
        lists: allLists,
      });

    return res.status(200).json({
      message: "Lists fetched successfully",
      lists: allLists,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

let updateListController = async (req, res) => {
  try {
    let listId = req.params.id;
    if (!listId)
      return res.status(404).json({
        message: "Id not found",
      });

    let { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({
        message: "All fields are required",
      });

    let updateList = await ListModel.findByIdAndUpdate(
      listId,
      {
        taskName: name,
        description,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "List updated successfully",
      list: updateList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

let deleteListController = async (req, res) => {
  try {
    let listId = req.params.id;
    if (!listId)
      return res.status(404).json({
        message: "Id not found",
      });

    await ListModel.findByIdAndDelete(listId);

    return res.status(200).json({
      message: "List deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createListController,
  getAllListsController,
  updateListController,
  deleteListController,
};
