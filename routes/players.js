import express from 'express';

import db from '../models/playerService';

const router = express.Router();

router.post('/',(req,res) => {
    db.createPlayer(req,res);
});

router.get('/', (req, res) => {
    db.readPlayer(req, res);
 })
 
 router.get('/:id', (req,res) => {
     
     db.readPlayer(req,res);
 
 })
 
 router.delete('/:id',(req, res) => {
  
   db.deletePlayer(req, res);
 
 })

 export default router;