
import bridge from '@vkontakte/vk-bridge';
import {RadioGroup,Radio, Group,FormItem,Input, Checkbox, Select, CustomSelectOption, Div, Button, Header, Card} from '@vkontakte/vkui';
import React, { useEffect, useState } from "react";
import {connect} from 'react-redux'
import {infoMethod} from "../function/infoMethod"
import renderjson from "renderjson"
import "../css/pet.css"

//56412b1556412b1556412b15cb55500bcd5564156412b153510140686208a50ef42d93d
//56412b1556412b1556412b15cb55500bcd5564156412b153510140686208a50ef42d93d
//FvVazPtqPA6qdIDCKEfA
function SearchPetForm (){
	
	const [section, setSection] = useState(null)
    const [use_method, setUseMethod] = useState(false)
    const [disabledButtonMethod, setDisabledButtonMethod] = useState(false)
    const [textButtonMethod, setTextButtonMethod] = useState(true)
    const [param, setParam] = useState(
        [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ])

    useEffect(() => {
        setParam([
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ])
    }, [])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function onChange(e, index) {
        const { value } = e.currentTarget;
        if (value !== '') {
            setSection(value)
        }
        else {
            setSection(null)
        }

        setUseMethod(false)
        setTextButtonMethod(true)
        setDisabledButtonMethod(false)
        setParam([
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ])

        try {          
                let arr = param
                arr[index] = value
                setParam(arr)   
        }
        catch(err) {
            console.log(err)
            setSection(null)
            setUseMethod(false)
        }

    }

    async function onChangeInputs(e, index) {
        const {value} = e.currentTarget;

        let arr = param
        arr[index] = value
        setParam(arr)
        sleep(1)

        setUseMethod(false)
        setTextButtonMethod(true)
        setDisabledButtonMethod(false)
    }

    function actionCheckbox(index) {

        setUseMethod(false)
        setTextButtonMethod(true)
        setDisabledButtonMethod(false)

        let arr = param

        if (arr[index] === '' || arr[index] === false) {
            arr[index] = true
        } else {
            arr[index] = false
        }

        setParam(arr)
    }

	
	async function executeMethod(){
		renderjson.set_show_to_level(30)
		let params1={}
		params1["pol"] = Input.date
try{
	param.map((el, index) => {
		// eslint-disable-next-line
		if (params.length === index || el === '') return
		if (arams[index].type === 'integer') {
			params1[`${params[index].param}`] = Number(el)
		}
		else {
			params1[`${params[index].param}`] = el
		}

	})
	let response = await bridge.send("VKWebAppCallAPIMethod", {"method": "execute.getMessagPet", "params": {"v": "5.131","access_token": "56412b1556412b1556412b15cb55500bcd5564156412b153510140686208a50ef42d93d"}});

		window.responseApi = response
		document.getElementById('response').appendChild(renderjson(response))

} catch {
	document.getElementById('response').appendChild("Error")
}
		

	}
	
	const [disabled, setDisabled] = useState(false);
	const [disabled1, setDisabled1] = useState(false);
	const [disabled2, setDisabled2] = useState(false);
	const [disabled3, setDisabled3] = useState(false);
	const [disabled5, setDisabled5] = useState(false);
	const [disabled4, setDisabled4] = useState(false);
	return(
		<div>

<div>

<Group>
			<FormItem top="Сообщить о пропаже">
	<div>
	<label className="datePropLabel">Введите дату пропажи:</label>
	<Input
               type="date"
			   defaultValue=""
			   onChange={(e) => onChangeInputs(e, index)}
               placeholder="Enter your name"
               size={60}
            />
			</div>
	</FormItem>
	<FormItem top="Выбирете пол пропавшей собаки:">
          <RadioGroup>
            <Radio name="polPropValG" value="m" defaultChecked>
              Мальчик
            </Radio>
            <Radio name="polPropValG" value="g">
              Девочка
            </Radio>
            
          </RadioGroup>
        </FormItem>
		<FormItem  className='petFromItem' top="Выбирите Вашу породу из списка. Если ее не нашли в списке, выбирите 'моей породы нет в списке' и впишите ее руками в дополнительное поле
		Если вы не знаете породу или у собаки ее нет, то выбирите 'не могу определить породу'">
			<Select
			name ='dogName'
			placeholder=''
			options={infoMethod.map((el, index)=>({
				label:el.title,
				value:index,
			}))}
			renderOption={({option, ...restProps})=>(
				<CustomSelectOption
				{...restProps}
				/>
			)}
			onChange={(e) => onChange(e)}
			searchable={true}
			/>

		</FormItem>
		<FormItem className='petFromItem' top="Выбирете цвета присутствующие у вашего питомцы или преобладающий (можно выбрать несколько):">
		<Checkbox
		name='chern'
		value={'черный'}
        checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      >
        черный
      </Checkbox>
      
      <Checkbox
	  name='beliy'
	  value={'белый'}
        checked={disabled1}
        onChange={(e) => setDisabled1(e.target.checked)}
      >
        белый
      </Checkbox>
	  <Checkbox
	  name='rihiy'
	  value={'рыжий'}
        checked={disabled2}
        onChange={(e) => setDisabled2(e.target.checked)}
      >
        рыжий
      </Checkbox>
	  <Checkbox
	  name='seriy'
	  value={'бежсерыйевый'}
        checked={disabled3}
        onChange={(e) => setDisabled3(e.target.checked)}
      >
        серый
      </Checkbox>
	  <Checkbox
	  name='begeviy'
	  value={'бежевый'}
        checked={disabled4}
        onChange={(e) => setDisabled4(e.target.checked)}
      >
        бежевый
      </Checkbox>
	  <Checkbox
	  name='korih'
	  value={'коричневый'}
        checked={disabled5}
        onChange={(e) => setDisabled5(e.target.checked)}
      >
        коричневый
      </Checkbox>
        </FormItem>
		
		<Div>
			<Button
			size='1'
			stretched
			mode='secondary'
			onClick={()=>executeMethod()}
			>Поиск</Button>
		</Div>
	</Group>

	<Group header={<Header mode='secondary'>Результат</Header>}>
		<Card>
			<Div>
				<div className='scroll' id='response'/>
			</Div>
		</Card>
	</Group>

	</div>
	</div>

	);


}



export default SearchPetForm;
