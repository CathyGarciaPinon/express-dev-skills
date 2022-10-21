const skills = [
    {id: 125223, skill: 'Learn HTML', done: true},
    {id: 127904, skill: 'Learn CSS', done: true},
    {id: 139608, skill: 'Learn JavaScript', done: false}
    
];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  

function create(skill) {
    //add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
};
