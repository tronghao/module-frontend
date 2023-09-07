<?php

namespace App\Services;


class RegexService
{
    
    public static function getRegexMatches($regex, $string) {
        preg_match_all($regex, $string, $matches, PREG_SET_ORDER, 0);
        return $matches;
    }

 }