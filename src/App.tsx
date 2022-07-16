import React, { ReactElement } from "react"
import { Layout } from "antd"

// Components
import Hero from "./components/hero"

// Constants
import { colors } from "./constants/colors"

// Styles
import "./App.css"
import { SContainer } from "./layout/layout.styles"

const { Header, Footer, Content } = Layout

const App: React.FC = (): ReactElement => {
    return (
        <>
            <SContainer fluid>
                <Header>
                    <Hero />
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </SContainer>
            {/* <Layout style={{ background: colors.BACKGROUND, minHeight: "100vh" }}>
                <Header>
                    <Hero />
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout> */}
        </>
    )
}

export default App
