const Sequelize = require('sequelize');
const options = {logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:quizzes.sqlite", options);

sequelize.define(
    'quiz',
    {question : {
            type: Sequelize.STRING,
            unique: {msg: "Quiz already exists"}
        },
        answer: Sequelize.STRING
    }
);

sequelize.sync()
    .then(()=>sequelize.models.quiz.count())
.then(count => {
    if(count === 0){

    return sequelize.models.quiz.bulkCreate([
        {question: 'Capital of Spain', answer: 'Madrid'},
        {question: 'Capital of Taiwan', answer: 'Taipei'},
        {question: 'Capital of Korea', answer: 'Seoul'}
    ])
        .then(()=>console.log(`DB Exists: ${count} elements`))

}
})
.catch(err => console.log((` ${err}`)));

module.exports=sequelize;