# PROJECT KITA Watermark

Resource NUI watermark untuk server FiveM QBox.

## ✨ Fitur

- Menampilkan watermark **PROJECT KITA**
- Posisi di bagian atas tengah layar
- Tampilan transparan
- Ukuran dan opacity dapat diatur
- Letter spacing dapat diatur
- Command `/watermark` untuk hide/show
- Tidak membutuhkan dependency QBox/QBCore/ESX
- Ringan dan menggunakan NUI

## 📦 Instalasi

1. Extract folder resource ke:

```text
resources/[standalone]/pk_namaserverk/
```

2. Tambahkan ke `server.cfg`:

```cfg
ensure pk_namaserver
```

3. Restart server atau resource:

```text
restart pk_namaserver
```

> Jika nama folder kamu `pk_namaserver`, gunakan `ensure pk_namaserver`.

## ⚙️ Konfigurasi

Buka:

```text
config.lua
```

### Nama watermark

```lua
Config.TopText = 'PROJECT KITA'
```

### Posisi

```lua
Config.Position = {
    x = 50,
    y = 5
}
```

- `x = 50` = tengah horizontal
- `y = 5` = bagian atas layar

Contoh menurunkan posisi:

```lua
Config.Position = {
    x = 50,
    y = 8
}
```

### Tampilan

```lua
Config.Enabled = true
Config.Opacity = 0.85
Config.FontSize = 28
Config.LetterSpacing = 3
```

| Pengaturan | Fungsi |
|---|---|
| `Enabled` | Aktif saat player masuk |
| `Opacity` | Transparansi watermark |
| `FontSize` | Ukuran tulisan |
| `LetterSpacing` | Jarak antar huruf |

## 🎮 Command

Untuk menyembunyikan atau menampilkan watermark:

```text
/watermark
```

## 📁 Struktur

```text
pk_namaserver/
├── fxmanifest.lua
├── config.lua
├── client.lua
└── html/
    ├── index.html
    ├── style.css
    └── script.js
```

## 🔧 Troubleshooting

### Watermark tidak muncul

Pastikan resource aktif:

```cfg
ensure pk_namaserver
```

Kemudian cek console server.

### Nama masih KOTA KITA

Pastikan `config.lua` berisi:

```lua
Config.TopText = 'PROJECT KITA'
```

Lalu restart:

```text
restart pk_namaserver
```

### Watermark terlalu transparan

Naikkan:

```lua
Config.Opacity = 0.95
```

### Watermark terlalu besar

Turunkan:

```lua
Config.FontSize = 22
```

## 📜 Credits

**PROJECT KITA ROLEPLAY**

FiveM QBox Watermark  
NUI Resource

