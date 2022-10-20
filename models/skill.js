const skills = [
    {id: 125223, skill: 'Learn HTML', done: true},
    {id: 127904, skill: 'Learn CSS', done: true},
    {id: 139608, skill: 'Learn JavaScript', done: false}
    
];

  module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
};
