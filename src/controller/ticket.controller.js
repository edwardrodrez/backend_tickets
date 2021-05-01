import tickets from '../data/data.json'


//Listar Peliculas
let list = (req, res, next) => {
    try {
        res.status(200).json(
           tickets 
        )
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso" + e
        });
        next(e)
    }
}


export default{
    list
}