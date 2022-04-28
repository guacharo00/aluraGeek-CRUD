const { response } = require("express");

const usersGet = (req, res = response) => {
  const params = req.query;

  res.json({
    msg: "Get API - Controller",
    params,
  });
};

const usersPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "Post API - Controller",
    body,
  });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "Put API - Controller",
    id,
  });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: "Delete API - Controller" });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
