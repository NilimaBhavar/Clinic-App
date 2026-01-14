import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phoneNumber: "",
        gender: "",
        password: "",
        appointmentDate: "",
        diagnosis: "not done yet",
    });

    const handleUpdate = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const getAppointment = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(
                "http://localhost:8000/api/patients/book-appointment",
                formData
            );
            if (response.status === 201) {
                toast.success("Appointment done");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                                <h4>
                                    BOOK <span>APPOINTMENT</span>
                                </h4>
                                <div className="form-row">
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="firstName"
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                        />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="lastName"
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                        />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="age">Age</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="age"
                                            type="number"
                                            className="form-control"
                                            id="age"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="gender">Gender</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="gender"
                                            type="text"
                                            className="form-control"
                                            id="gender"
                                        />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="phoneNumber"
                                            type="text"
                                            className="form-control"
                                            id="phoneNumber"
                                        />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            id="password"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-4">
                                        <label htmlFor="appointmentDate">Date</label>
                                        <input
                                            onChange={handleUpdate}
                                            name="appointmentDate"
                                            type="date"
                                            className="form-control"
                                            id="appointmentDate"
                                        />
                                    </div>
                                </div>

                                <div className="btn-box">
                                    <button
                                        onClick={getAppointment}
                                        type="submit"
                                        className="btn"
                                    >
                                        Book
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
