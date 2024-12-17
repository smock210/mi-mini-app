<?php
namespace QuickForm;

\defined('QF3_VERSION') or die;

class exampleCalculator extends qfCalculator
{
    protected $mathX = 0;
    protected $data;
    
    public function __construct($project, $data)
    {
        $this->data = $data;
    }

    protected function getMatc($data, string $mathV)
    {
      $value = "";
        foreach($data as $field) {
            if(isset($field->math) && $field->math == $mathV) {
              //echo $mathV;
              //echo $field->value;
              $value =  $field->value;
            } 
            if (isset($field->data) && ! empty($field->data)) {
              $value =  $this->getMatc($field->data, $mathV);
          }
        }
        return $value;
    }

    protected function getValSelect($data, string $mathV)
    {
      $value = "";
        foreach($data as $field) {
            if(isset($field->math) &&  strlen($field->value)>1) {
              //echo $mathV."".$field->value."";
              //echo str_replace($mathV,"",$field->math);
              if (is_numeric(str_replace($mathV,"",$field->math)) && str_contains($field->math,$mathV)) {
              $value =  str_replace($mathV,"",$field->math);
              //echo $value;
              }
            } 
            
        }
        return $value;
    }

    public function getVal(string $mathV)
    {
        return $this->getMatc( $this->data, $mathV);
    }
    public function getSelectVal(string $mathV)
    {
        return $this->getValSelect( $this->data,$mathV);
    }
}
