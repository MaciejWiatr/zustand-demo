import React from "react";
import NoteItem from "../NoteItem";
import styles from "./NotesList.module.scss";

const NotesList = () => {
	return (
		<div className={styles["note-list__container"]}>
			<NoteItem>Test</NoteItem>
		</div>
	);
};

export default NotesList;
