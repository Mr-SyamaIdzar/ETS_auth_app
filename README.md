⚙️ Instalasi dan Menjalankan
Ikuti langkah-langkah berikut untuk meng-clone dan menjalankan proyek secara lokal.

1. Kloning Repositori
Bash

# Ganti <nama-repo> dengan nama repositori atau folder proyek Anda
git clone <nama-repo>
cd <nama-repo>
2. Instal Dependensi
Instal semua paket yang diperlukan:

Bash

npm install
# atau
yarn install
3. Konfigurasi Lingkungan (.env)
Buat file bernama .env di root directory dan atur variabel koneksi database serta secret JWT Anda:

Cuplikan kode

# Koneksi Database
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"

# Secret untuk JWT
JWT_SECRET="ganti_dengan_secret_yang_kuat"
PORT=3000
4. Setup Database
Jalankan migrasi Prisma untuk membuat tabel-tabel di database Anda:

Bash

npx prisma migrate dev --name init
5. Menjalankan Server
Mulai server pengembangan:

Bash

npm run dev
# atau
node src/app.js
Server akan berjalan di http://localhost:3000.
