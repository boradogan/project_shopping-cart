export function CategoryItem({category, handleChange}){
    const categoryName = category.name;
    const isChecked = category.isChecked;
    return(
        <li>
            <input type="checkbox" checked={isChecked} onChange={() => {handleChange(categoryName, !isChecked)}}/>
            {categoryName}
        </li>
    )

}