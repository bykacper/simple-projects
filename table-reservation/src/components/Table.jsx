import React, { useEffect, useState } from "react";
import closePic from '../images/close.png';

export default function Table({ table }) {
    const [tableId, setTableId] = useState(null);
    const [tableInfoVisibility, setTableInfoVisibility] = useState(false);
    const [bookVisibility, setBookVisibility] = useState(true);
    const [reservationVisibility, setReservationVisibility] = useState(false);
    const [reservedHours, setReservedHours] = useState([]);
    const [unavailableHours, setUnavailableHours] = useState([]);

    useEffect(() => {
        setTableId(table); 
    }, []);

    const hideTableInfo = (event) => {
        event.stopPropagation();
        setTableInfoVisibility(false);
    };

    const showReservations = () => {
        setReservationVisibility(true);
        setBookVisibility(false);
    };

    const showBooks = () => {
        setReservationVisibility(false);
        setBookVisibility(true);
    };

    const addReservation = (newHour) => {
        const isUnavailable = unavailableHours.includes(newHour);

        if (isUnavailable) {
            alert(`${newHour} jest niedostępna.`);
        } else {
            setReservedHours(prevHours => {
                if (prevHours.includes(newHour))
                    return prevHours;
                return [...prevHours, newHour];
            });
        }
    }

    return (
        <div className="table" onClick={() => setTableInfoVisibility(true)}>
            {tableInfoVisibility && (
                <section className="table-info">
                    <div>
                        <img src={closePic} alt="close" onClick={hideTableInfo} />
                        <button onClick={showBooks}>Zarezerwuj</button>
                        <button onClick={showReservations}>Rezerwacje</button>
                    </div>
                    <div>
                    {bookVisibility && (
                        <BookingSection 
                            tableId={tableId} 
                            setReservedHours={(newHour) => addReservation(newHour)} />
                    )}
                        {reservationVisibility && (
                            <Reservations tableId={tableId}
                                        reservedHours={reservedHours}/>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}

function BookingSection({ tableId, setReservedHours }) {
    const [booker, setBooker] = useState("");
    const [hour, setHour] = useState("");

    const reserveTable = () => {
        if (!booker || !hour) {
            alert("Proszę wypełnić wszystkie pola.");
            return;
        }

        setReservedHours(hour);
    };

    return (
        <div className="book">
            <div>
                <label htmlFor="bookerName">Imię rezerwującego:</label>
                <input
                    type="text"
                    name="bookerName"
                    onChange={(e) => setBooker(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="bookingHour">Rezerwowana godzina:</label>
                <input
                    type="time"
                    name="bookingHour"
                    onChange={(e) => setHour(e.target.value)}
                />
            </div>
            <button className="bookButton" onClick={reserveTable}>
                Rezerwuj
            </button>
        </div>
    );
}

function Reservations({ reservedHours }) {

    return (
        <div>
            <div>
            {reservedHours.length > 0 ? (
                reservedHours.map(hour => (
                    <div>
                        gość zarezerwował(a) na godzinę {hour}.
                    </div>
                ))
            ) : (
                <div>Brak rezerwacji.</div>
            )}
            </div>
        </div>
    )
}