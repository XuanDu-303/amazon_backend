const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode: 'sandbox', // Hoặc 'live' nếu bạn đã sẵn sàng để sản xuất
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET
});

module.exports = paypal;
