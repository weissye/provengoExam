/* @provengo summon selenium */
// 'use strict';
/* @Provengo summon rtv */
/* global bp, bp.log.info */


const URL = "http://gmail.com/"
const NUM_OF_SESSIONS = 2

for (let i = 0; i < NUM_OF_SESSIONS; i++) {
    ctx.story('Send a Mail'+i, "Mail2Send.All", function (mail) {
        with (new SeleniumSession().start(URL)) {
            user = getRandomSender()
            login({userName: user.userName, password: user.password, expectedWelcome: true})
            sleep(500)
            sendMail({to: mail.to, cc: mail.cc, subject: mail.subject, id: mail.id+'_'+Math.floor(Math.random()*1000).toString() +"_box", body: mail.body, sent: 'Sent'})
        
        }
    })
}

ctx.story('Delete a Mail', 'MailInBox.All', function (mail) {
    with (new SeleniumSession().start(URL)) {
        user = getRandomSender()
        bp.log.info("Deleting mail from "+user.userName+' '+mail.id)
        login({userName: user.userName, password: user.password, expectedWelcome: true})
        // waitFor(Any("EndOfAction").and(Any({eventName: 'SendMail'})).and(Any({from: mail.from}))   )  //Block if there is no mail to delete
        waitFor(Any("EndOfAction").and(Any({eventName: 'SendMail'}))   )  //Block if there is no mail to delete
        deleteMail({from: mail.from, subject: mail.subject, id: mail.id, body: mail.body, sent: mail.sent})
    }
})

//
// story('Send a Mail', function (user) {
//     with (new SeleniumSession().start(URL)) {
//         login({userName: "provengo6@gmail.com", password: "qazXSW22", expectedWelcome: true})
//         sendMail({to: "provengo6@gmail.com", subject: "Test #"+i, body: "Test"})
//
//     }
// })


