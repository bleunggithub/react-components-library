import Link from "next/link"
import { NavContainer, NavUl, NavLi } from "./styled"

const Navbar = () => {
	return (
		<NavContainer>
			<NavUl>
				<NavLi>
					<Link href="/">Components</Link>
				</NavLi>
				<NavLi>
					<Link href="/about">About</Link>
				</NavLi>
			</NavUl>
		</NavContainer>
	)
}

export default Navbar
