import React from 'react';
import PropTypes from 'prop-types';

import {Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import SearchPetForm from './SearchPetForm';


const SearchPet = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Сообщить о пропаже
			<SearchPetForm/>
		</PanelHeader>		
	</Panel>
);

SearchPet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SearchPet;
