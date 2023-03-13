import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header"
import { Layout } from "./styles"

export const DefaultLayout = () => {
    return (
        <Layout>
            <Header/>
            <Outlet/>
        </Layout>
    )
}