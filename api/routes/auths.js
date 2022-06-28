import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hola, este es un endpoint")
});

router.get('/register', (req, res) => {
  res.send("Este es el register de auth")
})

export default router;