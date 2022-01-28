import React from "react";
import styles from "./Navbar.module.scss";
import { FcIdea } from "react-icons/fc";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles["navbar-brand"]}>
				<FcIdea />
				Keep Clone
			</h1>
			<div className={styles["search-container"]}>
				<input
					placeholder="Wyszukaj notatkę"
					className={styles["search-input"]}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
