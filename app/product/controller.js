const connection = require("../../config/mysql");

const index = (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM products",
    },
    _response(res)
  );
};

const view = (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM products WHERE id = ?",
      values: [req.params.id]
    },
    _response(res)
  );
};

const store = (req, res) => {
  const { name, price, stock, status, image_url } = req.body;
  connection.query(
    {
      sql: "INSERT INTO products (name, price, stock, status, image_url) VALUES (?, ?, ?, ?, ?)",
      values: [name, price, stock, status, image_url]
    },
    _response(res)
  );
};

const update = (req, res) => {
    const { name, price, stock, status, image_url } = req.body;
    const id = req.params.id;
    connection.query(
      {
        sql: "UPDATE products SET name = ?, price = ?, stock = ?, status = ?, image_url = ? WHERE id = ?",
        values: [name, price, stock, status, image_url, id]
      },
      _response(res)
    );
  };

  const remove = (req, res) => {
    const id = req.params.id;
    connection.query(
      {
        sql: "DELETE FROM products WHERE id = ?",
        values: [id]
      },
      _response(res)
    );
  };

const _response = (res) => {
  return (error, result) => {
    if (error) {
      res.send({
        status: "failed",
        response: "failed to fetch data",
      });
    } else {
      res.send({
        status: "success",
        response: result,
      });
    }
  };
};

module.exports = { index, view, store, update, remove };
