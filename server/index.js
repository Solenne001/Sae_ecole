 const path = require('path'); // Ajoutez cette ligne pour importer le module path
const cors = require("cors");
const express = require("express");
const app = express();
const userRt = require("./Routes/usersRoute");
const imgR = require("./Routes/imageRoute")
const tempRt= require("./Routes/tempRoute")
const noteRt= require('./Routes/noteRoute')
const financeRt= require("./Routes/financeRoute")
const multer = require("multer"); // Ajout de l'import pour Multer
const http = require("http");
const { Server } = require("socket.io");

  
app.use(cors());
app.use(express.json());




// Configuration de Multer pour l'upload d'images
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // Dossier où les images seront stockées
    callback(null, 'file');
  },
  filename: function (req, file, callback) {
    // Nom du fichier (peut être personnalisé)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use("/users", userRt);
app.use("/img", imgR)
app.use("/temp", tempRt)
app.use("/note", noteRt)
app.use("/finance", financeRt)

const server = http.createServer(app)
const io = new Server(server,{
    cors:{origin:" http://192.168.0.106:3000", methods:["GET","POST"]}
})

io.on("connection",(socket)=>{
    console.log(`utilisateur connecté avec id:${socket.id}`);
    socket.on("join_room", (data)=>{
        console.log(`utilisateur veut joindre la room${data}`);
        socket.join(data)
    })
    socket.on("send_message", (data)=>{
        console.log(data);
        socket.to(data.idRoom).emit("receive_message", data)
    })
    socket.on("disconnect", ()=>{
        console.log(`utilisateur avec id:${socket.id} est deconnecte`);
    })
})

const port = 5000; 
server.listen(port, () => {
    console.log(`Connecté au serveur ${port}`); 
});
