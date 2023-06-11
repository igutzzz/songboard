const Song = require('../models/songModel')
const mongoose = require('mongoose')

//GET all songs
const getSongs = async(req, res) => {
    const songs = await Song.find({}).sort({createdAt: -1})

    res.status(200).json(songs)
}

//GET a single song
const getSong = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such song for this ID."})
    }

    const song = await Song.findById(id)
    if(!song) {
        res.status(404).json({"error": "No such song for this ID."})
    } else {
        res.status(200).json(song)
    }
}


//POST a song
const createSong = async (req, res) => {
    try{
        const {title, description, lyrics, chords} = req.body
        const song = await Song.create({title, description, lyrics, chords})
        res.status(200).json(song)
    } catch(error){
        res.status(400).json({"message": error.message})
    }
}

//DELETE a song
const deleteSong = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such song for this ID."})
    }
    
    const song = await Song.findOneAndDelete({_id: id})
    if(!song) {
        res.status(404).json({"error": "No such song for this ID."})
    } else {
        res.status(200).json(song)
    }
}

//UPDATE a song
const updateSong = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such song for this ID."})
    }
    
    const song = await Song.findOneAndUpdate({_id: id}, {
        ...req.body
    }) 
    if(!song) {
        res.status(404).json({"error": "No such song for this ID."})
    } else {
        res.status(200).json(song)
    }
}

module.exports ={
    getSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong
}