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
    $proverka = 'ДА';
    $G31_SUM = 0;
    $G34 = 0;
    $G7 = 0;
    $G18 = 0;
    $N9 = 0;
    $L9=0;
    $L10=0;
    $L11=0;
    $G11 = 0;
    
    $l = (float)$exampleCalculator->getVal('len1') + 0;
    $h = (float)$exampleCalculator->getVal('w1') + 0;
    $sr = (float)$exampleCalculator->getVal('sr')+0;
    $v1 = (float)$exampleCalculator->getVal('v1')+0;
    $v2 = (float)$exampleCalculator->getVal('v2')+0;
    $G7 = (float)$exampleCalculator->getVal('vis')+0;
    
    $typeNum = (float)$exampleCalculator->getSelectVal('p')+0;
    $typeOralo = (float)$exampleCalculator->getSelectVal('t')+0;

    $G18 = (float)$exampleCalculator->getVal('shirDiagr')+0;
    $zapas = (float)$exampleCalculator->getSelectVal('q')+0;
    $rasstojanie = (float)$exampleCalculator->getVal('rasstojanie')+0;

    $sum418 = $v1 + 10 * log10($v2);
    if ($sum418 == '-INF') $sum418 =0;
    $sum420 = 20 * log10($rasstojanie);
    if ($sum420 == '-INF') $sum420 = 0;


    if($sum418 - $sum420 > $typeNum + $zapas){$proverka = 'ДА';} else {$proverka = 'НЕТ';}
    $G31_SUM = round($sum418 - ($typeNum + $zapas),0);
    $G32 = pow(10, $G31_SUM / 20);

    $N9 = ($G7-1.5) / cos($G18 + 2);
    $L9 = ($G7 - 1.5) * tan($G18/2);
    $L10 = $G18 * 3.14 * pow($G32,2) / 360;
    $L11 = 3.14 * tan($G18/2) * pow($G32/2,2);

    $G33 =0;
    $G11 =$l * $h + $sr;;
    echo ($typeOralo);
    echo ('test');
    if ($typeOralo == 1) {
    
        if ($G32 > $N9) {
            $G33 = 3.14 * $L9;
        } else {
            $G33 = 'Пересчитать';
        }
    } else if ($typeOralo == 2){   
        $G33 = $L10;
    }else if ($typeOralo == 3){  
        $G33 = $L11;      
    }
    if ($G33 != 0 && is_numeric($G33)){
    $G34 = ceil($G11 / $G33);
    }
 
    $calculatorSum['4.16'] = $l * $h + $sr; 
    $calculatorSum['4.18'] = round($sum418,0); 
    $calculatorSum['4.20'] = round($sum420, 0);
    $calculatorSum['4.31'] = round($sum418 - $sum420, 0);
    $calculatorSum['4.22'] = $proverka;
    $calculatorSum['4.23'] = $G31_SUM;
    $calculatorSum['4.24'] = $G32;
    $calculatorSum['4.25'] = $G33;
    $calculatorSum['4.26'] = $G34;
    $calculatorSum['4.27'] = $proverka;
    echo ($L10);
    echo ('test');
    echo ($N9);
    echo (';');
    return $calculatorSum;
  };