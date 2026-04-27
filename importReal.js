const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGO_URI = "mongodb+srv://Purabelleza:5728@purabelleza.80f9wbh.mongodb.net/pura_belleza";

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🔥 Mongo conectado");

    // IMPORTANTE: cargar tu archivo real
    const data = require("./catalog-node.js");

    const products = [
  ...(data.productosKaiak || []),
  ...(data.productosEssencial || []),
  ...(data.productosKriska || []),
  ...(data.productosLuna || []),
  ...(data.productosHumorFem || []),
  ...(data.productosHomem || []),
  ... (data.productosFrescor || []),
  ...(data.productosCuidados || []),
  ...(data.productosMaquillaje || []),
  ...(data.productosRegalos || [])
];

    console.log("Productos encontrados:", products.length);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("🔥 Catálogo completo cargado");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seed();
