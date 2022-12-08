const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();

const RACE = ['Human','Elf','Machine','Demon','Animal','Other']
module.exports = router;

router.post('/', async (req, res) => { //esta implicito a character
    const { name, hp, mana, code } = req.body
    try{
        if (!name || !hp || !mana || !code)
            return res.status(404).send('Falta enviar datos obligatorios')
        
        const newCharacter = await Character.create(req.body)
        res.status(201).send(newCharacter)
    }catch(error){
        res.status(404).send('Error en alguno de los datos provistos')
    }

    // try {
    //     return res.json({ cat: controller.addCat(name)})
    // } catch (error) {
    //     return res.status(400).json({ error: error.message })
    // }
});
router.get('/', async (req,res) => {
    const {race,name,hp,age} = req.query // req.query {race: 'hola'}
    let respuesta 
    if(race && age && RACE.includes(race)){
        respuesta = await Character.findAll({where: {
            race, age
            }
        })
    } 
    else if(race && RACE.includes(race)){
        respuesta = await Character.findAll({where: {
            race,
            }
        })
    } else if(name && hp){
        respuesta = await Character.findAll({attributes: ['name','hp']
        })
    }else{
        respuesta = await Character.findAll()
        
    }
    if(respuesta.length < 1) return res.status(404).json({ msg:'Not Found'})

    res.json(respuesta)
})

router.get('/:code', async (req,res) =>{
 const {code} = req.params
 let respuesta
 if(code){
    if(code==='young'){
        respuesta = await Character.findAll({where: {
            age:{
                [Op.lt]:25
            }
            } 
        })
    }
    else
        [respuesta] = await Character.findAll({where: {
                            code,
                            } 
                        })
}
if(respuesta === undefined){
    // const msg = `El código ${code} no corresponde a un personaje existente`
    //msg = 'El código ' + code + ' no corresponde a un personaje existente'
    return res.status(404).send(`El código ${code} no corresponde a un personaje existente`)
} 
res.json(respuesta)
});

router.put('/:attribute', async(req,res) => {
    try{
        const {attribute} = req.params
        const {value} = req.query
       await Character.update(
            {[attribute]: value},
            {where : {[attribute]: null }}
        )
        res.send('Personajes actualizados')
    }catch(error){
        return res.status(404).json({error:error.message})
    }
})

// router.get('/young', async (req,res) =>{
//     const {code} = req.params
//     let respuesta
//     if(code){
//        [respuesta] = await Character.findAll({where: {
//            code,
//            } 
//        })
//    }
//    if(respuesta === undefined){
//        // const msg = `El código ${code} no corresponde a un personaje existente`
//        //msg = 'El código ' + code + ' no corresponde a un personaje existente'
//        return res.status(404).send(`El código ${code} no corresponde a un personaje existente`)
//    } 
//    res.json(respuesta)
//    });