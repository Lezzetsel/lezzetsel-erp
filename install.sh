#!/bin/bash

echo "🍽️  Lezzetsel ERP Kurulum Başlıyor..."
echo ""

# Node.js versiyonunu kontrol et
if ! command -v node &> /dev/null
then
    echo "❌ Node.js bulunamadı. Lütfen Node.js 18+ yükleyin."
    echo "   İndirmek için: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js versiyonunuz çok eski. En az v18 gereklidir."
    echo "   Mevcut versiyon: $(node -v)"
    echo "   İndirmek için: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) bulundu"
echo ""

# npm varsa kontrol et
if command -v npm &> /dev/null
then
    echo "📦 npm ile bağımlılıklar yükleniyor..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Kurulum başarıyla tamamlandı!"
        echo ""
        echo "🚀 Başlatmak için:"
        echo "   npm run dev"
        echo ""
        echo "📦 Production build için:"
        echo "   npm run build"
        echo ""
        echo "👥 Demo Kullanıcılar:"
        echo "   Yönetici    : yonetici / 123456"
        echo "   Proje       : proje / 123456"
        echo "   Satın Alma  : satin_alma / 123456"
        echo "   Cost        : cost / 123456"
    else
        echo "❌ Kurulum sırasında hata oluştu!"
        exit 1
    fi
else
    echo "❌ npm bulunamadı. Lütfen Node.js'i düzgün yükleyin."
    exit 1
fi
