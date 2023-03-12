const User = require('../model/auth.model');
const dotenv = require('dotenv');
dotenv.config();

exports.readController = (req, res) => {
  const userId = req.params.id;
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    console.log('fetching user');
    res.json(user);
  });
};

exports.updateController = (req, res) => {
  const {
    _id,
    testScore,
    testScoreB,
    testScoreC,
    isTestCompleted,
    dateCompleted,
    dateCompletedB,
    dateCompletedC,
  } = req.body;
  User.findOne({ _id: _id }, (err, user) => {
    if (err || !user) {
      console.log('this is the error ', err);
      return res.status(400).json({
        error: 'User not found',
      });
    }
    user.testScore = testScore;
    user.testScoreB = testScoreB;
    user.testScoreC = testScoreC;
    user.isTestCompleted = isTestCompleted;
    user.dateCompleted = dateCompleted;
    user.dateCompletedB = dateCompletedB;
    user.dateCompletedC = dateCompletedC;
    user.save((err, updatedUser) => {
      if (err) {
        console.log('USER UPDATE ERROR', err);
        return res.status(400).json({
          error: 'User update failed',
        });
      }
      console.log('Updated user info- ', updatedUser);
      res.json(updatedUser);
    });
  });
};

