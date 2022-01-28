import React from "react";
import styles from "./Navbar.module.scss";
import { FcIdea } from "react-icons/fc";
import NavSearch from "../NavSearch";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles["navbar-brand"]}>
				<FcIdea />
				Keep Clone
			</h1>
			<NavSearch />
		</nav>
	);
};

export default Navbar;
