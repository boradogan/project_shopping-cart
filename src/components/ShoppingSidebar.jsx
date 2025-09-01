export function ShoppingSidebar({isOpen, toggle}){
    return (
        <div className="shopping-sidebar">

            <button onClick={toggle}>{isOpen?'Hide':'Show'}</button>
        </div>
    )
}