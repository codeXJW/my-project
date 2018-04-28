import { studentController } from '../controller/studentController';

let express = require('express');
export let router = express.Router();

router.get('/list', studentController.listPage);
router.post('/list', studentController.list);