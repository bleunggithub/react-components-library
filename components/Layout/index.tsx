import Head from "next/head"
import Navbar from "../Navbar"
import { Container } from "./styled"

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container>
			<Head>
				<title>React Component Library</title>
				<meta
					name="keywords"
					content="react, components, library, nextjs, typescript"
				/>
				<meta
					name="description"
					content="react components library in typescript and nextjs"
				/>
			</Head>
			<Navbar />
			{children}
		</Container>
	)
}

export default Layout
