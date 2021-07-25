import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Dishes } from './Components/DishDetailComponent';
import { Menu } from './Components/MenuComponent';

function App() {
    return ( <
        div >
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
        Menu / >
        <
        /div>
    );
}
export default App;