<?php

namespace App\Services;

class ImageService
{
    public static function saveImgBase64($base64, $folder, $filename)
    {
        list($extension, $content) = explode(';', $base64);
        $tmpExtension = explode('/', $extension);
        preg_match('/.([0-9]+) /', microtime(), $m);
        $fileName = sprintf('%s.%s', $filename, $tmpExtension[1]);
        $content = explode(',', $content)[1];
        $storage = \Storage::disk('public');

        $checkDirectory = $storage->exists($folder);

        if (!$checkDirectory) {
            $storage->makeDirectory($folder);
        }

        $storage->put($folder . '/' . $fileName, base64_decode($content), 'public');

        return $fileName;
    }

    public static function resizeImage($resourceType, $image_width, $image_height, $resizeWidth, $resizeHeight)
    {
        // $resizeWidth = 100;
        // $resizeHeight = 100;
        $imageLayer = imagecreatetruecolor($resizeWidth, $resizeHeight);
        imagecopyresampled($imageLayer, $resourceType, 0, 0, 0, 0, $resizeWidth, $resizeHeight, $image_width, $image_height);
        return $imageLayer;
    }

    /**
     * moveFile move file from old dir to new dir
     * @author HaoDT
     */
    public static function moveFile($oldfilename, $newImageName, $pathFolder)
    {
        try {
            $storage = \Storage::disk('public');

            $checkDirectory = $storage->exists($pathFolder);

            if (!$checkDirectory) {
                $storage->makeDirectory(public_path() . $pathFolder);
            }
            return $storage->move($oldfilename, $newImageName);
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * existFolder check directory exist or not exist
     * @author HaoDT
     */
    public static function existFolder($pathFolder)
    {
        try {
            $storage = \Storage::disk('public');

            return $storage->exists($pathFolder);
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * saveImgFile save image file
     * @author HaoDT
     */
    public static function saveImgFile($file, $pathFolder, $fileName)
    {
        try {
            $storage = \Storage::disk('public');
            if (!self::existFolder($pathFolder)) {
                $storage->makeDirectory(public_path() . $pathFolder);
            }
            return $file->storeAs($pathFolder, $fileName);
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * saveImgFromUrl save image from url
     * @author HaoDT
     */
    public static function saveImgFromUrl($url, $pathFolder, $fileName)
    {
        try {

            $contents = file_get_contents($url);
            $storage = \Storage::disk('public');
            if (!self::existFolder($pathFolder)) {
                $storage->makeDirectory(public_path() . $pathFolder);
            }
            $storage->put($pathFolder . $fileName, $contents);

            return true;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }
}