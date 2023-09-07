<?php

namespace App\Services;

use App\Services\ExceptionService;

class FolderService
{
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
     * existFolder check directory exist or not exist
     * @author HaoDT
     */
    public static function makeFolder($pathFolder)
    {
        try {
            if (!self::existFolder($pathFolder)) return false;
            $storage = \Storage::disk('public');
            $storage->makeDirectory(public_path() . $pathFolder);
            return true;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }

    /**
     * deleteFolder delete folder
     * @author HaoDT
     */
    public static function deleteFolder($pathFolder)
    {
        try {
            if (!self::existFolder($pathFolder)) return false;
            $storage = \Storage::disk('public');
            $storage->deleteDirectory($pathFolder);
            return true;
        } catch (\Exception $e) {
            ExceptionService::exceptionOnlyWriteLog($e);
        }
    }
}
