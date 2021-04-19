const Cripto = require("../model/Cripto");
const fetch = require("node-fetch")


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

      async blockheigh(req, res){
        if(req.params.token === '12345678'){
          const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          }
            const response = await fetch("https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=BTC&api_key=1027067751f1e7c5709737819ba5e9f2d04b8de1419453d40d35c829aaa15314", requestOptions)
            var jsonObj = await response.json()
            console.log(jsonObj.Data.Data)
            const array = []
            const arrayn = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28]

            function imprimir(item) {
              console.log(item);
              array.push(jsonObj.Data.Data[item].block_height)
            }

            arrayn.forEach(imprimir);
            return res.json(array)
          }
          return res.status(500).json({error: "falha na autenticação"})
        }
        
  }


module.exports = new CriptoController();