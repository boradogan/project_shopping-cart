export function ShoppingSidebar({isOpen, toggle}){
    return (
        <div className="shopping-sidebar">
            Sidebar
            <button onClick={toggle}>{isOpen?'Hide':'Show'}</button>
        </div>
    )
}