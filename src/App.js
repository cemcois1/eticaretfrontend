import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import "./Components/Products.css"

const DUMMY_PRODUCT_DATAS = [
    {id: "1", title: "tuvalet kağıdı", amount: 94.12, description: "this is description", category: "ev"},
    {id: "2", title: "TV", amount: 799.4, description: "this is description", category: "ev"},
    {id: "3", title: "Simit", amount: 12.6, description: "this is description", category: "yemek"},
    {id: "4", title: "buzdolabı", amount: 56.12, description: "this is description", category: "ev"},
    {id: "5", title: "bisiklet", amount: 40.06, description: "this is description", category: "arac"},
    {id: "6", title: "ekmek", amount: 40.06, description: "this is description", category: "yemek"},
    {id: "7", title: "süt", amount: 40.06, description: "this is description", category: "yemek"},
    {id: "8", title: "kapı kolu", amount: 40.06, description: "this is description", category: "ev"}
]

const App = () => {


    return (
        <div className="products">

            <Products itemDatas={DUMMY_PRODUCT_DATAS}/>
        </div>
    );
}

export default App;
