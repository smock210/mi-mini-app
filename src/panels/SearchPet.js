import React from 'react';
import PropTypes from 'prop-types';

import { Input, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const SearchPet = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Сообщить о пропаже
		</PanelHeader>

		<Group header={<Header mode="secondary">Сообщить о пропаже</Header>}>
		<Div>
				<Input stretched size="l" mode="secondary" >
					
				</Input>
				<Input stretched size="l" mode="secondary" >
					
				</Input>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" /*onClick={go} data-to="publicSearch"*/>
					разместить сообщение о пропаже
				</Button>
			</Div>
		</Group>
		
	</Panel>
);

SearchPet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SearchPet;
