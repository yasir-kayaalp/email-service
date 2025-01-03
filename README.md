# Horiar Email Service 📧

NodeJS tabanlı email gönderim servisi. Bu servis, Horiar platformunun email ihtiyaçlarını karşılamak için tasarlanmıştır.

## 🚀 Özellikler

- 📝 Özelleştirilebilir HTML email şablonları
- 🔄 Farklı email tipleri desteği (hoş geldiniz, satın alma, fatura vb.)
- ⚡ Hızlı ve güvenilir email gönderimi
- 🛡️ Rate limiting koruması
- 📨 Gmail SMTP desteği

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Gmail hesabı (SMTP için)


## ⚙️ Kurulum

1. Repo'yu klonlayın:
```bash
git clone https://github.com/yasir-kayaalp/email-service.git
cd email-service
```

2. Bağımlılıkları yükleyin:
```bash
node install

3. Çevre değişkenlerini ayarlayın:
```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyin:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
PORT=3000
```

5. Uygulamayı başlatın:
```bash
node index.js


## 🔧 Kullanım

### Email Gönderimi

**Endpoint:** `POST /send-email`

**Headers:**
```json
{
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "email": "alici@example.com",
  "type": "purchase",
  "data": {
    "username": "Ahmet Yılmaz"
  }
}
```

### Desteklenen Email Tipleri

1. **Welcome Email** (`type: "welcome"`)
   ```json
   {
     "email": "user@example.com",
     "type": "welcome",
     "data": {
       "name": "Ahmet Yılmaz"
     }
   }
   ```

2. **Purchase Confirmation** (`type: "purchase"`)
   ```json
   {
     "email": "user@example.com",
     "type": "purchase",
     "data": {
       "username": "Ahmet Yılmaz"
     }
   }
   ```

3. **Invoice** (`type: "invoice"`)
   ```json
   {
     "email": "user@example.com",
     "type": "invoice",
     "data": {
       "name": "Ahmet Yılmaz",
       "invoiceNumber": "INV-2024-001",
       "total": "1500"
     }
   }
   ```

## 📝 Email Şablonları

Email şablonları `templates` klasöründe bulunmaktadır:
- `welcome.html`: Hoş geldiniz emaili
- `purchase.html`: Satın alma onay emaili
- `invoice.html`: Fatura emaili

## 🔒 Güvenlik

- Rate limiting ile DDoS koruması
- Güvenli SMTP bağlantısı
- Hassas bilgiler için environment variables

## 🐛 Hata Ayıklama

Yaygın hatalar ve çözümleri:

1. SMTP Authentication Error
```bash
# Gmail'de "Less secure app access" özelliğini açın
# veya App Password oluşturun
```

2. Rate Limit Error
```bash
# 15 dakika içinde çok fazla istek atıldı
# Lütfen bekleyin ve tekrar deneyin
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

Yasir Kayaalp - [@yasir-kayaalp](https://twitter.com/yasir-kayaalp)

email: [ykayaalp@horiar.com](mailto:ykayaalp@horiar.com)
