<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'name'     => 'required|string',
            'lastname' => 'required|string',
            'email'    => 'required|email',
            'subject'  => 'required|string',
            'message'  => 'required|string',
        ]);

        // bikin konten HTML-nya
        $html = "
            <h2>New Contact Message</h2>
            <p><b>Name:</b> {$request->name} {$request->lastname}</p>
            <p><b>Email:</b> {$request->email}</p>
            <p><b>Message:</b><br>{$request->message}</p>
        ";

        try {
            // PAKAI Mail::html, bukan Mail::send + setBody
            Mail::html($html, function ($message) use ($request) {
                $message->to(env('MAIL_TO'))
                    ->from(env('MAIL_FROM_ADDRESS'), 'My Portfolio')
                    ->subject($request->subject ?: 'New Contact Form Message');
            });

            return response()->json(['success' => true]);

        } catch (\Throwable $e) {
            // buat debug kalau masih error
            return response()->json([
                'success' => false,
                'message' => 'Mail error',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
}
