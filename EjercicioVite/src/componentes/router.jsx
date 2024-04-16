// Recibe la ruta y renderiza el componente
import Home from "../view/home"
import Info from "../view/info"

function Router({ ruta }) {
    switch (ruta) {
        case "/home":
            return <Home></Home>
        case "/info":
            return <Info></Info>
        default:
            return (
                <div>
                </div>
            )
    }
}

export default Router