import { ImEye } from "react-icons/im";
import styles from "./Updates.module.css";
import { useState } from "react";

function Updates() {
  const [showDetails, setShowDetails] = useState(null);

  const updates = [
    {
      id: 1,
      title: "Page update",
      description: "Added login page",
      year: "2024-03-05",
    },
    {
      id: 2,
      title: "CSS update",
      description: "Updated catalog page CSS",
      year: "2024-03-05",
    },
    {
      id: 3,
      title: "Project card update",
      description: "Updated project card with delete function",
      year: "2024-03-06",
    },
  ];

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <div className="container">
      <h1>Updates</h1>
      <ul className="list-group">
        {updates.map((update) => (
          <li key={update.id} className="list-group-item">
            {update.id} - {update.title}
            <div
              className={`${styles.note_container} ${
                showDetails === update.id ? styles.open : ""
              }`}
            >
              {showDetails === update.id && <p>{update.description}</p>}
            </div>
            <button className="btn" onClick={() => toggleDetails(update.id)}>
              <ImEye />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Updates;
