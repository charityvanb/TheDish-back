const express = require('express')
const router = express.Router()
const queries = require('../queries.js')

router.get('/', (req, res, next) => {
    queries.readAllDishes()
        .then(dishes => res.status(200).send({ dishes }))
        // .catch(err => next(err))
        .catch(next)
})

router.get('/:id', (req,res, next) => {
    console.log(req.params.id)
    if (!Number.isFinite(req.params.id)) {
        return res.status(404).send('no icon')
    }
    queries.readDishById(req.params.id).then(dishes => res.status(200).send({ dishes }))
    .catch(next)
})

 router.delete('/:id', (req, res, next) => {
     queries.deleteDishById(req.params.id).then(res.send('dish deleted'))
     .catch(next)
 })

 router.post('/', (req, res, next) => {
     queries.addDish(req.body).then(newDish => res.status(201).send({ newDish }))
     .catch(next)
 })

 router.put('/:id', (req, res, next) => {
     queries.editDish(req.params.id, req.body).then(editedDish => res.status(202).send({ editedDish }))
     .catch(next)
 })


module.exports = router