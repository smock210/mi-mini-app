
function SearchPetForm(){
	return(
		<div>
<h1>Сообщить о пропаже</h1>
<div>
<label className="datePropLabel">Введите дату пропажи</label>
<input className='datePropVal'></input>

</div>
<div>
<label className="textName">Выбирите породу</label>
<select>
<option value="1">Хаски</option>
<option value="2">Лобрадор</option>
<option value="3">Тресущая головой</option>

</select>
</div>
</div>

	);

}



export default SearchPetForm;
