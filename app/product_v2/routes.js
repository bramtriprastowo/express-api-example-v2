const router = require("express").Router();
const Product = require("./model");

router.get("/product", async (req, res) => {
  try {
    await Product.sync();
    const result = await Product.findAll();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.sync();
    const result = await Product.findOne({
      where: { id },
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/product", async (req, res) => {
  const { name, price, stock, status, image_url } = req.body;
  try {
    await Product.sync();
    const result = await Product.create({
      name,
      price,
      stock,
      status,
      image_url,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.put("/product/:id", async (req, res) => {
  const { name, price, stock, status, image_url } = req.body;
  const id = req.params.id;
  try {
    await Product.sync();
    const updatedRow = await Product.update(
      { name, price, stock, status, image_url },
      { where: { id } }
    );
    res.send({
        message: "Successfully updated!",
        name,
        price,
        stock,
        status,
        image_url
    });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.sync();
    const deletedRow = await Product.destroy({ where: { id } });
    res.send({ message: "Successfully deleted!" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
