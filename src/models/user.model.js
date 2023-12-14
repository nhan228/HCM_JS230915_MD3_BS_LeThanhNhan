import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  createUser: async ({ name, email, age }) => {
    try {
      return await prisma.users.create({
        data: {
          name,
          email,
          age
        },
      });
    } catch (err) {
      throw new Error(`Error creating user: ${err.message}`);
    }
  },

  getAllUsers: async () => {
    try {
      return await prisma.users.findMany();
    } catch (err) {
      throw new Error(`Lỗi tìm kiếm user ${err.message}`);
    }
  },

  getUserById: async (id) => {
    try {
      return await prisma.users.findUnique({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(`Lỗi tìm kiếm bằng id: ${err.message}`);
    }
  },

  updateUser: async (id, { name, email, age }) => {
    try {
      return await prisma.users.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          age
        },
      });
    } catch (err) {
      throw new Error(`Lỗi update: ${err.message}`);
    }
  },

  deleteUser: async (id) => {
    try {
      return await prisma.users.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      throw new Error(`Lỗi xóa người dùng: ${err.message}`);
    }
  },
};
