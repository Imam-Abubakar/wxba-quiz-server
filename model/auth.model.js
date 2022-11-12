const mongoose = require('mongoose');
// user schema
const userSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      unique: true,
    },
    testScore: {
      type: String,
    },
    isTestCompleted: {
      type: String,
      default: 'false',
    },
    dateCompleted: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);