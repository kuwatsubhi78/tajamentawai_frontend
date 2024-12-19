const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const aksiRoutes = require("./routes/aksiRoutes");
const articleRoutes = require("./routes/articleRoutes");
const commentRoutes = require("./routes/commentRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const destinasiRoutes = require("./routes/DestinasiRoutes");
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["https://tajamentawai.vercel.app", "http://localhost:3000"],
    credentials: true,
  })
);

// Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: "TajaMentawai API Documentation", // Mengubah title
    customfavIcon: "/uploads/logo2.png", // Path ke favicon
    customCss: `
      .swagger-ui .topbar { 
        display: none; 
      }
    `,
  })
);

// Routes
app.use("/", authRoutes);
app.use("/", aksiRoutes);
app.use("/", articleRoutes);
app.use("/", commentRoutes);
app.use("/", ratingRoutes);
app.use("/", destinasiRoutes);

app.use("/uploads", express.static("uploads"));

// Start Server
module.exports = app;
// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });
