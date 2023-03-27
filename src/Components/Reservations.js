import Hero from "./Hero";
import { ImageAssets } from "../assets/ImageAssets";
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
            (date !== "") &&
            (time !== "") &&
            (numberDiners % 1 === 0) &&
            (firstName !== "") &&
            (lastName !== "") &&
            (phoneNumber !== "") &&
            (email !== "")
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
            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <section className="reservetable">
                        <img src={ImageAssets.restaurant} alt="tables" className="vimage roundedimage"></img>
                        <div>
                            <h1 className="black">Reserve A Table</h1>
                            <div className="inputsections">
                                <div>
                                    <div className="Field">
                                        <label>Date</label>
                                        <input 
                                            type="date" 
                                            value={date} 
                                            placeholder="- - / - - / - - - -"
                                            required
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
                                            required
                                            onChange={(e) => {setTime(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="Field">
                                        <label>Number of Diners</label>
                                        <input 
                                            type="number" 
                                            value={numberDiners} 
                                            placeholder="1"
                                            required
                                            onChange={(e) => {setNumberDiners(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="Field">
                                        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                            <option value="occasion">Occasion</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="engagement">Engagement</option>
                                            <option value="anniversary">Anniversary</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </section>
                    <section className="contactinfo">
                        <div>
                            <h1>Contact Information</h1>
                            <div className="inputsections">
                                <div>
                                    <div className="Field">
                                        <label>First Name</label>
                                        <input 
                                            type="text" 
                                            value={firstName} 
                                            placeholder="First Name"
                                            required
                                            onChange={(e) => {setFirstName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="Field">
                                        <label>Phone Number</label>
                                        <input 
                                            type="tel" 
                                            value={phoneNumber} 
                                            placeholder="Phone Number"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required
                                            onChange={(e) => {setPhoneNumber(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="Field">
                                        <label>Last Name</label>
                                        <input 
                                            type="text" 
                                            value={lastName} 
                                            placeholder="Last Name"
                                            required
                                            onChange={(e) => {setLastName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    
                                    <div className="Field">
                                        <label>Email</label>
                                        <input 
                                            type="email" 
                                            value={email} 
                                            placeholder="Email"
                                            required
                                            onChange={(e) => {setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="submit" type="submit" disabled={!getIsFormValid}>Submit Reservation</button>
                        </div>
                        <img src={ImageAssets.food} alt="food" className="vimage roundedimage"></img>
                    </section>
                </fieldset>
            </form>
        </>
    )
}

export default Reservations; 