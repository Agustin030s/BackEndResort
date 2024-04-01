import Room from "../database/models/room.js";

export const getRooms = async (res, req) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Ha habido un error al listar las habitaciones:", error);
    res.status(404).json({
      mensaje: "No se pudo obtener la lista de habitaciones",
    });
  }
};

export const getRoomById = async (res, req) => {
  try {
    const id = req.params.id;
    const searchRoom = await Room.findById(id);
    res.status(200).json(searchRoom);
  } catch (error) {
    console.error("Ha habido un error al buscar el cuarto:", error);
    res.status(404).json({
      mensaje: "No se ha encontrado la habitacion esa id",
    });
  }
};

export const editRoom = async (res, req) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const searchedRoom = await Room.findById(id);
    if (!searchedRoom) {
      return res.status(404).json({
        message: "No se encontro la habitacion buscada",
      });
    }
    await Room.findByIdAndUpdate(id, body);
    res
      .status(200)
      .json({ message: "La habitacion fue modificada correctamente" });
  } catch (error) {
    console.error(
      `El siquiente error ocurrio al intentar modificar la habitacion: ${error}`
    );
    res.status(404).json({
      mensaje: "Ocurrio un error al intentar modificar la habitacion",
    });
  }
};
