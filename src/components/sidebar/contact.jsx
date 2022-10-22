export const Contact = () => {
    return (
        <section className="card mt-5" id="contactSidebar">
            <div className="card-header">
                fale conosco!
            </div>
            <form className="card-body">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">nome</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cellphone" className="form-label">celular</label>
                    <input type="text" className="form-control" id="cellphone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">e-mail</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">newsletter</label>
                </div>
                <button type="submit" className="btn btn-outline-dark btn-sm">enviar</button>
            </form>
        </section>
    )
}