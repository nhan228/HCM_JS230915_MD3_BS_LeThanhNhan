import userModel from "../models/user.model";

export default {
  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const newUser = await userModel.createUser({ name, email, age });
      res.json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Sever bảo trì" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ err: "Sever bảo trì" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await userModel.getUserById(userId);
      res.json(user);
    } catch (err) {
      res.status(500).json({ err: "Server bảo trì" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const { name, email, age } = req.body;
      const updatedUser = await userModel.updateUser(userId, { name, email, age });
      res.json({updatedUser, message: `Cập nhật User thành công`});
    } catch (err) {
      res.status(500).json({ err: "Server bảo trì" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      await userModel.deleteUser(userId);
      res.json({ message: `Xóa User ID:${userId} thành công` });
    } catch (err) {
      res.status(500).json({ err: "Server bảo trì" });
    }
  },
};
