import express from 'express';


const router = express.Router();

//CREATE
router.post('/create', (req, res) => {
  res.send("Yo guardo la orden");
});
//UPDATE
router.put('/update', (req, res) => {
  res.send("Yo actualizo la orden");
});
//DELETE
router.delete('/delete/:id', (req, res) => {
  res.send("Yo elimino la orden");
});
//GET
router.get('/:id', (req, res) => {
  res.send("Yo traigo la orden");
});
//GET ALL
router.get('/', (req, res) => {
  res.send("Yo muestro todo");
});


export default router;