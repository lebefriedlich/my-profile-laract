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
            'email'    => 'required|email',
            'message'  => 'required|string',
        ]);

        $subject = $request->input('subject', 'New Contact Form Message');

        // bikin konten HTML-nya
        $html = "
            <h2>New Contact Message</h2>
            <p><b>Name:</b> {$request->name}</p>
            <p><b>Email:</b> {$request->email}</p>
            <p><b>Message:</b><br>{$request->message}</p>
        ";

        try {
            // PAKAI Mail::html, bukan Mail::send + setBody
            Mail::html($html, function ($message) use ($request, $subject) {
                $message->to(env('MAIL_TO'))
                    ->from(env('MAIL_FROM_ADDRESS'), 'My portfolio')
                    ->subject($subject);
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
