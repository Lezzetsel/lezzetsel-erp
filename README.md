    # 🍽️ Lezzetsel ERP - Yemek Şirketi Yönetim Sistemi

Modern ve kullanıcı dostu ERP sistemi. React + Vite + Tailwind CSS ile geliştirilmiştir.

## 📋 Özellikler

### 🔐 Kullanıcı Sistemi
- 4 farklı rol (Yönetici, Proje, Satın Alma, Cost)
- Rol bazlı sayfa erişimi
- Güvenli giriş/çıkış sistemi

### 📊 Modüller
- **Anasayfa**: Genel istatistikler ve özet bilgiler
- **Üretim Planı**: Müşteri siparişleri ve malzeme ihtiyaç analizi
- **Siparişler**: Sipariş oluşturma ve onay süreci
- **Cost Kontrol**: Fatura yükleme ve maliyet karşılaştırma
- **Satın Alma**: Tedarikçi siparişleri
- **Depo**: Stok yönetimi ve envanter takibi
- **Reçeteler**: Yemek tarifleri ve maliyet hesaplama
- **Aylık Menü**: Aylık menü planlama
- **Müşteriler**: Müşteri yönetimi
- **Tedarikçiler**: Tedarikçi yönetimi

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

veya

```bash
yarn install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

veya

```bash
yarn dev
```

Uygulama otomatik olarak tarayıcıda açılacaktır: http://localhost:3000

### 3. Production Build

```bash
npm run build
```

veya

```bash
yarn build
```

Build dosyaları `dist` klasöründe oluşturulacaktır.

## 👥 Demo Kullanıcılar

### Yönetici (Tüm Erişim)
- **Kullanıcı Adı**: `yonetici`
- **Şifre**: `123456`
- **Erişim**: Tüm sayfalara tam erişim

### Proje Paneli
- **Kullanıcı Adı**: `proje`
- **Şifre**: `123456`
- **Erişim**: 
  - ✅ Anasayfa, Üretim Planı, Satın Alma, Depo, Reçeteler, Aylık Menü, Müşteriler
  - 👁️ Tedarikçiler (sadece görüntüleme)
  - ❌ Siparişler, Cost Kontrol

### Satın Alma Paneli
- **Kullanıcı Adı**: `satin_alma`
- **Şifre**: `123456`
- **Erişim**: 
  - ✅ Anasayfa, Satın Alma, Depo, Reçeteler, Tedarikçiler
  - ❌ Siparişler, Cost Kontrol, Müşteriler, Üretim Planı, Aylık Menü

### Cost Paneli
- **Kullanıcı Adı**: `cost`
- **Şifre**: `123456`
- **Erişim**: 
  - ✅ Anasayfa, Üretim Planı, Cost Kontrol, Depo, Reçeteler, Aylık Menü
  - ❌ Siparişler, Satın Alma, Müşteriler, Tedarikçiler

## 📁 Proje Yapısı

```
lezzetsel-erp/
├── src/
│   ├── App.jsx          # Ana uygulama komponenti
│   ├── main.jsx         # Giriş noktası
│   └── index.css        # Global CSS (Tailwind)
├── public/              # Statik dosyalar
├── index.html           # HTML şablonu
├── package.json         # Bağımlılıklar
├── vite.config.js       # Vite yapılandırması
├── tailwind.config.js   # Tailwind yapılandırması
├── postcss.config.js    # PostCSS yapılandırması
└── README.md            # Bu dosya
```

## 🛠️ Teknolojiler

- **React 18**: UI framework
- **Vite**: Build tool ve dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: İkonlar
- **LocalStorage**: Veri saklama (demo amaçlı)

## 📝 Notlar

- **Veri Saklama**: Tüm veriler tarayıcının localStorage'ında otomatik olarak saklanır
  - Kullanıcı girişi kalıcıdır (sayfa yenilendiğinde çıkış yapmaz)
  - Eklenen/düzenlenen veriler otomatik kaydedilir
  - Tarayıcı önbelleği temizlenirse veriler kaybolur
- **Veri Yedekleme**: Önemli verileri düzenli olarak Excel'e aktarın
- Production ortamında gerçek bir backend API entegrasyonu yapılmalıdır
- Şifreler şu an demo amaçlıdır, production'da hash'lenmelidir

## 🔒 Güvenlik

Bu demo bir prototype'tır. Production ortamı için:
- Backend API entegrasyonu yapılmalı
- JWT veya OAuth2 gibi güvenli authentication kullanılmalı
- Şifreler hash'lenmeli (bcrypt)
- HTTPS kullanılmalı
- Input validasyonu yapılmalı
- SQL injection ve XSS saldırılarına karşı önlemler alınmalı

## 📞 Destek

Herhangi bir sorun veya öneriniz için lütfen iletişime geçin.

## 📄 Lisans

Bu proje özel kullanım içindir.

---

**Geliştirici**: Lezzetsel Yemek ERP Ekibi
**Versiyon**: 1.0.0
**Tarih**: 2024

    
