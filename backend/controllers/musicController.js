// controllers/musicController.js
const Music = require('../models/music');

// Obtener todas las canciones
exports.getMusic = (req, res) => {
  Music.find()
    .then((music) => {
      res.json(music);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Obtener una canción por su ID
exports.getMusicById = (req, res) => {
  Music.findById(req.params.id)
    .then((song) => {
      if (!song) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }
      res.json(song);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Subir una nueva canción
exports.uploadMusic = (req, res) => {
  const { title } = req.body;
  const image = req.file ? req.file.filename : ''; // Error en esta línea
  const audio = req.file ? req.file.filename : '';
  const newMusic = new Music({
    title: title,
    image: image,
    audio: audio,
    // Otros campos que desees para tu modelo de música
  });

  newMusic.save()
    .then((song) => {
      res.status(201).json(song);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Actualizar una canción existente
exports.updateMusic = (req, res) => {
  Music.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((song) => {
      if (!song) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }
      res.json(song);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Eliminar una canción existente
exports.deleteMusic = (req, res) => {
  Music.findByIdAndDelete(req.params.id)
    .then((song) => {
      if (!song) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }
      res.json({ message: 'Canción eliminada correctamente' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
