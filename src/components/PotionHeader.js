
import '../css/PotionHeader.css'

export default function PotionHeader() {
    return (
        <header>
            <div className="wrapper">
                <h1><a href="/">PotionSwap</a></h1>
                <ul>
                    <li><a href="/">For Sale</a></li>
                    <li><a href="/want">Wanted</a></li>
                    <li><a href="/requests">Requests</a></li>
                    <li><a href="/login">Sign-In</a></li>
                </ul>
            </div>
        </header>
    )
}
