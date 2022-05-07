import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import "./Components/Products.css"
const DUMMY_PRODUCT_DATAS = [
    {id: "1", title: "Toilet Paper", amount: 94.12, description: "this is description"},
    {id: "2", title: "New TV", amount: 799.4, description: "this is description"},
    {id: "3", title: "Food", amount: 12.6, description: "this is description"},
    {id: "4", title: "Gas", amount: 56.12, description: "this is description"},
    {id: "5", title: "Electric", amount: 40.06, description: "this is description"}
]

const App = () => {
    return (
        <div className="products">
            <Products itemDatas={DUMMY_PRODUCT_DATAS}/>
        </div>
    );
}

export default App;
