<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {!! $page->metaTags() !!}
    {!! css('css/main.css') !!}
</head>
<body class="mw7 center sans-serif mid-gray bg-near-white">
    <a href="#main" class="clip">skip to content</a>

    <header role="banner">
        <a href="<?= $site->url() ?>" title="<?= $site->title()->html() ?>">
            <img src="/images/logo.svg" alt="<?= $site->title()->html() ?>">
        </a>

        @include('partials.menu')
    </header>

    <main id="main" role="main">
        <h1>@yield('title')</h1>

        @yield('content')
    </main>

    <footer role="contentinfo">
        {{ $site->copyright()->kirbytext() }}
    </footer>

    {!! snippet('google-analytics', null, true) !!}
</body>
</html>
