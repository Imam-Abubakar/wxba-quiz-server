const mongoose = require('mongoose');
// user schema
const userSchema = new mongoose.Schema(
  {
    address: {
      type: String,
    },
    testScore: {
      type: String,
    },
    testScoreB: {
      type: String,
    },
    isTestCompleted: {
      type: String,
      default: 'false',
    },
    dateCompleted: {
      type: String,
    },
    dateCompletedB: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);