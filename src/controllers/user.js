const { User } = require("../models/index");

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });

  return user;
};

const createUser = async ({ nombre, email, edad }) => {
  const user = await User.create({
    nombre,
    email,
    edad,
  });
  return user;
};

const updateUser = async (id, { nombre, email, edad }) => {
  const user = await User.findByPk(id);
  if (!user) {
    return {
      msg: "Usuario no encontrado",
      status: false,
    };
  }

  await User.update(
    { nombre, email, edad },
    {
      where: {
        id: id,
      },
    }
  );

  return {
    msg: "Usuario actualizado",
    status: true,
  };
};

const deleteUser = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
  return {
    msg: "Usuario eliminado",
    status: true,
  };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
