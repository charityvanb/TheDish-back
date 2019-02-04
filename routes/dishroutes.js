const express = require('express')
const router = express.Router()
const queries = require('../queries.js')

router.get('/', (req,res) => {
    queries.readAllDishes().then(dishes => res.status(200).send({ dishes }))
})

router.get('/:id', (req,res) => {
    queries.readDishById(req.params.id).then(dishes => res.status(200).send({ dishes }))
 })

 router.delete('/:id', (req, res) => {
     queries.deleteDishById(req.params.id).then(res.send('dish deleted'))
 })

 router.post('/', (req, res) => {
     queries.addDish(req.body).then(newDish => res.status(201).send({ newDish }))
 })

 router.put('/:id', (req, res) => {
     queries.editDish(req.params.id, req.body).then(editedDish => res.status(202).send({ editedDish }))
 })


module.exports = router