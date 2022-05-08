import React, {useState} from "react";
import Product from "./Product";
import ProductFilter from "./ProductFilter";

const Products = (props) => {
    const [filtredCategory, setFiltredCategory] = useState('All')
    const categories = props.itemDatas.map((itemdata) => itemdata.category)

    const filterChangeHandler = Category => {
        console.log(Category);
        setFiltredCategory(Category);
    }
    const filtredDatas = () => {
        return props.itemDatas.filter(itemdata=>{
            if (filtredCategory=="All")return true;
            if (itemdata.category==filtredCategory){
                return true
            }
        }).map((itemData) => {
            console.log(itemData)
                return (

                    <div key={itemData.id}><Product id={itemData.id} title={itemData.title} price={itemData.amount}/>
                    </div>)
            }
        );
    }
    if (props.itemDatas.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found</h2>;
    }
    return (
        <div>
            <ProductFilter sellectedCategory={filtredCategory} onChangeFilter={filterChangeHandler}/>
            {filtredDatas()}
        < /div>)
}

export default Products;