import express from "express";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    res.send("Hello World! my name is nam");
  });

  // Sử dụng `app` được truyền vào
  return app.use("/", router);
};

// module.exports = initWebRoutes;
export default initWebRoutes;
