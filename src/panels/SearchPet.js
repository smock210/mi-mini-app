import React from 'react';
import PropTypes from 'prop-types';

import {Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import SearchPetForm from './SearchPetForm';
import Calendar from './Calendar';



const SearchPet = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Сообщить о пропаже
			
		</PanelHeader>	
		
		<SearchPetForm/>	
	</Panel>
);
			
		

SearchPet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SearchPet;
