const keys = require('../config/keys');
const stripe = require('stripe')(keys.StripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

  // Stripe integration and charge, survey purchase
  app.post('/api/stripe', requireLogin, async (req, res) => {
    
    const charge = await stripe.charges.create({
        amount: 500,
        currency: "aud",
        description: "Emaily - $5 for 5 credits",
        source: req.body.id
    }).catch(err => console.log(err.message));

    console.log(charge);

    req.user.credits += 5;
    const user = await req.user.save();//.catch(err => console.log(err.message));
    res.send(user);
  });
};