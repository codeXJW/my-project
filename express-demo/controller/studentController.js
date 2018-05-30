let studentService = require("../service/studentService");


exports.listPage = function (req, res) {
    res.render('student/list');
}

exports.list = function (req, res) {
    studentService.list(function (result) {
        if (!result) {
            return res.json({code: 500, msg: '服务异常'});
        }
        res.json({code:200, data: result});
    });
}

exports.add = function (req, res) {
    let insertObj = {
        name: "小红",
        sex: '女',
        age: 28
    };

    studentService.add(insertObj, (result) => {
        if (!result) {
            return res.json({code: 500, msg: '服务异常'});
        }
        res.json({code: 200, data: result})
    });
};


