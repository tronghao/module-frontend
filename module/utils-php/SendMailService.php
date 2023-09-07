<?php

namespace App\Services;
use Mail;
use Swift_SmtpTransport;
use Swift_Mailer;
use Config;

class SendMailService
{
    public static function send($templateName, $arrVariableToTemplate, $arrayEmail, $subject) {
        foreach($arrayEmail as $email) {
            Mail::send($templateName, $arrVariableToTemplate, function($message) use ($email, $subject) {  
                    $message->to($email)->subject($subject);
            });
        }
    }

    public static function sendByMailer($mailer, $templateName, $arrVariableToTemplate, $arrayEmail, $subject) {
        foreach($arrayEmail as $email) {
            Mail::mailer($mailer)->send($templateName, $arrVariableToTemplate, function($message) use ($email, $subject) {  
                    $message->to($email)->subject($subject);
            });
        }
    }

    public static function sendByMailerVersionLaravelOld($mailer, $templateName, $arrVariableToTemplate, $arrayEmail, $subject, $idSetting = -1) {
        /*=========================
        Apply for laravel version < 7. Because Laravel version 7 have mailer
        =========================*/
        // Backup your default mailer
        $backup = Mail::getSwiftMailer();
        try {
            // Setup your gmail mailer
            $transport = new Swift_SmtpTransport($mailer['host'], $mailer['port'], 'tls');
            $transport->setUsername($mailer['username']);
            $transport->setPassword($mailer['password']);
            
            // Any other mailer configuration stuff needed...

            $gmail = new Swift_Mailer($transport);
            // Set the mailer as gmail
            Mail::setSwiftMailer($gmail);      
            
            foreach($arrayEmail as $email) {
                // if (env('APP_DEBUG') == true) {
                //     $email = 'tronghaomaico@gmail.com';
                // }
                Mail::send($templateName, $arrVariableToTemplate, function($message) use ($email, $subject, $mailer, $idSetting) {  
                    $message->getHeaders()->addTextHeader('X-SES-CONFIGURATION-SET', $mailer['config-set']);
                    $message->getHeaders()->addTextHeader(Config::get('mail-ses.header-id-setting-name'), $idSetting);
                    $message->from($mailer['from']);    
                    $message->to($email)->subject($subject);
                });
            }

            // Restore your original mailer
            Mail::setSwiftMailer($backup);
            return true;
        } catch (\Exception $e) {
            \Helper::writeLogException($e);
            Mail::setSwiftMailer($backup);
            return false;
        }
    }

    /**
     * get setting SES
     * Author: HaoDT
     */
    public static function getMailerSES() {
        return  [
            'host' => Config::get('mail-ses.host'),
            'port' => Config::get('mail-ses.port'),
            'encryption' => Config::get('mail-ses.encryption') ? Config::get('mail-ses.encryption') : 'tls',
            'username' => Config::get('mail-ses.username'),
            'password' => Config::get('mail-ses.password'),
            'from' => Config::get('mail-ses.from.address'),
            'config-set' => Config::get('mail-ses.config-set'),
        ];
    }
}