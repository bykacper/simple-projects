import React, { useEffect, useState } from "react";
import closePic from '../images/close.png';

export default function Table( { table } ) {
    const [tableId, setTableId] = useState(null);
    const [tableInfoVisibility, setTableInfoVisibility] = useState(false);
    const [bookVisibility, setBookVisibility] = useState(true);
    const [reservationVisibility, setReservationVisibility] = useState(false);
    
    const showTableInfo = () => {
        setTableInfoVisibility(true);
    }

    const hideTableInfo = event => {
        event.stopPropagation();
        setTableInfoVisibility(false);
    }

    const showReservations = () => {
        setReservationVisibility(true);
        setBookVisibility(false);
    }
    
    const showBooks = () => {
        setReservationVisibility(false);
        setBookVisibility(true);
    }
 

    useEffect(() => {
        setTableId(table);
    }, [tableId])

    return (
        <div className="table" onClick={showTableInfo}>
            { tableInfoVisibility && (
                <section className="table-info">
                    <div>
                        <img src={closePic} alt="close" onClick={hideTableInfo}/>
                        <button onClick={showBooks}> zarezerwuj </button>
                        <button onClick={showReservations}> rezerwacje </button>
                    </div>
                    <div>
                        {bookVisibility && (
                        <div className="book">
                            tu mozna zarezerwowac {tableId}
                        </div>
                        )}
                        {reservationVisibility && (
                        <div>
                            tu mozna zobaczyc rezerwacje dla {tableId}
                        </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    )
}