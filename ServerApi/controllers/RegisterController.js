const RegisterUserModel = require("../models/RegisterUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class RegisterController {
  static getallUser = async (req, res) => {
    try {
      const getallUser = await RegisterUserModel.find();
      // res.send(getallUser);

      res.status(201).json({
        status: "success",
        message: "successful",
        getallUser,
      });
    } catch (error) {
      console.log(error);
    }
  };

  static userInsert = async (req, res) => {
    console.log(req.body);

    try {
      const { name, email, password, cpassword, phone } = req.body;
      if (!name || !email || !password || !cpassword || !phone) {
        return res.status(422).json({ error: "plz filled the field properly" });
      }
      if (password !== cpassword) {
        return res
          .status(422)
          .json({ message: "password and confirm password should match" });
      }

      const userExist = await RegisterUserModel.findOne({ email: email });
      const passExist = await RegisterUserModel.findOne({ password: password });

      if (userExist) {
        return res.status(422).json({ message: "Email already exist" });
      }

      const hashpassword = await bcrypt.hash(req.body.password, 10);
      const hashcpassword = await bcrypt.hash(req.body.cpassword, 10);
      const user = new RegisterUserModel({
        name,
        email,
        phone,
        password: hashpassword,
        cpassword: hashcpassword,
      });

      await user.save();
      console.log(`${user}`);

      res.status(201).json({ message: "user registered succesfully" });
      // res.redirect('/login');
    } catch (error) {
      console.log(error);
    }
  };

  static userLogin = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      if (email && password) {
        const admin = await RegisterUserModel.findOne({ email: email });
        if (admin != null) {
          const isMatch = await bcrypt.compare(password, admin.password);
          if (isMatch) {
            // generate token  token generate user ki (id not email) se
            const token = jwt.sign({ id: admin.id }, "ishika12345678agarwal");  //{expiresIn: 900}
            // console.log(token);
            res.cookie("token", token,); //ab yha se middleware (middleware req, res k beech mai rhega)token check hoga jo token generate hokr hume mila h usko check krega
            res.status(201).json({
              status: "success",
              message: "successful",
              token: token,
              admin,
            });
            // res.redirect("/check");
          } else {
            console.log("hello");
            return res.status(401).json({
              status: "failed",       
              message: "email or password is incorrect",
            });
            // req.flash("error", "Email or password is incorrect");
            // req.redirect("/login");
          }
        } else {
          res.status(401).json({
            status: "failed",
            message: "you are not register user",
          });
          // req.flash("error", "you are not register user");
          // req.redirect("/register");
        }
      } else {
        res
          .status(401)
          .json({ status: "error", message: "all fields are required" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static getuserdetail = async (req, res) => {
    try {
      // const { id, name, email } = req.params.id;
      const admin = req.data1;
      //  console.log(admin);
      res.status(201).json({
        status: "success",
        message: "successfull",
        admin,
      });
      // res.send("hello user");
    } catch (error) {
      console.log(error);
    }
  };

  static logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(201).json({
        status: "logout",
        message: "successfully logout",
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: "failed",
        message: "Fail to logout",
      });
    }
  };

  static updateprofile = async (req, res) => {
    try {
      console.log(req.body);
      var data = {
        name: req.body.name,
        email: req.body.email,
      };
      // Update Code
      const result = await RegisterUserModel.findByIdAndUpdate(
        req.data1.id,
        data
      );
      const resu = await RegisterUserModel.findById(req.data1.id);

      if (req.body.password) {
        const newHashPassword = await bcrypt.hash(req.body.password, 10);
        await RegisterUserModel.findByIdAndUpdate(req.data1.id, {
          password: newHashPassword,
        });
      }
      res.status(200).json({
        success: true,
        message: "Profile  updated sucessfully",
        resu,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // static reset_Password1 = async (req, res) => {
  //   try {
  //     const { password, email } = req.body;
  //     const newHashPassword = await bcrypt.hash(password, 10);
  //     await RegisterUserModel.findByIdAndUpdate(req.data1.id, {
  //       password: newHashPassword,
  //     });
  //     res.status(201).json({
  //       status: "success",
  //       message: "Reset Password Updated successfully ",
  //     });
  //     // res.redirect("/");
  //   } catch (error) {
  //     console.log(error);
  //     res.status(401).json({
  //       status: "failed",
  //       message: error.message,
  //     });
  //   }
  // };

  // static verifyLogin = async (req, res) => {
  //   try {
  //     // console.log(req.body);
  //     const { email, password } = req.body;
  //     if ((email, password)) {
  //       const user = await RegisterUserModel.findOne({ email: email });
  //       if (admin != null) {
  //         const ismatch = await bcrypt.compare(password, admin.password);
  //         if (ismatch) {
  //           //generate token
  //           const token = jwt.sign({ id: admin._id }, "ishika12345678agarwal");
  //           console.log(token);
  //           res.cookie("token", token);
  //         } else {
  //           req.flash("error", "Email or password is incorrect");
  //         }
  //       } else {
  //         req.flash("error", "you are not register user");
  //       }
  //     } else {
  //       req.flash("error", "all fields are required");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}
module.exports = RegisterController;
