const express = require("express");
const userController = require("../controllers/user");

const userApi = (app = express()) => {
  const router = express.Router();
  app.use("/api/user", router);

  router.get("/", async (req, res) => {
    const users = await userController.getAllUsers();
    res.json({
      data: users,
    });
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await userController.getUserById(id);
    res.json({
      data: user,
    });
  });

  router.post("/", async (req, res) => {
    const user = req.body;
    const newUser = await userController.createUser(user);
    res.status(201).json({
      data: newUser,
    });
  });

  router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const result = await userController.updateUser(id, user);
    res.status(result.status ? 200 : 400).json({
      data: result.msg,
    });
  });

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await userController.deleteUser(id);

    res.json(result);
  });
};
module.exports = userApi;
