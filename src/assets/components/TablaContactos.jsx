import PropTypes from 'prop-types';

const TablaContactos = ({ contactos = [], dispatch, setData, setContactoEditar }) => {
    const handleDelete = (id) => {
        const deleteAction = {
            type: "delete",
            payload: id,
        };
        dispatch(deleteAction);
    };

    const handleEdit = (contacto) => {
        setContactoEditar(contacto); 
    };

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Números</th>
                    <th>Sexo</th>
                    <th>Cumpleaños</th>
                    <th>Edad</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map((contacto) => (
                    <tr key={contacto.id}>
                        <td>
                            <img
                                src={contacto.imagen}
                                alt="Avatar"
                                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                            />
                        </td>
                        <td>{contacto.id}</td>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.numero}</td>
                        <td>{contacto.sexo}</td>
                        <td>{contacto.cumpleaños}</td>
                        <td>{calculateAge(contacto.cumpleaños)}</td>
                        <td>
                            <button
                                onClick={() => handleDelete(contacto.id)}
                                className="btn btn-danger"
                            >
                                Eliminar
                            </button>
                            <button
                                onClick={() => handleEdit(contacto)}
                                className="btn btn-warning"
                            >
                                Modificar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TablaContactos.propTypes = {
    contactos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        numero: PropTypes.string.isRequired,
        sexo: PropTypes.string,
        cumpleaños: PropTypes.string,
        imagen: PropTypes.string
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    setContactoEditar: PropTypes.func.isRequired,
};

export default TablaContactos;
