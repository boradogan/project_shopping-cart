export function CategoryItem({category, handleChange}){
    const categoryName = category.name;
    const isChecked = category.isChecked;
    return(
        <li>
            <input type="checkbox" id={categoryName} checked={isChecked} onChange={() => {handleChange(categoryName, !isChecked)}}/>
            <label htmlFor={categoryName}>{categoryName}</label>
        </li>
    )

}