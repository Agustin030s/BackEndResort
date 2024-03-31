import Room from "../database/models/room";

export const getRooms = async (res, req) => {
    try {
        const rooms = await Room.find() 
        res.status(200).json(rooms);
    } catch (error) {
        console.error("Ha habido un error al listar las habitaciones:", error)
        res.status(404).json({
            mensaje: "No se pudo obtener la lista de habitaciones"
        })
    }
}

export const getRoomById =  async ( res, req) => {
    try {
        const id = req.params.id
        const searchRoom = await Room.findById(id)
        res.status(200).json(searchRoom)
    } catch (error) {
        console.error("Ha habido un error al buscar el cuarto:", error)
        res.status(404).json({
            mensaje: "No se ha encontrado la habitacion esa id"
        })
    }
}