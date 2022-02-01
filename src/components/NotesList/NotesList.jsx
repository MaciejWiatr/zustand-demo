import React from "react";
import NoteItem from "../NoteItem";
import styles from "./NotesList.module.scss";

const NotesList = () => {
	return (
		<div className={styles["note-list__container"]}>
			<NoteItem>Testowa notatka</NoteItem>
		</div>
	);
};

export default NotesList;
