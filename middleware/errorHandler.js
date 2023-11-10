const errorHandler = (err, req, res, next) =>{
const statusCode = res.statusCode ? res.statusCode : 500;
switch (statusCode) {
    case 400:
    res.json({
        title:"validation Failed",
        message: err.message,
        stackTrace:err,stack,
    });
    break;

    case 401:
    res.json({
        title:"AUTHORIZED",
        message: err.message,
        stackTrace:err,stack,
    });
    break;

    case 403:
        res.json({
            title:"FORBIDDEN",
            message: err.message,
            stackTrace:err,stack,
        });
        break;

    case 404:
        res.json({
            title:"Not found",
            message: err.message,
            stackTrace:err,stack,
        });
        case 500:
            res.json({
                title:"SERVER ERROR",
                message: err.message,
                stackTrace:err,stack,
            });
        default: console.log("No Error, All good")
        break;
        
}}


module.exports = errorHandler;