const connection =require('./connection');

module.exports = {
  getAll(){
    return connection('her_soiree')
  },
  getOne(id){
    return connection('her_soiree').where('id', id).first();
  },
  create(her_soiree){
    return connection('her_soiree').insert(her_soiree, 'id').then(ids =>{
      return ids[0];
    });
  }
};
