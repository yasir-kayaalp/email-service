require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const EmailService = require('./services/email.service');

const app = express();

// Middleware'ler
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 10000 // IP başına maksimum istek
});
app.use('/send-email', limiter);

// E-posta gönderim API'si
app.post('/send-email', async (req, res) => {
    const { email, type, data } = req.body;

    try {
        await EmailService.sendEmail(email, type, data);
        res.status(200).json({ 
            success: true, 
            message: 'E-posta başarıyla gönderildi' 
        });
    } catch (error) {
        res.status(400).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// Sunucuyu çalıştır
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
