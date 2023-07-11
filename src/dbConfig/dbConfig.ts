import mongoose, { connection } from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection

        connection.on('connected', () =>{
            console.log('DB connected successfully')
        })

        connection.on('error', (err)=>{
            console.log('DD connection error');
            process.exit();
        })
    }catch(error){
        console.log(error)
    }
}