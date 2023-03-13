import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../layout/DefaultLayout"
import { Home } from "../pages/Home"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="home" element={<Home />}/>
                <Route path="checkout" />
                <Route path="success" />
            </Route>
        </Routes>
    )
}