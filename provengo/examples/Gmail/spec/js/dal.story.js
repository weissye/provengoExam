/* global bp */

/* @provengo summon context */


// function getRandomProduct() {
//     let products = ctx.runQuery("Product.All")
//     return products[choose(Object.keys(products))]
// }
function getRandomMail() {
    let products = ctx.runQuery("Mail2Send.All")
    return MailToSend[choose(Object.keys(MailToSend))]
}

//////////////////////////////////////////////////////////////////////////////////////////////////

ctx.registerQuery("Mail2Send.All", entity => { return entity.type.equals("MailToSend") })
ctx.registerQuery("Mail2Send.NonSent", entity => { return (entity.type.equals("MailToSend") && entity.sent == ' ') })
ctx.registerQuery("Mail2Send.Sent", entity => { return (entity.type.equals("MailToSend") && entity.sent == 'Sent') })

ctx.registerQuery("MailInBox.All", entity => entity.type.equals("MailInBox"))
ctx.registerQuery("Mail.BoxEmpty", entity => { return (entity.type.equals("MailInBox") == false) })
ctx.registerQuery("Mail.BoxNonEmpty", entity => { return (entity.type.equals("MailInBox") == true) })

//------------------------------------------------------------------------------------------------


// ctx.registerQuery("User.All", entity => entity.type.equals("User"))
// ctx.registerQuery("User.Admin", entity => entity.type.equals("Admin"))
//
// ctx.registerQuery("User.EmptyCart", entity => {
//     return (entity.type.equals("User") && entity.cart.length == 0)
// })
//
// ctx.registerQuery("User.NonEmptyCart", entity => {
//     return (entity.type.equals("User") && entity.cart.length != 0)
// })
//

//////////////////////////////////////////////////////////////////////////////////////////////////

// ctx.registerEffect("CheckOut", function (e) {
//     let user = ctx.getEntityById(e.user.username)
//
//     user.checkingOut = true;
// })
//
// ctx.registerEffect("ChangeProductPrice", function (e) {
//     let product = ctx.getEntityById(e.product.product)
//
//     product.price = '"$'+e.product.newPrice+'.00"';
// })
ctx.registerEffect("SendMail", function (e) {
    ctx.insertEntity(ctx.Entity(e.id, 'MailInBox', {from: e.to, subject: e.subject, body: e.body, sent: e.sent}))
})


ctx.registerEffect("EndOfAction", function (e) {
    if (e.eventName == "DeleteMail") {
        let mail = ctx.getEntityById(e.id);
        ctx.removeEntity(mail.id)
    } else if (e.eventName == "SendMail") {
        let mail = ctx.getEntityById(e.id);
        mail.sent = 'Sent'
    }

})


ctx.populateContext([
    //Mail Accounts
    ctx.Entity('provengo6', 'User', {userName: 'provengo6@gmail.com', password: 'qazXSW22'}),
    // ctx.Entity('provengo7', 'User', {userName: 'provengo7@gmail.com', password: 'qazXSW22'}),
    // ctx.Entity('provengo9', 'User', {userName: 'provengo9@gmail.com', password: 'qazXSW22'}),

    // Mail to send
    ctx.Entity('Mail1', 'MailToSend', {to: 'provengo9@gmail.com', cc: 'provengo7@gmail.com', bcc: ' ', subject: 'Test #1', body: 'Test #1', sent: ' '}),
    // ctx.Entity('Mail2', 'MailToSend', {to: 'provengo7@gmail.com', cc: 'provengo6@gmail.com', bcc: ' ', subject: 'Test #2', body: 'Test #2', sent: ' '}),
    // ctx.Entity('Mail3', 'MailToSend', {to: 'provengo6@gmail.com', subject: 'Test #3', body: 'Test #3', sent: ' '}),
    
    
])


