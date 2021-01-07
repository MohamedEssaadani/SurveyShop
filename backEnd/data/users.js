import bcrypt from "bcryptjs";

const users = [
  {
    name: "Mohamed Es-saadani",
    email: "essaadani80@gmail.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "Hicham Es-saadani",
    email: "hicham@gmail.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Jhon Doe",
    email: "doe@gmail.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
