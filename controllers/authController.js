import { db } from "../connectDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = (req, res) => {
  //CHECK USER IF EXISTS
  const { username, name, email, password } = req.body;
  const q = "SELECT * FROM users WHERE username = (?)";

  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [username, email, hashedPassword, name];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const userLogin = (req, res) => {
  const { username } = req.body;
  const q = "SELECT * FROM  users WHERE username= ?";
  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).send("user not found");
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).send("Wrong password or username");
    const token = jwt.sign(
      { id: data[0].id, username: data[0].username },
      "sendsomethingsecretkeyhere"
    );
    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const userLogout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logout");
};

export const deleteAlluser = (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const q = " DELETE FROM users WHERE id = ? ";

  db.query(q, [userId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
