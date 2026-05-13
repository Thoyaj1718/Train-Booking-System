import "./trainitem.css";
import { useSelector } from "react-redux";
import { createBook } from "../../api/index";
import { useNavigate } from "react-router-dom";

const TrainItem = (props) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const buttonClick = async (e) => {
    e.preventDefault();

    if (!user?.id) return;

    const { data } = await createBook(user.id, props.train._id);
    console.log(data);

    navigate(`/booking/${props.train._id}`);
  };

  const buttonVisibility = () => {
    if (user?.name) return { visibility: "visible" };
    return { visibility: "hidden" };
  };

  return (
    <div className="train-item">
      <div className="train-left">
        <h2 id="train-name">{props.train?.name || "Unknown Train"}</h2>
        <h3 id="start-destination">
          From : {props.train?.startpoint || "-"} - To: {props.train?.destination || "-"}
        </h3>
      </div>

      <div className="train-right">
        <h3 className="train-number-text">
          Train Number : {props.train?.trainNumber || "N/A"}
        </h3>
        <h3 id="price">Ticket Price: {props.train?.price || "N/A"} rs</h3>
        <button style={buttonVisibility()} onClick={buttonClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TrainItem;