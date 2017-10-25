var users = require('../controllers/users');
var todos = require('../controllers/todos');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS,PUT,DELETE, UPDATE");
        next();
    });

    //user routes
    app.post('/user/auth', users.auth);
    app.get('/user/logout', helpers.isAuthenticated, users.logout);

    //video routes
    app.get('/todos', helpers.isAuthenticated, todos.get);
    app.put('/todo', helpers.isAuthenticated, todos.insertOrUpdate);
    app.delete('/todo', helpers.isAuthenticated, todos.delete);
}

module.exports = routesAPI;