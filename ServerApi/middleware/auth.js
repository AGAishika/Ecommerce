const jwt = require("jsonwebtoken");
const RegisterUserModel = require("../models/RegisterUser");

const checkAuth = async (req, res, next) => {
  try {
    console.log("hello security guard or middleware");
    // here we are taking the token which we get in login page
    // to check the token we need a package i.e. cookie-parser
    const token = req.cookies.token.split("token=")[0];
    // console.log(req.cookies.token);
    // console.log(token);

    if (token == null || token == undefined) {
      res.status(401).json({
        status: "Failed",
        message: "unauthorized Token",
      });
    } else {
      const verifyToken = jwt.verify(token, "ishika12345678agarwal");
      console.log(verifyToken)

      if (!verifyToken) {
        return res.status(401).json({
          status: "Failed",
          message: "Incorrect Token",
        });
      }
      const data = await RegisterUserModel.findOne({ _id: verifyToken.id }).select({
        password: 0,
      });
      req.data1 = data;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "Failed",
      message: "unauthorized Token",
    });
  }
};
module.exports = checkAuth;
