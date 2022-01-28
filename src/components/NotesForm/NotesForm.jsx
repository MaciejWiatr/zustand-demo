import React, { useRef } from "react";
import styles from "./NotesForm.module.scss";

const NotesForm = () => {
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
	};

	return (
		<div className={styles["form-container"]}>
			<form onSubmit={handleSubmit} className={styles["form"]}>
				<input
					ref={inputRef}
					placeholder="Utwórz nową notatkę"
					className={styles["form-input"]}
				/>
				<button className={styles["form-button"]}>Dodaj</button>
			</form>
		</div>
	);
};

export default NotesForm;
