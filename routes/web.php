<?php

use App\Http\Controllers\ContactFormController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/sitemap.xml', function () {
    $baseUrl = 'https://mhna.my.id';

    return response(
        Sitemap::create()
            ->add(Url::create($baseUrl . '/')->setPriority(1.0)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
            ->add(Url::create($baseUrl . '/#home')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))
            ->add(Url::create($baseUrl . '/#about')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))
            ->add(Url::create($baseUrl . '/#resume')->setPriority(0.9)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
            ->add(Url::create($baseUrl . '/#contact')->setPriority(0.7)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))
            ->render()
    )->header('Content-Type', 'application/xml');
});