const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {
    
    proffyValue = {
        name: "Diogo Fernandes", 
       avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
       whatsapp: "99837483", 
       bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000  pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: "Química", 
        cost: "20",

    }

    classScheduleValue = [
       {
            weekday: 1,
            time_from: 720,
            time_to: 1220
       },
       {
            weekday: 1,
            time_from: 600,
            time_to: 1300
        }
    ]

})