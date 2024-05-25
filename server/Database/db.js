import mongoose from 'mongoose';


const connection = async (username, password) => {
  const password1 = encodeURIComponent("Satwik@8899");

  const URL = `mongodb://satwikbaghel8899:${password1}@ac-klfq64r-shard-00-00.2yjs5ay.mongodb.net:27017,ac-klfq64r-shard-00-01.2yjs5ay.mongodb.net:27017,ac-klfq64r-shard-00-02.2yjs5ay.mongodb.net:27017/?ssl=true&replicaSet=atlas-121o0a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=crud-app`;

  try{
     await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
     console.log("Database Connected successfully");
  } catch (error){
    console.log("Error while connecting database", error.message);
  }
}

export default connection;