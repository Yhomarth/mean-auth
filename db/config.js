const  mongoose  = require('mongoose');


const dbConection = async () => {
    try{
        await mongoose.connect(process.env.BD_CNN, {
            
        });

        console.log('BD Online!');

    }
    catch(error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la base de datos');
    }
}


module.exports = {
    dbConection
}