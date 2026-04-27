console.log("🔥 SERVER CORRECTO 🔥");
const connectDB = require("../config/db");
connectDB();



console.log("🔥 ESTE ES MI SERVER REAL 🔥")
const express = require("express")
const app = express()
const PORT = 4000

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes")


app.use(express.json())


app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes)

app.get("/", (req, res) => {
  res.send("Servidor Pura Belleza funcionando 🚀")
})

app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
