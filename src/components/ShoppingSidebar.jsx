export function ShoppingSidebar({isOpen, toggle}){
    return (
        <div className="shopping-sidebar">
            Sidebar
            <button onClick={toggle}>Hide</button>
        </div>
    )
}