const { model } = require("mongoose")
const ProdController = require("../controllers/prods.controller")

module.exports = (app)=>{
    app.get("/api/test", ProdController.prodsApi)
    app.get("/api/prods", ProdController.allProds)
    app.get("/api/prods/:id", ProdController.oneProd)
    app.post("/api/prods", ProdController.addProd)
    app.put("/api/prods/:id", ProdController.updateProd)
    app.delete("/api/prods/:id", ProdController.deleteProd)

}
