const service = require('./authService');

exports.post = async function(req,res){
    try {  
        let auth = await service.post(req.body);
        res.status(200).send(auth.data);
    } catch (error) {
        if (error.code) {
            res.status(error.code).send(error.msg);
            return;
        }
        res.status(500).send(error);
    }
}