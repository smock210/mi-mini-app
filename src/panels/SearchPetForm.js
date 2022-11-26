
import bridge from '@vkontakte/vk-bridge';
import { RadioGroup, Radio, Group, FormItem, Input, Checkbox, Select, CustomSelectOption, Div, Button, Header, Card, PanelHeader,View, Textarea} from '@vkontakte/vkui';
import React, { useEffect, useState, Image  } from "react";
import { connect } from 'react-redux'
import { infoMethod } from "../function/infoMethod"
import { infoParam } from "../function/infoParam"
import renderjson from "renderjson"
import "../css/pet.css"

//56412b1556412b1556412b15cb55500bcd5564156412b153510140686208a50ef42d93d
//56412b1556412b1556412b15cb55500bcd5564156412b153510140686208a50ef42d93d
//FvVazPtqPA6qdIDCKEfA
function SearchPetForm({ router }) {


	const [falseDogName, setSfalseDogName] = useState(true)
	const [falseDogDate, setSfalseDogDate] = useState(true)

	const [section, setSection] = useState(null)
	const [returnApi, setreturnApi] = useState(null)
	const [use_method, setUseMethod] = useState(false)
	const [disabledButtonMethod, setDisabledButtonMethod] = useState(false)
	const [textButtonMethod, setTextButtonMethod] = useState(true)
	const [param, setParam] = useState(
		[
		])

	useEffect(() => {
		setParam([

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

		if (arr[index.currentTarget.name] === '') {
			arr[index.currentTarget.name] = index.currentTarget.value
		} else {
			arr[index.currentTarget.name] = ""
		}

		setParam(arr)

	}
	async function onChangeInputsDog(e) {
		const { value } = e.currentTarget;

		let arr = param
		arr[e.currentTarget.name] = e.currentTarget.value
		setParam(arr)
		sleep(1)
		if (e.currentTarget.name === "dogName") {
			setSection(e.currentTarget.value)
			setSfalseDogName(true)

		} else {
			setSection(null)
			//setSfalseDogName(false)

		}

		console.log(arr)

		setUseMethod(false)
		setTextButtonMethod(true)
		setDisabledButtonMethod(false)
	}

	async function onChangeInputs(e) {
		const { value } = e.currentTarget;

		let arr = param
		arr[e.currentTarget.name] = e.currentTarget.value
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
		} else {
			arr[index.currentTarget.name] = true
		}

		setParam(arr)
	}

	function actionRadio(index) {

		setUseMethod(false)
		setTextButtonMethod(true)
		setDisabledButtonMethod(false)
		let arr = param
		console.log(param.includes(index.currentTarget.name))
		arr[index.currentTarget.name] = index.currentTarget.value
		setParam(arr)
	}

	function addBlock(el) {
		return (
			<FormItem top={el.copy_history.text}>

			</FormItem>
		)
	}


	async function executeMethod() {
		renderjson.set_show_to_level(30)
		let params1 = {}
		console.log(param["datePet"])
		if (param["dogName"] === "" || param["dogName"] == null) {
			setSfalseDogName(false)
			return
		}
		if (param["datePet"] === "" || param["datePet"] == null) {
			setSfalseDogDate(false)
			return
		}
		try {
			infoParam.map((el, index) => {
				if (param[el] === '' || el.length < 2) { }
				else {
					params1[`${el}`] = param[el]

				}
				params1["type1"] = "#обнаружена"
				params1["v"] = "5.131"
				params1["access_token"] = "56412b1556412b1556412b15cb55500bcd5564156412b153510140686208a50ef42d93d"



			})

			let response = await bridge.send("VKWebAppCallAPIMethod", { "method": "execute.getMessagPet", "params": params1 });

			window.responseApi = response
			let items = response.response.items
			setreturnApi(items)
			console.log(response)

		} catch {
			//document.getElementById('response').appendChild("Error")
		}


	}


	return (
		<div>

			<div>

				<Group>
					<FormItem top="Сообщить о пропаже">
						<FormItem top="Введите дату пропажи:" bottom={falseDogDate ? "" : "поле обязательно для заполнения"}>
							<Input
								type="date"
								name='datePet'
								defaultValue=""
								//max={Now()}
								onChange={(e) => onChangeInputs(e)}
								placeholder="Enter your name"
								size={60}
							/>

						</FormItem>
						<FormItem top="Выбирете пол пропавшей собаки:">
							<RadioGroup>
								<Radio name="polPropValG" value="m" onChange={(e) => actionRadio(e)} defaultChecked>
									Мальчик
								</Radio>
								<Radio name="polPropValG" value="g" onChange={(e) => actionRadio(e)}>
									Девочка
								</Radio>

							</RadioGroup>
						</FormItem>
						<Group>
							<FormItem className='petFromItem' top="Выбирите Вашу породу из списка. Если ее не нашли в списке, выбирите 'моей породы нет в списке' и впишите ее руками в дополнительное поле
		Если вы не знаете породу или у собаки ее нет, то выбирите 'не могу определить породу'"
								bottom={falseDogName ? "" : "поле обязательно для заполнения"}>
								<Select
									name='dogName'
									placeholder=''
									options={infoMethod.map((el, index) => ({
										label: el.title,
										value: el.title,

									}))}
									renderOption={({ option, ...restProps }) => (
										<CustomSelectOption
											{...restProps}
										/>
									)}
									onChange={(e) => onChangeInputsDog(e)}
									searchable={true}
								/>


							</FormItem>
							{section !== null &&
								<>
									{infoParam.map((el, index) => {
										if (el === 'dogName') {
											console.log(param[el])
											if (param[el] === "моей породы нет в списке") {
												console.log("start")
												return (
													<FormItem top="Введите наименование породы" >
														<Input
															name='dogNameManual'
															type='text'
															onChange={(e) => onChangeInputs(e)}

														/>
													</FormItem>
												)
											}
										}
									}
									)}
								</>}
						</Group>
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
								onClick={() => executeMethod()}
							>Поиск</Button>
						</Div>
					</FormItem>
				</Group>


				<Group header={<Header mode='secondary'>Результат поиска</Header>}>
					<Card>
						<Div>
							{returnApi !== null &&
								<>

									{returnApi.map((el) => {
										//let polPet = {param["polPropValG"]==="m" ? 'мальчик' : 'девочка'}
										//console.log(param["dogName"]!=="") date
										//console.log(param["dogName"]!=null)


										if (el.copy_history[0].text !== "" && param["dogName"] !== "" && param["dogName"] != null) {

											if (el.text.toUpperCase().includes(param["dogName"].toUpperCase())) {
												//console.log(el.date.getFullYear()+'-'+(el.date.getMonth()+1)+'-'+el.date.getDate()+' '+el.date.getHours()+':'+el.date.getMinutes()+':'+el.date.getSeconds()+'.'+el.date.getMilliseconds())
												console.log(new Date(el.date * 1000).toDateString())
												console.log(Math.floor(new Date(param["datePet"]).getTime() / 1000))
												if (el.date * 1 > Math.floor(new Date(param["datePet"]).getTime() / 1000)) {
													return (
														<FormItem className='petFromItem' key={el.id} top={el.text} >
															<Div>
																{el.copy_history[0].text}

																<Div>
																	{el.copy_history[0].attachments.map((fotoMap) =>{
																		console.log( fotoMap.type)
																		
																		if (fotoMap.type ==="photo") {
																			return (
																				<>
																				<p>otoMap.photo.sizes[2].url</p>
																				<Image 
																				source={{uri:fotoMap.photo.sizes[2].url}}

																				/>
																				console.log( fotoMap.photo.sizes[2].url)
																				</>
																			)
																		}
																	}
																	)

																	}

																</Div>
															</Div>


														</FormItem>
													)
												}
											}
										}
									}
									)}

								</>}
							<div className='scroll' id='response' />
						</Div>
					</Card>
				</Group>

			</div>
		</div>

	);


}



export default SearchPetForm;
