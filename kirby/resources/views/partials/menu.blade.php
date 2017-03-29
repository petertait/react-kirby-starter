<nav role="navigation" aria-label="site links">
    @foreach($pages->visible() as $item)
    <a href="{{ $item->url() }}" title="{{ $item->title() }}">
        {{ $item->title() }}
    </a>
    @endforeach
</nav>
