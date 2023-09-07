<?php
/**
 * Created by: DuyLBP
 * Email: duy@onetech.vn
 * Date: 2018-06-27
 * Time: 16:31
 * File: Helper.php
 */

namespace App\Helpers;

use App\AppTraits\SettingTrait;
use Carbon\Carbon;
use Cache;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mail;
use Session;
use Log;
use Request;

/**
 * @Class Helper
 * @package App\Helpers
 * @Description All common function of project
 * @Author DuyLBP
 * @Date 2018-06-27
 */
Class Helper
{
	use SettingTrait;
	
	/**
	 * @param $string1
	 * @param $string2
	 * @return bool
	 * @Description compare string = string
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function compareTwoString($string1, $string2)
	{
		if(strcmp($string1, $string2) == 0)
			return true;

		return false;
	}

	/**
	 * Date format
	 */
	public static function formatDate($date, $format='Y-m-d H:i:s')
	{
		$date=date_create($date);
		return date_format($date, $format);
	}

	/*
	* Convert from mongodb date object to date format
	 */
	/**
	 * @param        $dateObject
	 * @param string $format
	 * @return false|string
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function convertDateFormat($dateObject, $format='Y-m-d')
	{
		if (!is_null($dateObject))
		{
			$dateTime = $dateObject->toDateTime();
			return date($format, $dateTime->getTimestamp());
		}
		return $dateObject;
	}

	/**
	 * @param $s
	 * @return false|string
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function convertStringToDate($string, $format = "Y-m-d H:i:s")
	{
		$date = date_create($string);
		return date_format($date,$format);
	}

	/**
	 * Date format YYYY-MM-DD H:M:S
	 */
	public static function dateNow($format = "Y-m-d H:i:s")
	{
		return Carbon::now(env('TIMEZONE','Asia/Tokyo'))->format($format);
	}

	/**
	 * @return string
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateYesterday($format = "Y-m-d H:i:s")
	{
		return Carbon::yesterday(env('TIMEZONE','Asia/Tokyo'))->format($format);
	}

	/**
	 * @return string
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateTomorrow($format = "Y-m-d H:i:s")
	{
		return Carbon::tomorrow(env('TIMEZONE','Asia/Tokyo'))->format($format);
	}

	/**
	 * @param $value
	 * @return string
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateNowAddDay($value, $format = "Y-m-d H:i:s")
	{
		return Carbon::now(env('TIMEZONE','Asia/Tokyo'))->addDays($value)->format($format);
	}

	/**
	 * @param $value
	 * @return static
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateNowAddMonth($value,$format = "Y-m-d H:i:s")
	{
		return Carbon::now(env('TIMEZONE','Asia/Tokyo'))->addMonths($value)->format($format);
	}

	/**
	 * @param $value
	 * @return static
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateNowAddHour($value, $format = "Y-m-d H:i:s")
	{
		return Carbon::now(env('TIMEZONE','Asia/Tokyo'))->addHours($value)->format($format);
	}

	/**
	 * @param $value
	 * @return static
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateNowAddMinute($value, $format = "Y-m-d H:i:s")
	{
		return Carbon::now(env('TIMEZONE','Asia/Tokyo'))->addMinutes($value)->format($format);
	}

	/**
	 * @param $value
	 * @return static
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateNowAddSecond($value, $format = "Y-m-d H:i:s")
	{
		return Carbon::now(env('TIMEZONE','Asia/Tokyo'))->addSeconds($value)->format($format);
	}

	/**
	 * @param $date1
	 * @param $date2
	 * @return float
	 * @Description GET minute between 2 dates
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function getMinuteOfTwoDate($date1, $date2)
	{
		$dateTimestamp1 = strtotime($date1);
		$dateTimestamp2 = strtotime($date2);
		$minute= round(($dateTimestamp1-$dateTimestamp2)/60,0);
		return $minute;
	}

	/**
	 * format currency
	 */

	public static function formatCurrency($number, $fractional=false)
	{
		if ($fractional) {
			$number = sprintf('%.2f', $number);
		}
		while (true) {
			$replaced = preg_replace('/(-?\d+)(\d\d\d)/', '$1,$2', $number);
			if ($replaced != $number) {
				$number = $replaced;
			} else {
				break;
			}
		}
		return $number;

	}

	/**
	 * @param $string
	 * @param $mark
	 * @return array
	 * @Description convert string to array
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function stringToArray($string, $mark)
	{
		$arr = explode($mark,$string);
		$arr = array_filter($arr);
		return $arr;
	}

	/**
	 * @param $arr
	 * @param $mark
	 * @return string
	 * @Description convert array to string
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function arrayToString($arr, $mark)
	{
		$arr = array_filter($arr);
		$string =  implode($mark,$arr);
		return $string;
	}
	/**
	 * Set Cache
	 */
	public static function setCache($key, $value, $minute = 1440)
	{
		Cache::put($key, $value, $minute);
		return true;
	}
	/**
	 * Get Cache
	 */
	public static function getCache($key)
	{
		if (Cache::has($key))
		{
			return Cache::get($key);
		}
		return null;
	}

	/**
	 * @param $key
	 * @return bool
	 * @Description check cache exist by cache_key
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function checkCache($key)
	{
		if(Helper::debugMode())
		{
			return false;
		}

		if (Cache::has($key))
		{
			return true;
		}
		return false;
	}

	/**
	 * @param $key
	 * @return bool
	 * @Description remove cache by cache key
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function forgetCache($key)
	{
		Cache::forget($key);
		return true;
	}

	/**
	 * @return bool
	 * @Description remoce all cache
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function cacheClearAll()
	{
		Cache::flush();
		return true;
	}

	/**
	 * @param     $key
	 * @param int $i
	 * @return bool
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function cacheIncrease($key, $i = 1)
	{
		Cache::increment($key,$i);
		return true;
	}

	/**
	 * @param     $key
	 * @param int $decayMinutes
	 * @return int
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function hitCache($key, $decayMinutes = 1)
	{
		Cache::add($key, 0, $decayMinutes);
		return (int) Cache::increment($key);
	}

	/**
	 * @param $key
	 * @param $value
	 * @return bool
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function setSession($key, $value)
	{
		Session::put($key, $value);
		return true;
	}

	/**
	 * @param $key
	 * @return mixed|null
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function getSession($key)
	{
		if(Session::has($key))
		{
			return Session::get($key);
		}
		return null;
	}

	/**
	 * @param $key
	 * @return bool
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function forgetSession($key)
	{
		Session::forget($key);
		return true;
	}

	/**
	 * @return string
	 * @Description get ip user
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function getIpClient()
	{
		return Request::ip();
	}

	/**
	 * @return array|string
	 * @Description get user agent, broswer info
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function getUserAgent()
	{
		return Request::server('HTTP_USER_AGENT');
	}

	/**
	 * @param int $length
	 * @return string
	 * @Description generate key from ramdom character
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function genKey($length = 6)
	{
		$keyGen = "";
		$characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHGKLMNPQSTUVWZYZ";
		for ($p = 0; $p < $length; $p++) {
			$keyGen .= $characters[mt_rand(0, strlen($characters)-1)];
		}
		return $keyGen;
	}

	/**
	 * @return string
	 * @Description generate key with uniqid string
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function gentToken()
	{
		return md5(uniqid(mt_rand(), true));
	}


	/**
	 * @return bool
	 * @Description check debug mode
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function debugMode()
	{
		return env('APP_DEBUG', false);
	}

	/**
	 * @param $value
	 * @return string
	 * @Description encrypt Md5
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function encryptMd5($value)
	{
		return hash('md5', $value);
	}

	/**
	 * Examine of a string is null or empty value.
	 *
	 * @param string|null $text
	 * @param bool $ignoreWhiteSpace
	 * @return bool
	 */
	public static function isNullOrEmpty($text, $ignoreWhiteSpace = true)
	{
		if(is_null($text)) {
			return true;
		} else if(is_string($text)) {
			if($ignoreWhiteSpace) {
				$text = trim($text);
			}
			return empty($text);
		} else { // Non-string input
			return true;
		}
	}

	/**
	 * @param $dateString
	 * @return static
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dateStringToCarbon($dateString)
	{
		$timezone = new \DateTimeZone(env('TIMEZONE','Asia/Tokyo'));
		$format = 'Y-m-d H:i:s';
		$dateTime = \DateTime::createFromFormat($format, $dateString, $timezone);
		return Carbon::instance($dateTime);
	}

	/** Find a randomDate between $start_date and $end_date
	 * @param $start_date, type: string|datetime
	 * @param $end_date, type: string|datetime
	 * @return false|string
	 */
	public static function randomDate($start_date, $end_date)
	{
		// Convert to timetamps
		$min = strtotime($start_date);
		$max = strtotime($end_date);

		$daystep = 86400;       // 1 day

		$datebetween = abs(($max - $min) / $daystep);

		$randomday = random_int(0, $datebetween);

		// Convert back to desired date format
		return date('Y-m-d', $min + $randomday * $daystep);
	}

	/**
	 * @return array
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function dayOfWeek()
	{
		$dayArr = ['全て', '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
		return $dayArr;
	}

	public static function writeLogException(\Exception $e = null) {
		\Log::error(
			'➤Message ex::'.$e->getMessage(). PHP_EOL .
			'#0 More exception::'. Helper::getBetweenContent($e->getTraceAsString(), '#0', '#10')
			. PHP_EOL
			. PHP_EOL
		);
	}

	/**
	 * @param string $path
	 * @return bool
	 * @Description
	 * @Author DuyLBP
	 * @Date 2018-06-27
	 */
	public static function deleteFileS3($path = '')
	{
		try
		{
			$s3 = \Storage::disk('s3');

			$s3FilePath     = '/'.env('S3_FILES_PATH', '/');

			$strArray       = explode($s3FilePath ,$path);

			$path           = $s3FilePath;

			$path           .= isset($strArray[1]) ? $strArray[1] : '';

			$path           = urldecode($path);

			$isResult = $s3->delete($path);

			return $isResult;

		}
		catch(\Exception $e)
		{
			dd($e->getMessage());
		}
	}
}
