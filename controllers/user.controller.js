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
   web3Assessment,
    forexAssessment,
    isTestCompleted,
    dateCompleted,
    dateCompletedWeb3,
    dateCompletedForex,
  } = req.body;
  User.findOne({ _id: _id }, (err, user) => {
    if (err || !user) {
      console.log('this is the error ', err);
      return res.status(400).json({
        error: 'User not found',
      });
    }
    user.testScore = testScore;
    user.web3Assessment = web3Assessment;
    user.forexAssessment = forexAssessment;
    user.isTestCompleted = isTestCompleted;
    user.dateCompleted = dateCompleted;
    user.dateCompletedWeb3 = dateCompletedWeb3;
    user.dateCompletedForex = dateCompletedForex;
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

exports.updateWeb3Test = (req, res) => {
  const {
    _id,
    web3Assessment,
    isWeb3TestCompleted,
    dateCompletedWeb3,
  } = req.body;
  User.findOne({ _id: _id }, (err, user) => {
    if (err || !user) {
      console.log('this is the error ', err);
      return res.status(400).json({
        error: 'User not found',
      });
    }
    user.web3Assessment = web3Assessment;
    user.isWeb3TestCompleted = isWeb3TestCompleted;
    user.dateCompletedWeb3 = dateCompletedWeb3;
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

exports.updateForexTest = (req, res) => {
  const {
    _id,
    forexAssessment,
    isForexTestCompleted,
    dateCompletedForex,
  } = req.body;
  User.findOne({ _id: _id }, (err, user) => {
    if (err || !user) {
      console.log('this is the error ', err);
      return res.status(400).json({
        error: 'User not found',
      });
    }
    user.forexAssessment = forexAssessment;
    user.isForexTestCompleted = isForexTestCompleted;
    user.dateCompletedForex = dateCompletedForex;
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


