# Kat Kat Zengin – tanıtım sitesi

Statik site (HTML + CSS, JS yok). GitHub Pages ile yayınlanır: https://ismetaltnbas.github.io/katkatzengin/

## Sayfalar
- `index.html` – tanıtım, özellikler, görseller, SSS (FAQPage + VideoGame yapılandırılmış verisi)
- `kilavuz.html` – kullanım kılavuzu (HowTo + Breadcrumb)
- `videolar.html` – tanıtım videoları
- `gizlilik.html` – gizlilik politikası (mağazalar için gerekli)

## Video eklemek
YouTube'a yükledikten sonra `videolar.html` içindeki ilgili kartta
`<div class="frame" …>…</div>` satırını şununla değiştir:
`<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="…" loading="lazy" allowfullscreen></iframe>`
ve sayfanın `<head>` kısmına her video için bir `VideoObject` JSON-LD ekle (name, description, thumbnailUrl, uploadDate, embedUrl).

## Arama motoru
- `sitemap.xml`, `robots.txt`, canonical, Open Graph / Twitter kartları, yapılandırılmış veri hazır.
- Google Search Console ve Bing Webmaster Tools doğrulama etiketi `index.html` `<head>` içine eklenir.
- IndexNow anahtar dosyası kökte (`<anahtar>.txt`); sayfa değişince Bing/Yandex'e bildirim gönderilir.

## Alan adı
Alan adı alınınca kök dizine `CNAME` dosyası (içinde yalnızca `katkatzengin.com`) eklenir ve tüm
`https://ismetaltnbas.github.io/katkatzengin/` adresleri yeni adresle değiştirilir.
