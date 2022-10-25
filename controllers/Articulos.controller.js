const Articulos = require("../models/Articulos.model");

const Articulo = {
  list: async (req, res) => {
    const sort = { createtime: 1 };
    const articulos = await Articulos.find().sort(sort);
    res.status(200).send(articulos);
  },
  create: async (req, res) => {
    const post = new Articulos(req.body);
    await post.save();
    res.status(201).send("se creo el post!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const post = await Articulos.findOne({ _id: id });
    Object.assign(post, req.body);
    await post.save();
    res.sendStatus(204);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const post = await Articulos.findOne({ _id: id });
    await post.remove();
    res.status(204).send("Se elimino correctamente");
  },
  find: async (req,res) => {
    const { id } = req.params
    const result = await Articulos.findOne({_id: id})
    if(result){
      res.send(result)
    }else{
      req.send("Error")
    }
  }
};


module.exports = Articulo;