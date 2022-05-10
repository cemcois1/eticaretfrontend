import React, {useState} from "react";
import Product from "./Product";
import ProductFilter from "./ProductFilter";
import ProductSorter from "./ProductSorter";

const Products = (props) => {
    const [filtredCategory, setFiltredCategory] = useState('All')
    const [sortingType, setsortingType] = useState('None')
    const filterChangeHandler = Category => {
        console.log(Category);
        setFiltredCategory(Category);
    }
    const sortingChangeHandler = Type => {
        console.log(Type);
        setsortingType(Type);
    }


    const rawData = props.itemDatas

    const filteredData = props.itemDatas.filter(itemdata => {
        if (filtredCategory == "All") return true;
        if (itemdata.category == filtredCategory) {
            return true
        }
    })

    const sortedData = () => {
        if (sortingType === "None") {
        }
        if (sortingType === "expensive to cheap") {
            filteredData.sort((item1, item2) => item1.amount > item2.amount ? -1 : 1)
        }
        if (sortingType === "cheap to expensive") {
            filteredData.sort((item1, item2) => item1.amount > item2.amount ? 1 : -1)
        }
        return filteredData
    }

    const showedDatas = sortedData()
    const showableProduct = () => showedDatas.map((itemData) => {
        return (
            <div key={itemData.id}><Product AddtoCart={props.onItemAdded} id={itemData.id} title={itemData.title} price={itemData.amount}
                                            imageRef={itemData.imageRef}/>
            </div>)
    });
    if (props.itemDatas.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found</h2>;
    }
    return (<div>
        <div className="parent">
        <div><ProductSorter SortingType={sortingType} onSortFuction={sortingChangeHandler}/></div>
        <div><ProductFilter sellectedCategory={filtredCategory} onChangeFilter={filterChangeHandler}/></div>
        </div>
        {showableProduct()}
    < /div>)
}

export default Products;