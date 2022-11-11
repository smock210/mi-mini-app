
import bridge from '@vkontakte/vk-bridge';
import {DatePicker, Group,FormItem,Input, Div} from '@vkontakte/vkui';
import React, { useEffect, useState } from "react";


function Calendar(){
	const [startDate, setStartDate] = useState(new Date());
	return(
		<Group>
			<FormItem top="Дата пропажи">
	<div>
		
	<Input
               type="date"
			   defaultValue=""
               placeholder="Enter your name"
               className="dateprop1"
			   size={60}
            />
			</div>
	</FormItem>
	</Group>
	
	);

}



export default Calendar;
