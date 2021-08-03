import React, { useState } from 'react'

import { calcularTotal } from '../helpers/calcularTotal';

const Formulario = ( props ) => {

    const { cantidad, setCantidad, plazo, setPlazo, setTotal, setCargando } = props;

    const [error, setError] = useState(false);

    const leerCantidad = (e) => setCantidad( Number(e.target.value) );

    const leerPlazo = (e) => setPlazo( Number(e.target.value) );

    const calcularPrestamo = ( e ) => {

        e.preventDefault();

        // Validar
        if ( !cantidad || !plazo ) {
            setError(true);
            return
        }

        // Eliminar error previo
        setError(false);

        setCargando(true);

        setTimeout(() => {

            // Realizar cotizacion
            const total = calcularTotal( cantidad, plazo );

            // Guardar Total
            setTotal( total );

            setCargando(false);

        }, 2000);

    }
    
    return (
        <div>
            <form onSubmit={ calcularPrestamo }>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ leerCantidad } 
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ leerPlazo }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            { error && <p className="error">Todos los campos son obligatorios</p> }

        </div>
    )
}

export default Formulario;
