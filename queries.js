const db = require("./database-connection");

module.exports = {
    readAllDishes(){
        return db.select().from('dishes')
    },
    readDishById(id) {
        return db('dishes').where('id', id).first()
    },
    deleteDishById(id) {
        return db('dishes').where('id', id).delete().returning('*')
    },
    addDish(newMovie) {
        return db('dishes').insert(newDish).returning('*')
    },
    editDish(id, body) {
        return db('dishes').where('id', id).update(body).returning('*')
    }
}