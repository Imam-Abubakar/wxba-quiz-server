const express = require('express');
const router = express.Router();

// import controller
const {
  readController,
  updateController,
  updateForexTest,
  updateWeb3Test
} = require('../controllers/user.controller');

router.get('/user/:id', readController);
router.put('/user/update', updateController);
router.put('/user/update/web3', updateWeb3Test);
router.put('/user/update/forex', updateForexTest);

module.exports = router;