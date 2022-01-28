import React from "react";
import NoteItem from "../NoteItem";
import styles from "./NotesList.module.scss";

const NotesList = () => {
	return (
		<div className={styles["note-list__container"]}>
			<NoteItem>Test długi taki bardzo długi lol jaki długi</NoteItem>
		</div>
	);
};

export default NotesList;
