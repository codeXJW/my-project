let mongoDB = global.app.get("mongoDB");
let student =  mongoDB.get('student');

 exports.list = function (callback) {
    student.find({}).then(function (result) {
        if (!result) {
            return callback && callback(false);
        }
        callback && callback(result);
    });
};

exports.add = function (insertObj, callback) {
    student.insert(insertObj).then((result) => {
        console.log(result);
        callback && callback(result)
    });
};
