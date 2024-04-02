import Room from "../database/models/room.js";

export const createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);

    await newRoom.save();
    res.status(201).json({
      mensaje: "Habitación creada con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Ocurrio un error al crear la habitación",
    });
  }
};

export const getRooms = async (req, res) => {
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

export const getRoomById = async (req, res) => {
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
