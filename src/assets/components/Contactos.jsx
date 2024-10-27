import { useReducer, useState } from 'react';
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos';
import contactosReducer from '../../reducers/ContactosReducer';

const Contactos = () => {
    const [contactos, dispatch] = useReducer(contactosReducer, []);
    const [contactoEditar, setContactoEditar] = useState(null); // Nuevo estado para editar

    return (
        <div className="container">
            <FormularioAdd 
                dispatch={dispatch} 
                contactoEditar={contactoEditar} 
                setContactoEditar={setContactoEditar} 
            />
            <TablaContactos 
                contactos={contactos} 
                dispatch={dispatch} 
                setContactoEditar={setContactoEditar} 
            />
        </div>
    );
};

export default Contactos;
