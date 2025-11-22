    # 📚 Lezzetsel ERP - Kurulum Kılavuzu

## 🎯 Hızlı Başlangıç

### Windows Kullanıcıları İçin

1. **Node.js Yükleyin**
   - https://nodejs.org/ adresine gidin
   - "LTS" versiyonunu indirin ve kurun
   - Kurulumu kontrol etmek için komut satırını açın ve yazın:
     ```
     node -v
     ```

2. **Projeyi İndirin**
   - Proje dosyalarını bilgisayarınıza çıkarın

3. **Otomatik Kurulum**
   - `install.bat` dosyasına çift tıklayın
   - Kurulum otomatik olarak tamamlanacaktır

4. **Uygulamayı Başlatın**
   - Komut satırını açın (cmd veya PowerShell)
   - Proje klasörüne gidin
   - Şu komutu çalıştırın:
     ```
     npm run dev
     ```
   - Tarayıcınızda otomatik olarak açılacaktır: http://localhost:3000

### Mac/Linux Kullanıcıları İçin

1. **Node.js Yükleyin**
   - https://nodejs.org/ adresine gidin
   - "LTS" versiyonunu indirin ve kurun
   - Kurulumu kontrol etmek için terminali açın ve yazın:
     ```bash
     node -v
     ```

2. **Projeyi İndirin**
   - Proje dosyalarını bilgisayarınıza çıkarın

3. **Otomatik Kurulum**
   - Terminali açın
   - Proje klasörüne gidin
   - Şu komutu çalıştırın:
     ```bash
     chmod +x install.sh
     ./install.sh
     ```

4. **Uygulamayı Başlatın**
   ```bash
   npm run dev
   ```
   - Tarayıcınızda otomatik olarak açılacaktır: http://localhost:3000

## 📋 Manuel Kurulum

Eğer otomatik kurulum çalışmazsa:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```

## 🔐 Giriş Bilgileri

Uygulama açıldığında şu kullanıcılardan biriyle giriş yapabilirsiniz:

### 1. Yönetici (Tam Erişim)
- **Kullanıcı Adı**: `yonetici`
- **Şifre**: `123456`
- **Yetki**: Tüm sayfalara erişim

### 2. Proje Yöneticisi
- **Kullanıcı Adı**: `proje`
- **Şifre**: `123456`
- **Yetki**: 
  - Üretim Planı ✅
  - Satın Alma ✅
  - Depo ✅
  - Reçeteler ✅
  - Aylık Menü ✅
  - Müşteriler ✅
  - Tedarikçiler (Sadece Görüntüleme) 👁️
  - Siparişler ❌
  - Cost Kontrol ❌

### 3. Satın Alma Sorumlusu
- **Kullanıcı Adı**: `satin_alma`
- **Şifre**: `123456`
- **Yetki**:
  - Satın Alma ✅
  - Depo ✅
  - Reçeteler ✅
  - Tedarikçiler ✅

### 4. Cost Kontrol Sorumlusu
- **Kullanıcı Adı**: `cost`
- **Şifre**: `123456`
- **Yetki**:
  - Üretim Planı ✅
  - Cost Kontrol ✅
  - Depo ✅
  - Reçeteler ✅
  - Aylık Menü ✅

## 🚀 Önemli Komutlar

### Geliştirme Modu
```bash
npm run dev
```
- Uygulamayı geliştirme modunda başlatır
- Değişiklikleri otomatik yükler
- Port: 3000

### Production Build
```bash
npm run build
```
- Uygulamayı production için derler
- Optimize edilmiş dosyalar `dist` klasöründe oluşur

### Production Preview
```bash
npm run preview
```
- Build edilmiş uygulamayı test etmek için

## ❓ Sık Karşılaşılan Sorunlar

### "npm komutu tanınmıyor" hatası
**Çözüm**: Node.js düzgün kurulmamış. Node.js'i yeniden yükleyin ve kurulum sırasında "Add to PATH" seçeneğini işaretleyin.

### Port 3000 kullanımda hatası
**Çözüm**: Farklı bir port kullanın:
```bash
npm run dev -- --port 3001
```

### Bağımlılık yükleme hatası
**Çözüm**: node_modules klasörünü silin ve tekrar yükleyin:
```bash
rm -rf node_modules
npm install
```

### Beyaz ekran sorunu
**Çözüm**: 
1. Tarayıcı konsolunu açın (F12)
2. Hata mesajını kontrol edin
3. Tarayıcı önbelleğini temizleyin (Ctrl+Shift+Delete)

## 📁 Dosya Yapısı

```
lezzetsel-erp/
├── 📁 src/                  # Kaynak kodlar
│   ├── App.jsx              # Ana uygulama
│   ├── main.jsx             # Giriş noktası
│   └── index.css            # Stiller
├── 📁 public/               # Statik dosyalar
├── 📄 index.html            # Ana HTML
├── 📄 package.json          # Bağımlılıklar
├── 📄 vite.config.js        # Vite ayarları
├── 📄 tailwind.config.js    # Tailwind ayarları
├── 📄 README.md             # Dokümantasyon (İngilizce)
├── 📄 KURULUM_KILAVUZU.md   # Bu dosya
├── 🔧 install.sh            # Linux/Mac kurulum
└── 🔧 install.bat           # Windows kurulum
```

## 💡 İpuçları

1. **İlk Giriş**: `yonetici` / `123456` ile giriş yapın ve sistemi keşfedin

2. **Veri Saklama**: 
   - Tüm veriler **otomatik olarak** tarayıcınızın localStorage'ında saklanır
   - Eklediğiniz/düzenlediğiniz veriler **anında kaydedilir**
   - Sayfa yenilediğinizde verileriniz **kaybolmaz**
   - Giriş bilginiz saklanır, **tekrar giriş yapmanız gerekmez**
   - ⚠️ Sadece tarayıcı önbelleğini temizlerseniz veriler kaybolur
   - 💡 Önemli verilerinizi Excel'e aktararak yedekleyin

3. **Çıkış**: Sağ üstteki kırmızı "Çıkış Yap" butonuna tıklayın

4. **Rol Değiştirme**: Çıkış yapıp farklı bir kullanıcıyla giriş yaparak farklı yetkileri test edebilirsiniz

5. **Excel Export**: Tablolardaki verileri Excel'e aktarmak için "Excel İndir" butonlarını kullanın

## 🔒 Güvenlik Notları

⚠️ **ÖNEMLİ**: Bu sistem demo amaçlıdır. Gerçek kullanım için:

- Backend API entegrasyonu yapılmalı
- Şifreler hash'lenmeli
- HTTPS kullanılmalı
- Güvenlik testleri yapılmalı
- Gerçek veritabanı kullanılmalı

## 📞 Destek

Sorun yaşarsanız:
1. README.md dosyasını okuyun
2. Bu kılavuzdaki "Sık Karşılaşılan Sorunlar" bölümünü kontrol edin
3. Hata mesajını not alın ve destek ekibiyle paylaşın

## 🎉 Başarılar!

Artık Lezzetsel ERP sisteminiz hazır! İyi çalışmalar dileriz! 🍽️✨

    
