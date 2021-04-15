const Cripto = require("../model/Cripto");

class CriptoController{
    async store(req, res) {
        try{
            if(req.params.token === '12345678'){
    
                const {Symbol} = req.body
          
                const moeda1 = await Cripto.findOne({Symbol})
          
                if (!moeda1){
                  const data = await Cripto.create(req.body);
                  return res.json(data);
                }
          
                return res.status(400).json({error: "A moeda já existe"})
                       
              }
          
              return res.status(500).json({ error: "falha na autenticação" })
        }catch(err){
            return res.status(400).json({error: err})
        }
    }
      async index(req, res) {
        if(req.params.token === '12345678'){
            const data = await Cripto.find({});
    
            return res.json(data);
        }
        return res.status(500).json({ error: "falha na autenticação" })
      }

}

module.exports = new CriptoController();