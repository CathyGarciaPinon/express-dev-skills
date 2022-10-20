const Skill = require('../models/skill');


module.exports = {
    index,
    show
};

function show(req, res) {
    console.log('skillset', req.params.id)
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        skillset: 'Languages'
    });
}