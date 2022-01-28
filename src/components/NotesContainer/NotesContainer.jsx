import React from "react";
import styles from "./NotesContainer.module.scss";

const NotesContainer = ({ children }) => {
	return <section className={styles["notes-container"]}>{children}</section>;
};

export default NotesContainer;
