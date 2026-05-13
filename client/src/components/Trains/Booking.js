import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBook, getTrainById } from "../../api/index";
import "./Booking.css";

const Booking = () => {
  const { trainId } = useParams();
  const user = useSelector((state) => state.user);

  const [train, setTrain] = useState(null);
  const [form, setForm] = useState({
    name: "",
    age: "",
    date: "",
    classType: "",
  });

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const { data } = await getTrainById(trainId);
        console.log(data);
        setTrain(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrain();
  }, [trainId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        userId: user?.id,
        trainId,
        trainNumber: train?.trainNumber,
        name: form.name,
        age: form.age,
        date: form.date,
        classType: form.classType,
      };

      const { data } = await createBook(payload);
      console.log(data);

      alert(
        "Your train booking is confirmed successfully. The booking details, including your PNR and travel information, will be shared soon on your registered phone number via SMS."
      );

      setForm({
        name: "",
        age: "",
        date: "",
        classType: "",
      });
    } catch (error) {
      console.error(error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2>Book Your Train</h2>
        <p className="train-id">
          Train Number: {train?.trainNumber || "Loading..."}
        </p>

        <form className="booking-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Passenger Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          <select
            name="classType"
            value={form.classType}
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            <option value="sleeper">Sleeper</option>
            <option value="ac">AC</option>
            <option value="general">General</option>
          </select>
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;