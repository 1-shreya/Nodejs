const mongoose = require("mongoose");
async function connection() {
  var ans = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.tr8jqou.mongodb.net/sample"
  );
// console.log(ans); 
}
module.exports=connection