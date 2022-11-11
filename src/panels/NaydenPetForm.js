
function NaydenPetForm(){
	return(
		<div>
<h1>Сообщить о пропаже</h1>
<div>
<label className="datePropLabel">Введите дату пропажи:</label><br/>
<input className='datePropVal'></input>

</div>
<div>
<label className="textName">Выбирите породу:</label><br/>
<select>
<option value="1">Не могу определить</option>
	<option value="2">Хаски</option>
	<option value="3">Лобрадор</option>
	<option value="4">Тресущая головой</option>
</select>
</div>
<div>
<label className="polPropLabel">Выбирете пол пропавшей собаки:</label><br/>
<input className='polPropValM' id="polPropValM" type="radio" 
     name="pol"></input>
	 <label htmlFor="polPropValM">Кобель</label><br/>
	 <input className='polPropValG' id="polPropValG" type="radio" 
     name="pol"></input>
	 <label htmlFor="polPropValG">Сучка</label>


</div>
<div>
<label className="colorPropLabel">Окрас:</label><br/>
<input className='colorPropVal'></input>

</div>

<div>
<label className="primetPropLabel">Приметы:</label><br/>
<input className='porimetPropVal'></input>

</div>
</div>

	);

}



export default NaydenPetForm;
