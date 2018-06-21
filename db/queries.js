const connection =require('./connection');

module.exports = {
  getAll(){
    return connection('her_soiree')
  },
  getOne(id){
    return connection('her_soiree').where('id', id).first();
  }
};
