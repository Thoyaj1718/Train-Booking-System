import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrainById } from "../../api";

const BookDetail = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        console.log("trainId:", trainId)
        const { data } = await getTrainById(trainId);
        console.log("Train Data:", data)
        setTrain(data);
      } catch (error) {
        console.error("Error fetching train:", error);
      }
    };

    if (trainId) fetchTrain();
  }, [trainId]);

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Train Number: {train?.trainNumber || "Loading..."}</p>
      <p>Train Name: {train?.name || "-"}</p>
      <p>From: {train?.startpoint || "-"}</p>
      <p>To: {train?.destination || "-"}</p>
    </div>
  );
};

export default BookDetail;