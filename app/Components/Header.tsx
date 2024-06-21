
export default function Header() {
    return (
        <>
            <header className="h-24 w-full flex justify-center items-center absolute">
                <nav className="headerNav px-24  w-full h-full flex justify-between items-center">
                    <div className="logo text-3xl font-semibold text-indigo-900">SHARE DEV</div>
                    <div className="">
                        Built by  &nbsp;
                        <a href="https://github.com/gowtz" className="text-indigo-700 font-semibold">@Gowtham</a>
                    </div>
                </nav>
            </header>
        </>
    )
}
