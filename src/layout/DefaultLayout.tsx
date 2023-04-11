import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header"
import { Layout } from "./styles"


export const DefaultLayout = () => {
    const location = window.location.href.split("/").includes("checkout")   

    return (
        <Layout>
            <Header homeHeader={location ? false : true}/>
            <Outlet/>
        </Layout>
    )
}