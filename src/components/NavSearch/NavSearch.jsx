import React, { useRef } from "react";
import styles from "./NavSearch.module.scss";

const NavSearch = () => {
	const inputRef = useRef(null);

	const onInput = () => {};

	return (
		<div className={styles["search-container"]}>
			<input
				ref={inputRef}
				placeholder="Wyszukaj notatkę"
				className={styles["search-input"]}
			/>
		</div>
	);
};

export default NavSearch;
