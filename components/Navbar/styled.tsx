import styled from "styled-components"

export const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
	padding-top: 1rem;
`
export const NavUl = styled.ul`
	list-style: none;
	display: flex;
`
export const NavLi = styled.li`
	margin: 0 1rem;
	padding: 0 1rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	&:hover {
		background: linear-gradient(to top, #27272780 40%, transparent 40%);
	}
`
