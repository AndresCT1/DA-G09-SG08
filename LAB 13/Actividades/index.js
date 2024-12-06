var admin = require("firebase-admin");
var serviceAccount = require("./nuevoproyecto.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: "https://proyectoinicio-86622-default-rtdb.firebaseio.com"
  databaseURL: "https://nuevoproyecto-6b079-default-rtdb.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");

usersRef.set({
  usuarios: {
    name: "carlos reyes",
    age: 28,
    salary: 2304.54
  }
});

