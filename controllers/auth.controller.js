const User = require('../model/auth.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const _ = require('lodash');

/*
exports.registerController = (req, res) => {
  const { address } = req.body;

    User.findOne({
      address,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).send('User with this address exists');
      }
      console.log('this should not run with same address');

      const users = new User({
        address,
      });

      users.save((err, user) => {
        if (err) {
          return res.status(401).send(errorHandler(err));
        } else {
          return res.send('Registration Successfully');
        }
      });
    });
  
};
*/

exports.loginController = (req, res) => {
  const { address } = req.body;

    // check if user exist
    User.findOne({
      address,
    }).exec((err, user) => {
      if (err || !user) {
        const users = new User({
          address,
        });
  
        users.save((err, user) => {
          if (err) {
            return res.status(401).send(errorHandler(err));
          } else {
            return res.send('Registration Successfully');
          }
        });
      }
      // generate a token and send to client
      const token = jwt.sign(
        {
          _id: user._id,
        },
        `${process.env.JWT_SECRET}`,
        {
          expiresIn: '7d', // token valud for 7 days set [] remember me and set it for 30 days
        }
      );
      const { _id, address, testScore, isTestCompleted, dateCompleted } =
        user;

      return res.json({
        token,
        user: {
          _id,
          address,
          testScore,
          isTestCompleted,
          dateCompleted,
        },
      });
    });
  
};
