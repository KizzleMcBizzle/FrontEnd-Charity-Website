const Navbar = () => {
    return (
        <nav className="navbar">
            <img
                className="h-8 w-auto"
                src="https://cdn.discordapp.com/attachments/906562571597938780/1233115249050128405/image.png?ex=662beb91&is=662a9a11&hm=e13d6a430d341f7a5c01dcd7083301816e4ab7f0d4826cb71180415fbcf24ce9&"
                alt="Logo">

            </img>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;