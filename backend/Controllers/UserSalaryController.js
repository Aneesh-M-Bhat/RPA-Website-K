const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
// import and initiate the posts model to query the database
const UserSalary = mongoose.model("user_salary");

// function for base route on "/"
exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

// function to get posts on route "/getPosts"
exports.getUserSalary = async (req, res) => {
  const userSalary = await UserSalary.find();
  res.json(userSalary);
};

// function to create a post
exports.createUserSalary = async (req, res) => {
  // we use mongodb's save functionality here
  await new UserSalary(req.body).save((err, data) => {
    if (err) {
      // if there is an error send the following response
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      // if success send the following response
      res.status(200).json({
        message: "Post Created",
        data,
      });
    }
  });
};

// function to get a single post
exports.getSingleUserSalary = async (req, res) => {
  // get id from URL by using req.params
  let userSalaryID = req.params.id;
  // we use mongodb's findById() functionality here
  await UserSalary.findById({ _id: userSalaryID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  });
};

// function to update a single post
exports.updateUserSalary = async (req, res) => {
  // get a userSalaryID.
  let userSalaryID = req.params.id;

  // we will use findByIdAndUpdate function : findByIdAndUpdate(id, data, callback)
  await UserSalary.findByIdAndUpdate(
    { _id: userSalaryID },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "Post Updated",
          data,
        });
      }
    }
  );
};

// function to delete a post from the DB
exports.deleteUserSalary = async (req, res) => {
  let userSalaryID = req.params.id;
  // we use mongodb's deleteOne() functionality here
  await UserSalary.deleteOne({ _id: userSalaryID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post Deleted",
      });
    }
  });
};
exports.getEmployeeSalary = async (req, res) => {
  let userEid = req.params.eid;
  await UserSalary.find({ employeeId: userEid }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  });
};
