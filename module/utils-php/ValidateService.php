<?php

namespace App\Services;
use App\Services\ExceptionService;

class ValidateService
{
    /**
     * oneByte check character one byte
     * @author HaoDT
     */
    public static function oneByte($string)
    {
        try {
            $regex = '/^[~!@#$%^&*()-_+={}\[\]\'":;?\/.><,\\\\|a-zA-Z0-9]+$/';
            preg_match($regex, $string, $matches, PREG_OFFSET_CAPTURE, 0);

            return count($matches) ? true : false;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * isUrl check is url right
     * @author HaoDT
     */
    public static function isUrl($string)
    {
        try {
            $regex = '/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)$/m';
            preg_match($regex, $string, $matches, PREG_OFFSET_CAPTURE, 0);

            return count($matches) ? true : false;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * numberOneByte check number one byte
     * @author HaoDT
     */
    public static function numberOneByte($string)
    {
        try {
            $regex = '/^[0-9]+$/';
            preg_match($regex, $string, $matches, PREG_OFFSET_CAPTURE, 0);

            return count($matches) ? true : false;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }
}
