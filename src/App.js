import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Dishes } from './Components/DishDetailComponent';

function App() {
    return ( <
        div className = "App" >
        <
        Navbar dark color = "primary" >
        <
        div className = "container" >
        <
        NavbarBrand href = "/" > EXTRA BLATT RESTURANT < /NavbarBrand> <
        Dishes / >
        <
        /div> <
        /Navbar> <
        /div>
    );
}
export default App;