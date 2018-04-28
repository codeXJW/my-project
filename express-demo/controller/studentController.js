import { studentService } from "../service/studentService";

export let studentController = {};

studentController.listPage = function () {
    res.render('student/list');
}

studentController.list = function (req, res) {
    studentService.list(function (result) {
        if (!result) {
            return res.json({code: 500, msg: '服务异常'});
        }
        res.json({code:200, data: data});
    });
}
