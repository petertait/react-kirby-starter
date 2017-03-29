@extends('layouts.master')

@section('title', $page->title())

@section('content')
    {{ $page->text()->kirbytext() }}
@endsection
