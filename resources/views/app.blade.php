<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>Maulana Haekal Noval Akbar - Personal Website</title>
    <link rel="icon" type="image/png" href="favicon.ico">
    <link rel="apple-touch-icon" href="favicon.ico">

    <meta name="description"
        content="Backend & Laravel developer building modern, scalable, and maintainable web applications.">
    <meta name="robots" content="index, follow">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />
    <link rel="canonical" href="https://mhna.my.id" />

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead

    {{-- JSON-LD taruh di head aja, ini lebih SEO-friendly --}}
    <script type="application/ld+json">
@verbatim
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Maulana Haekal Noval Akbar",
  "url": "https://mhna.my.id",
  "logo": "https://mhna.my.id/images/logo.png",
  "jobTitle": "Web Developer, Backend Developer, Laravel Developer",
  "image": "https://mhna.my.id/images/about.png",
  "sameAs": [
    "https://www.linkedin.com/in/maulana-haekal",
    "https://github.com/lebefriedlich",
    "https://www.instagram.com/novalakbar38/"
  ]
}
@endverbatim
    </script>
</head>

<body>
    @inertia
</body>

</html>
