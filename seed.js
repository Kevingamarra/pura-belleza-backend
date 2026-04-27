const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGO_URI = "mongodb+srv://Purabelleza:5728@purabelleza.80f9wbh.mongodb.net/pura_belleza";

const products = [
  {
    name: "Kaiak Aventura",
    price: 25000,
    img: "/img/productos/perfumeria/kaiak-aventura.jpg",
    category: "perfumeria",
    subcat: "Kaiak",
    aromas: ["fresco"],
    sexo: "masculino"
  },
  {
    name: "Essencial Oud",
    price: 32000,
    img: "/img/productos/perfumeria/essencial-oud.jpg",
    category: "perfumeria",
    subcat: "Essencial",
    aromas: ["amaderado"],
    sexo: "masculino"
  },
  {
    name: "Kriska Drama",
    price: 21000,
    img: "/img/productos/perfumeria/kriska-drama.jpg",
    category: "perfumeria",
    subcat: "Kriska",
    aromas: ["dulce"],
    sexo: "femenino"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("🔥 Mongo conectado desde seed");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("🔥 Productos cargados");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seed();
