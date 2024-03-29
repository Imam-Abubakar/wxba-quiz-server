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
    web3Assessment: {
      type: String,
    },
    forexAssessment: {
      type: String,
    },
    isWeb3TestCompleted: {
      type: String,
      default: 'false',
    },
    isForexTestCompleted: {
      type: String,
      default: 'false',
    },
    isTestCompleted: {
      type: String,
      default: 'false',
    },
    dateCompleted: {
      type: String,
    },
    dateCompletedWeb3: {
      type: String,
    },
    dateCompletedForex: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);