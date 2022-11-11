import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import NaydenPetForm from './NaydenPetForm';


const Nayden = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Заявить о найденом питомце
		</PanelHeader>
		<NaydenPetForm/>
	</Panel>
);

Nayden.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};



export default Nayden;
