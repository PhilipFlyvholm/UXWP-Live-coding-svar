import './Header.css'

export default function Header(){
    return (
        <header className="nav-header">
            <h1>TwitteClone</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/mytweets">My tweets</a>
            </nav>
        </header>
    )
}