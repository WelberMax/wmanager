import { Link } from "react-router-dom";

import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import styles from "./ProjectCard.module.css";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  }
  return (
    <div className={styles.project_card}>
      <div>
        <h4>{name}</h4>
        <p>
          <span>Orçamento: </span> R${budget}
        </p>
        <p className={styles.category_text}>
          <span className={`${styles[category.toLowerCase()]}`}> </span>{" "}
          {category}
        </p>
      </div>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}> <MdModeEdit /> Editar   </Link>
        <button onClick={remove}>
          <RiDeleteBinLine /> Remover
        </button>
      </div>
    </div>
  );
}
export default ProjectCard;
