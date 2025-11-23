const mongoose= require('mongoose');
async function connectToMoongo(url){
    return mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports= connectToMoongo;