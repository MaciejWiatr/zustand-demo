import React from "react";
import styles from "./NoteItem.module.scss";

const NoteItem = ({ children, archived }) => {
	return (
		<div
			className={`${styles["note-list__item"]} ${
				archived && styles["archived"]
			}`}
		>
			<i className={styles["archived__badge"]}>
				{archived && "Zarchiwizowano"}
			</i>
			{children}
		</div>
	);
};

export default NoteItem;
