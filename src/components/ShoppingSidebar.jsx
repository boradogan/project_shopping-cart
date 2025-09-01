import { CategoryItem } from "./CategoryItem"

export function ShoppingSidebar({isOpen, toggle, categoriesCheckboxes = [], handleChange}){
    console.log(categoriesCheckboxes)
    return (
        <div className="shopping-sidebar">

            <button onClick={toggle}>{isOpen?'Hide':'Show'}</button>
            <div className="categories">
                <ul>
                    {categoriesCheckboxes.map(category => <CategoryItem key={category.name} category={category} handleChange={handleChange}></CategoryItem>)}
                </ul>

            </div>
        </div>
    )
}