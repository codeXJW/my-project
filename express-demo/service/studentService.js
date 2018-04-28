let mongoDB = global.app.get("mongoDB");

export let studentService = {};

studentService.list = function (callback) {
    mongoDB.get('student').find({}).then(function (result) {
        if (!result) {
            return callback && callback(false);
        }
        callback && callback(result);
    });
};
