import { Login, Logo, Lupa } from "../../assets/images";

export default function Header() {
    return (
        <header>
            <div>
                <img src={Logo} alt="Logo for ProSync" />
                <h1>Pro<span>Sync</span></h1>
            </div>
            <div><a href="#">Find freelancers</a><a href="#">Work with us</a></div>
            <div>
                <img src={Lupa} alt="Search icon" />
                <p>Search for work...</p>
            </div>
            <a>Login <img src={Login} alt="Login anchor" /></a>
        </header>

    )
}