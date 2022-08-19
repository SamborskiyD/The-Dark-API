
const models = require("../models");


const byId = async (Model, ids) => {

    let Char;
    if (ids.length === 1)
    {
        Char = await Model.find({id: ids[0]}, {_id: 0}).exec();
    }
    else if (ids.length > 1)
    {
        Char = await Model.find({id: {$in: ids}}, {_id: 0}).exec();
    }
    return Char;
};


const getAll = async (req, res) => {
    try
    {
        const [, name] = req.path.split("/");
        const Model = models[name];
        const Characters = await Model.find({}, {_id: 0});
        res.status(200).json(Characters);
    }
    catch(err)
    {
        res.status(404).json({message: err.message});
    }

};

const getById = async (req, res) => {
    try
    {
        const [, name] = req.path.split("/");
        const Model = models[name];
        regex = /^[0-9,]*$/g

        if (req.params)
        {
            if (regex.test(req.params.id))
            {
                let ids = req.params.id.match(/\d+/g);
                const result = await byId(Model, ids);
                res.status(200).json(result);
            }
            else
            {
                res.status(404).json({message: "Invalid request input"});
            }
        }

    }
    catch(err)
    {
        res.status(404).json({message: err.message});
    }

};


const postOneImage = async (req, res) => {
    console.log(req.file);
    const [, name] = req.path.split("/");
    const Model = models[name];
    const post = new Model({
        id: req.body.id,
        url: "/api/character/avatar/image/" + req.file.filename
      });

      post
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Handling POST requests to /image",
            createdProduct: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }

module.exports = {
    getAll,
    getById,
    postOneImage
}
