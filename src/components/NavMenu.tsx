import Image from "next/image";
import styles from "./NavMenu.module.css";
import Link from "next/link";
import { SignInButton, SignOutButton } from "./Buttons";
import AuthCheck from "./AuthCheck";

export default function NavMenu() {
	return (
		<nav className={styles.nav}>
			<Link href={"/"}>
				<Image src={"/logo.svg"} width={216} height={30} alt="Logo" />
			</Link>
			<ul className={styles.links}>
				<li>
					<Link href={"/about"}>About</Link>
				</li>
				<li>
					<Link href={"/blog"}>Blog</Link>
				</li>
				<li>
					<Link href={"/users"}>Users</Link>
				</li>
				<li>
					<SignInButton />
				</li>
				<li>
					<AuthCheck>
						<SignOutButton />
					</AuthCheck>
				</li>
			</ul>
		</nav>
	);
}
