import Hero from "./Hero";
import {useState} from "react";


function Reservations() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numberDiners, setNumberDiners] = useState("");
    const [occasion, setOccasion] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const getIsFormValid = () => {
        return (
            date &&
            time &&
            (numberDiners % 1 == 0) &&
            firstName &&
            lastName &&
            phoneNumber &&
            email
        )
    }

    const clearForm = () => {
        setDate("");
        setTime("");
        setNumberDiners("");
        setOccasion("occasion");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation submitted!");
        clearForm();
    }

    return (
        <>
            <Hero prompt="Online Menu" link="/menu"></Hero>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <section>
                        <img src="./images/tables.png"></img>
                        <h1>Reserve A Table</h1>
                        <div className="Field">
                            <label>Date</label>
                            <input 
                                type="date" 
                                value={date} 
                                placeholder="- - / - - / - - - -"
                                onChange={(e) => {setDate(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field">
                            <label>Time</label>
                            <input 
                                type="time" 
                                value={time} 
                                placeholder="- - : - -"
                                onChange={(e) => {setTime(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field">
                            <label>Number of Diners</label>
                            <input 
                                type="number" 
                                value={numberDiners} 
                                placeholder="1"
                                onChange={(e) => {setNumberDiners(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field">
                            <label>Occasion</label>
                            <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="general">General</option>
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>
                            </select>
                        </div>
                    </section>
                    <section>
                        
                        <h1>Contact Information</h1>
                        <div className="Field">
                            <label>First Name</label>
                            <input 
                                type="text" 
                                value={firstName} 
                                placeholder="First Name"
                                onChange={(e) => {setFirstName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field">
                            <label>Last Name</label>
                            <input 
                                type="text" 
                                value={lastName} 
                                placeholder="Last Name"
                                onChange={(e) => {setLastName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field">
                            <label>Phone Number</label>
                            <input 
                                type="tel" 
                                value={phoneNumber} 
                                placeholder="Phone Number"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                onChange={(e) => {setPhoneNumber(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field">
                            <label>Email</label>
                            <input 
                                type="email" 
                                value={email} 
                                placeholder="Email"
                                onChange={(e) => {setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <img src="./images/tray.png"></img>
                        <button type="submit" disabled={!getIsFormValid}>Submit Reservation</button>
                    </section>
                </fieldset>
            </form>
        </>
    )
}

export default Reservations; 