const dataBase = require("../Config/mysql")
exports.getAllimage = (req, res) => {
    dataBase.query("SELECT * FROM annonce;", (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json({ imageListe: result });
    });
  };