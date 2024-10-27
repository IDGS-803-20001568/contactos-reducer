import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioAdd = ({ dispatch, contactoEditar, setContactoEditar }) => {
    const [data, setData] = useState({ nombre: "", numero: "", sexo: "", cumpleaños: "", imagen: "" });
    const { nombre, numero, sexo, cumpleaños, imagen } = data;

    useEffect(() => {
        if (contactoEditar) {
            setData(contactoEditar);
        } else {
            setData({ nombre: "", numero: "", sexo: "", cumpleaños: "", imagen: "" });
        }
    }, [contactoEditar]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleAddOrEdit = () => {
        if (contactoEditar) {
            // Acción de editar
            const actionEdit = {
                type: "edit",
                payload: { ...data }
            };
            dispatch(actionEdit);
            setContactoEditar(null); 
        } else {
            const actionAdd = {
                type: "add",
                payload: {
                    id: uuid(),
                    nombre,
                    numero,
                    sexo,
                    cumpleaños,
                    imagen
                }
            };
            dispatch(actionAdd);
        }
        setData({ nombre: "", numero: "", sexo: "", cumpleaños: "", imagen: "" });
    };

    return (
        <div className="container">
            <label className="mx-1 d-grid gap-2">
                Nombre: {" "}
                <input
                    onChange={handleChange}
                    name='nombre'
                    value={nombre}
                    type="text"
                    className="form-control" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Número: {" "}
                <input
                    onChange={handleChange}
                    name='numero'
                    value={numero}
                    type="text"
                    className="form-control" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Sexo: {" "}
                <select
                    onChange={handleChange}
                    name='sexo'
                    value={sexo}
                    className="form-control">
                    <option value="">Selecciona</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
            </label>
            <label className="mx-1 d-grid gap-2">
                Cumpleaños: {" "}
                <input
                    onChange={handleChange}
                    name='cumpleaños'
                    value={cumpleaños}
                    type="date"
                    className="form-control" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Imagen (URL): {" "}
                <input
                    onChange={handleChange}
                    name='imagen'
                    value={imagen}
                    type="text"
                    className="form-control" />
            </label>
            <div className="mx-1 d-grid gap-2">
                <button onClick={handleAddOrEdit} className="btn btn-info mt-2">
                    {contactoEditar ? "Guardar cambios" : "Agregar"}
                </button>
            </div>
        </div>
    );
};

export default FormularioAdd;
