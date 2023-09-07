<?php

namespace App\Services;
use App\Services\ExceptionService;

class CommonService
{
    public static function renameFile($pathOldHaveFileName, $filenameOld, $pathNewNotFileName, $filenameNew) {
        try {
            if (!file_exists($pathNewNotFileName)) {
                mkdir($pathNewNotFileName, 0777, true);
            }
            
    
            rename(public_path($pathOldHaveFileName), public_path($pathNewNotFileName . '/' . $filenameNew));

            return true;
        } catch (\Exception $e) {
            return false;
        }
        
    }

    public static function emailValid($email) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return true;
	 	}
        return false;
    }

    /**
     * Storage image for file and base64
     * Author: HaoDT
     */
    public static function storeImage($file, $path, $extendName = '') {
        try {
            $image = \Image::make($file);
            $split = explode('/', $image->mime);
            $fileType = $split[1];
            
            $name = $path. $extendName . Helper::gentToken() . '.' . $fileType;
            
            $image->save(public_path($name));
            
            return $name;
        }
        catch (\Exception $e) {
			\Helper::writeLogException($e);
            return null;
		}
    }

    public static function encryptDecrypt($action, $string)
    {
        $output = false;
        
        $encrypt_method = "AES-256-CBC";
        $secret_key = 'This is my secret key';
        $secret_iv = 'This is my secret iv';
        
        // hash
        $key = hash('sha256', $secret_key);
        
        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a
        // warning
        $iv = substr(hash('sha256', $secret_iv), 0, 16);
        
        if ($action == 'encrypt')
        {
            $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
            $output = base64_encode($output);
        }
        else
        {
            if ($action == 'decrypt')
            {
                $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
            }
        }
        
        return $output;
    }

    /**
     * convert text to english not sign and connect by '-' character
     */
    public static function slugify($text, string $divider = '-')
    {
        // replace non letter or digits by divider
        $text = preg_replace('~[^\pL\d]+~u', $divider, $text);

        // transliterate
        $text = iconv('utf-8', 'utf-8//TRANSLIT', $text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);

        // trim
        $text = trim($text, $divider);

        // remove duplicate divider
        $text = preg_replace('~-+~', $divider, $text);

        // lowercase
        $text = strtolower($text);

        if (empty($text)) {
            return 'n-a';
        }

        return $text;
    }

    /**
     * randomString random string; result example = aaaaa-aaaaa
     * @author HaoDT
     */
    public static function randomString($length = 10)
    {
        try {
            $characters = 'abcdefghijklmnopqrstuvwxyz';
            $charactersLength = strlen($characters);
            $randomString = '';
            $index = 0;
            for ($i = 0; $i < $length; $i++) {
                if ($index == 5) {
                    $index = 0;
                    $randomString .= '-';
                }
                $randomString .= $characters[rand(0, $charactersLength - 1)];
                $index++;
            }
            return $randomString;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * byteToMb convert byte to megabyte
     * @author HaoDT
     */
    public static function byteToMb($byte, $decimal = 2)
    {
        try {
            return round($byte / 1024 / 1024, $decimal);
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * isSpaceOrTab is space or tab
     * @author HaoDT
     */
    public static function isSpaceOrTab($text)
    {
        try {
            $parts = preg_split('/\s+/', $text);
            return count($parts) > 1 ? true : false;
        } catch (\Exception $e) {
            return ExceptionService::exceptionMessage($e);
        }
    }

    /**
     * getNumberJapan
     * @author HaoDT
     */
    public static function getNumberJapan($number)
    {
        try {
            $data = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭', '⑮', '⑯', '⑰', '⑱', '⑲', '⑳', '㉑', '㉒', '㉓', '㉔', '㉕', '㉖', '㉗', '㉘', '㉙', '㉚', '㉛', '㉜', '㉝', '㉞', '㉟', '㊱', '㊲', '㊳', '㊴', '㊵', '㊶', '㊷', '㊸', '㊹', '㊺', '㊻', '㊼', '㊽', '㊾', '㊿',];
            return $data[$number];
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * fixSQLInjection fix sql injection
     * @author HaoDT
     */
    public static function fixSQLInjection($string)
    {
        $string = strip_tags($string);
        $string = str_replace("'", '', $string);
        $string = str_replace("--", '', $string);
        return $string;
    }
}