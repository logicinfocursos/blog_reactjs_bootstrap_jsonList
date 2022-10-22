export const NotFoundPost = () => {  

    return (

        <section className="container">

            <div className="row gx-4 gx-lg-5 align-items-center">
                <section className="card-header p-5 mb-5" style={{ border: '0ch', borderRadius: 10, backgroundSize: '100% 100%', backgroundColor: '#cccccc' }} id="jumbotron">
                    <h1 className="display-4">não encontrei!</h1>
                    <p className="lead">peço que refaça a sua solicitação</p>
                    <hr className="my-4" />
                    <p>retornar para a página inicial</p>
                    <p className="lead">
                        <a className="btn btn-outline-dark btn-lg" href="/" role="button">home</a>
                    </p>
                </section>
            </div>

        </section>
    )
}