<?php

use App\Http\Controllers\ContactFormController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/send-email', [ContactFormController::class, 'sendEmail']);
