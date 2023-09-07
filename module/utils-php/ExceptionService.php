<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ExceptionService
{
    /**
     * @param array|object $data
     * @param int $status
     * @return JsonResponse
     * @author tanmnt
     */
    public function jsonData($data = [], int $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json(
            [
                'success' => true,
                'data' => $data,
            ],
            $status
        );
    }

    /**
     * @param $data
     * @param int $status
     * @return JsonResponse
     * @author tanmnt
     */
    public function jsonTable($data, int $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json(
            [
                'success' => true,
                'data' => $data['data'],
                'count' => $data['total'],
            ],
            $status
        );
    }

    /**
     * @param $error
     * @param int $status
     * @return JsonResponse
     * @author tanmnt
     */
    public static function jsonError($error, int $status = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        $message = $error;
        $file = '';
        $line = '';
        if (is_object($error)) {
            write_log_exception($error);
            $message = $error->getMessage();
            $file = config('app.env') === 'production' ? '' : $error->getFile();
            $line = config('app.env') === 'production' ? '' : $error->getLine();
        }

        return response()->json(
            [
                'success' => false,
                'message' => $message,
                'file' => $file,
                'line' => $line,
            ],
            $status
        );
    }

    /**
     * @param $message
     * @param bool $success
     * @param int $status
     *
     * @return JsonResponse
     * @author tanmnt
     */
    public static function jsonMessage($message, bool $success = true, int $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json(
            [
                'success' => $success,
                'message' => $message,
            ],
            $status
        );
    }

    /**
     * @param $errors
     * @param bool $success
     * @param int $status
     * @return JsonResponse
     */
    public function jsonValidate($errors, bool $success = false, int $status = Response::HTTP_UNPROCESSABLE_ENTITY): JsonResponse
    {
        return response()->json(
            [
                'success' => $success,
                'errors' => $errors,
            ],
            $status
        );
    }

    public function jsonDataAndMessage($data, $message, $status = Response::HTTP_OK): JsonResponse
    {
        return response()
            ->json(
                [
                    'success' => true,
                    'message' => $message,
                    'data' => $data,
                ],
                $status
            )
            ->header('Cache-Control', 'no-store, no-cache');
    }

    public function forceJsonError($error, int $status = Response::HTTP_INTERNAL_SERVER_ERROR)
    {
        $message = $error;
        $file = '';
        $line = '';
        if (is_object($error)) {
            write_log_exception($error);
            $message = $error->getMessage();
            $file = $error->getFile();
            $line = $error->getLine();
        }

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: *');

        // header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        // header('Access-Control-Allow-Credentials: true');
        // header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Secret');
        // header('Access-Control-Max-Age: 120');

        //Return http json
        $response = response()
            ->json(
                [
                    'message' => $message,
                    'file' => $file,
                    'line' => $line,
                ],
                $status
            )->header('Cache-Control', 'no-store, no-cache');
        $response->send();
        exit();
    }

    /**
     * @param    $message
     * @param  bool  $success
     * @param  int  $status
     * @return JsonResponse
     *
     * @author tanmnt
     */
    public function jsonErrorMessage($message, bool $success = false, int $status = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return response()
            ->json(
                [
                    'success' => $success,
                    'message' => $message,
                ],
                $status
            )
            ->header('Cache-Control', 'no-store, no-cache');
    }

    /**
     * exceptionMessage exception message
     * @author HaoDT
     */
    public static function exceptionMessage($e, $checkSql = false)
    {
        write_log_exception($e);
        if (!$checkSql) {
            return self::jsonError(trans('errors.default_error'));
        }
        return self::jsonError(str_contains($e->getMessage(), 'SQL') ? trans('errors.sql_default_error') : trans('errors.default_error'));
    }

    /**
     * exceptionOnlyWriteLog only write log exception
     * @author HaoDT
     */
    public static function exceptionOnlyWriteLog($e)
    {
        write_log_exception($e);
        return;
    }
}
