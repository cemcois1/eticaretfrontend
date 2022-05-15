import React, {useState} from "react";
import Product from "./Product";
import ProductSearcher from "./ProductSearcher";
import ProductSorter from "./ProductSorter";
import ProductCategoriser from "./ProductCategoriser";

const Products = (props) => {
    const [filtredCategory, setFiltredCategory] = useState('')
    const filterChangeHandler = Category => {
        setFiltredCategory(Category);
    }

    const [sortingType, setsortingType] = useState('None')
    const sortingChangeHandler = Type => {
        console.log(Type);
        setsortingType(Type);
    }
    const [sortingCategory, setsortingCategory] = useState('All')
    const sortingCategoryHandler = Type => {
        console.log(Type);
        setsortingCategory(Type);
    }

    const rawData = props.itemDatas
    const filteredforCategoriser = props.itemDatas.filter(itemdata => {

            if (sortingCategory == "All") return true;
            if (itemdata.productType.toLowerCase().includes("" + sortingCategory.toLowerCase())) {
                return true;
            }
            return false;
        }
    )

    const filteredData = filteredforCategoriser.filter(itemdata => {
        if (filtredCategory == "") return true;
        if (itemdata.title.toLowerCase().includes("" + filtredCategory.toLowerCase())) {
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
            <div key={itemData.id}><Product AddtoCart={props.onItemAdded} id={itemData.id} title={itemData.title}
                                            price={itemData.amount}
                                            imageRef={itemData.imageRef}/>
            </div>)
    });
    return (<div>
        <div className="parent">
            <div><ProductCategoriser SortingType={sortingCategory} onSortFuction={sortingCategoryHandler}/></div>

            <div><ProductSorter SortingType={sortingType} onSortFuction={sortingChangeHandler}/></div>
            <div><ProductSearcher sellectedCategory={filtredCategory} onChangeFilter={filterChangeHandler}/></div>
        </div>
        {showableProduct()}
    < /div>)
}

export default Products;