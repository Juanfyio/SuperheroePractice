const { application } = require("express");
const superhero_routes = require("./superhero.routes");
const project_routes = (app) =>{
    app.use('/api/v1/superheroes',superhero_routes);
}

module.exports = project_routes