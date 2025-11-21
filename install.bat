@echo off
echo.
echo 🍽️  Lezzetsel ERP Kurulum Basliyor...
echo.

where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js bulunamadi. Lutfen Node.js 18+ yukleyin.
    echo    Indirmek icin: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js bulundu
node -v
echo.

where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm bulunamadi. Lutfen Node.js'i duzgun yukleyin.
    pause
    exit /b 1
)

echo 📦 Bagimlilliklar yukleniyor...
echo.
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Kurulum basariyla tamamlandi!
    echo.
    echo 🚀 Baslatmak icin:
    echo    npm run dev
    echo.
    echo 📦 Production build icin:
    echo    npm run build
    echo.
    echo 👥 Demo Kullanicilar:
    echo    Yonetici    : yonetici / 123456
    echo    Proje       : proje / 123456
    echo    Satin Alma  : satin_alma / 123456
    echo    Cost        : cost / 123456
    echo.
) else (
    echo.
    echo ❌ Kurulum sirasinda hata olustu!
    echo.
)

pause
