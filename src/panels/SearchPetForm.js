
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
		{},
		'',
		'',
		'',
		'',
		'',
		'',
		''])

    useEffect(() => {
        setParam([
			{},
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

    async function onChange(index) {
        setUseMethod(false)
        setTextButtonMethod(true)
        setDisabledButtonMethod(false)

        let arr = param

        if (arr[index.name] === '') {
            arr[index.name] = index.value
        } else {
            arr[index.name] = ""
        }

        setParam(arr)

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
		console.log(param.includes(index.currentTarget.name))
		

        if (arr[index.currentTarget.name] === '' || arr[index.currentTarget.name] === true) {
            arr[index.currentTarget.name] = false
			//document.getElementById('response').appendChild(document.createTextNode(arr[index.currentTarget.name]) )
        } else {
            arr[index.currentTarget.name] = true
			//document.getElementById('response').appendChild(document.createTextNode(arr[index.currentTarget.name]))
        }

        setParam(arr)
		//document.getElementById('response').appendChild(document.createTextNode(param.length))
		var io = 1
		arr.unshift()
		/*arr.forEach((el) => {
			console.log({el})
			console.log(io)
			io++
		})*/
		arr.map(el => {
			// eslint-disable-next-line
			//if (el === '') return
			document.getElementById('response').appendChild(document.createTextNode(arr[el]))
			//params1[`${params[index].param}`] = el
			
			//document.getElementById('response').appendChild(document.createTextNode("el"))
		})
		console.log(arr)

		
    }

	
	async function executeMethod(){
		renderjson.set_show_to_level(30)
		let params1={}
		params1["pol"] = Input.date
try{
	param.map((el, index) => {
		// eslint-disable-next-line
		if (params.length === index || el === '') return
		if (params[index].type === 'integer') {
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
			   onChange={(e) => onChange(e)}
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
        onChange={(e) => actionCheckbox(e)}
      >
        черный
      </Checkbox>
      
      <Checkbox
	  name='beliy'
	  value={'белый'}
	  onChange={(e) => actionCheckbox(e)}
      >
        белый
      </Checkbox>
	  <Checkbox
	  name='rihiy'
	  value={'рыжий'}
	  onChange={(e) => actionCheckbox(e)}
      >
        рыжий
      </Checkbox>
	  <Checkbox
	  name='seriy'
	  value={'бежсерыйевый'}
	  onChange={(e) => actionCheckbox(e)}
      >
        серый
      </Checkbox>
	  <Checkbox
	  name='begeviy'
	  value={'бежевый'}
        //checked={disabled4}
        onChange={(e) => actionCheckbox(e)}
      >
        бежевый
      </Checkbox>
	  <Checkbox
	  name='korih'
	  value={'коричневый'}
	  onChange={(e) => actionCheckbox(e)}
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
