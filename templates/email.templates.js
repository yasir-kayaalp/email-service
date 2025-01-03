const fs = require('fs');
const path = require('path');

// HTML şablonlarını oku burada dizindek html'i okuyoruz
const purchaseTemplate = fs.readFileSync(
    path.join(__dirname, 'purchase-turkish.html'), 
    'utf8'
);

const templates = {
    welcome: (data) => ({
        subject: 'Hoş Geldiniz!',
        message: `Merhaba, ${data.name}! Awesome Website'a hoşgeldiniz.`
    }),
    
    invoice: (data) => ({
        subject: `Faturanız: ${data.invoiceNumber}`,
        message: `Sayın ${data.name},\nFaturanız aşağıda bulunmaktadır:\n\nFatura Numarası: ${data.invoiceNumber}\nToplam: ${data.total} TL\n\nTeşekkür ederiz.`
    }),

    purchase: (data) => ({
        subject: 'Awesome Website - Satın Alımınız İçin Teşekkür Ederiz!',
        message: purchaseTemplate.replace('{{username}}', data.username)
    })
};

module.exports = templates; 