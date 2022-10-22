import { Login } from './modals/login'

export const NavMain = () => {

    return (
        <header className="container-fluid">
            
            {
                <Login />
            }

            <div className="row mb-5">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">logo</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">home</a>
                                </li>
                                                               
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">sobre nós</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">contato</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" disabled>opcao1</button></li>
                                        <li><button className="dropdown-item" disabled>opcao2</button></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><button className="dropdown-item" disabled>opcao3</button></li>
                                        <li><button className="dropdown-item" disabled>sair</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="procurar um post" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit" disabled>pesquisar</button>
                            </form>
                            <button className="btn btn-outline-light ms-3" type="button" title="login" data-bs-toggle="modal" data-bs-target="#exampleModalLogin">
                                <i className="bi bi-person" />
                            </button>                            
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}