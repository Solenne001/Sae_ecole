const dataBase = require("../Config/mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.signup= (req, res)=>{
  console.log(req.body);
  let insertUser= "INSERT INTO utilisateur(nom_users, prenom_users, email_users, pwd_users, sexe_users) VALUES (?,?,?,?,?)"

  bcrypt
  .hash(req.body.Password, 5)
  .then((hash)=>{
      dataBase.query(
          insertUser,
      [req.body.Nom,req.body.Prenom,req.body.Email,hash, req.body.Sexe],
      (error, result)=>{
          if (error) {
              res.status(401).json(error)
          }
           res.status(201).json({hash, id: result.insertId})
      }
      )
  })

  .catch((error)=>{
      res.status(500).json(error)
  })
}

exports.login= (req, res)=>{
  console.log(req.body);

  let selectQueryUser= "SELECT * FROM utilisateur WHERE email_users = ?"
  dataBase.query(selectQueryUser, [req.body.Email], 
    (error, result)=>{
      if (error) {
        res.status(500).json(error)
      }
      if (result.length > 0) {
        bcrypt
        .compare(req.body.Password, result[0].pwd_users)
        .then((valid)=>{
          if (valid) {
            let accessToken= jwt.sign({users_id: result[0].id_users},
              "solenne",
              {expiresIn: "5s"});
              res.status(201).json(accessToken)
          }else{
            res.status(401).json("password est incorrect")
          }
        })
      }else{
        res.status(401).json("user not found")
      }
    })
}
