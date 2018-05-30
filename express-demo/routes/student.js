let studentController = require('../controller/studentController');

let express = require('express');
let router = express.Router();

router.get('/list', studentController.listPage);
router.post('/list', studentController.list);

router.post('/add', studentController.add);

module.exports = router