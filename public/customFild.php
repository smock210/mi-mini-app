<?php
$customQFcalculator = function($project, $data)
{
    require_once(QF3_PLUGIN_DIR . 'classes/test.php');
    $exampleCalculator = new QuickForm\exampleCalculator($project, $data);

    $vis = 0;
    $l = 0;
    $h = 0; 
    $sr = 0;
    
    $v1 = 1;
    $v2 = 10;
    $so = 0;
    $sq = 0;   
    $sv = 0;
    $typeNum = 0;
    $typeOralo = 0;

    $shirDiagr = 0;
    $zapas = 0;
    $rasstojanie = 0;
    $sum418 = 0;
    $sum420 = 0;
    
    $l = (float)$exampleCalculator->getVal('len1') + 0;
    $h = (float)$exampleCalculator->getVal('w1') + 0;
    $sr = (float)$exampleCalculator->getVal('sr')+0;
    $v1 = (float)$exampleCalculator->getVal('v1')+0;
    $v2 = (float)$exampleCalculator->getVal('v2')+0;
    $typeNum = (float)$exampleCalculator->getSelectVal('p')+0;
    $typeOralo = (float)$exampleCalculator->getSelectVal('t')+0;

    $shirDiagr = (float)$exampleCalculator->getVal('shirDiagr')+0;
    $zapas = (float)$exampleCalculator->getSelectVal('q')+0;
    $rasstojanie = (float)$exampleCalculator->getVal('rasstojanie')+0;

    $sum418 = $v1 + 10 * log10($v2);
    if ($sum418 == '-INF')$sum418 =0;
    $sum420 = 20 * log10($rasstojanie);
    if ($sum420 == '-INF') $sum420 = 0;
 if ($sum418 - $sum420>$zapas + $typeNum) echo 'ДА'; else echo 'НЕТ';
    
  };
  ?>