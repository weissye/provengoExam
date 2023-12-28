/* @provengo summon selenium */
// 'use strict';
/* @Provengo summon rtv */
/* global bp, bp.log.info */


const URL = "http://gmail.com/"
const NUM_OF_SESSIONS = 2

for (let i = 0; i < NUM_OF_SESSIONS; i++) {
    ctx.story('Send a Mail'+i, "Mail2Send.All", function (mail) {
        with (new SeleniumSession().start(URL)) {
            login({userName: "provengo6@gmail.com", password: "qazXSW22", expectedWelcome: true})
            sleep(500)
            sendMail({to: mail.to, subject: mail.subject, id: mail.id+'_'+Math.floor(Math.random()*1000).toString() +"_box", body: mail.body, sent: 'Sent'})
        
        }
    })
}

// ctx.story('Delete a Mail', 'MailInBox.All', function (mail) {
//     with (new SeleniumSession().start(URL)) {
//         login({userName: "provengo6@gmail.com", password: "qazXSW22", expectedWelcome: true})
//         waitFor(Any("EndOfAction").and(Any({eventName: 'SendMail'})).and(Any({to: "provengo6@gmail.com"}))   )  //Block if there is no mail to delete
//         // deleteMail({from: mail.from, subject: mail.subject, id: mail.id, body: mail.body, sent: mail.sent})
//     }
// })

//
// story('Send a Mail', function (user) {
//     with (new SeleniumSession().start(URL)) {
//         login({userName: "provengo6@gmail.com", password: "qazXSW22", expectedWelcome: true})
//         sendMail({to: "provengo6@gmail.com", subject: "Test #"+i, body: "Test"})
//
//     }
// })


