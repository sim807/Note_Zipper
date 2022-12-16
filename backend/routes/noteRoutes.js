const express = require("express");
const router = express.Router();
const {getNotes}= require('../controllers/notesController')
const {createNotes, getNotesById, updateNote,deleteNote}= require('../controllers/notesController')
const {protect} = require('../middlewares/authMiddleware')



router.route('/').get(protect,getNotes);
router.route('/create').post(protect,createNotes);
router.route('/:id').get(getNotesById).put(protect,updateNote).delete(protect,deleteNote);


module.exports = router;