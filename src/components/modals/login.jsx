export const Login = () => {
    return (
        <div className="modal fade" id="exampleModalLogin" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body text-end">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="card border-0 shadow rounded-3 my-5 mt-0 mb-0 py-5 px-5">
                        <h5 className="card-title text-center mb-3 fw-light fs-5">login</h5>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">senha</label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" defaultValue id="rememberPasswordCheck" />
                                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                    me manter logado
                                </label>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-secondary" type="button">logar</button>
                            </div>
                            <div className="text-center">
                                <a href="signup.html" className="text-decoration-none text-dark text-center">fazer
                                    cadastro</a>
                                <br />
                                <a href="forgotPassword.html" className="text-decoration-none text-dark text-center">esqueci
                                    a senha</a>
                            </div>
                            <hr className="my-4" />
                            <div className="d-grid mb-2">
                                <button className="btn btn-dark" type="button">
                                    <i className="bi bi-google" /> login com o google
                                </button>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-dark" type="button">
                                    <i className="bi bi-facebook" /> login com o facebook
                                </button>
                            </div>
                            <div className="d-grid mt-5">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">fechar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}