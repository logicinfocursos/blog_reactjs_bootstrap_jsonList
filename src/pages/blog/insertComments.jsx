export const InsertComments = ({ id }) => {
    
    return (
        <div className="card mt-5 mb-5" >
            <div className="card-header">
                quer deixar um comentário?
            </div>
            <form className="px-3 mt-3">
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome ou apelido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">comentário</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="deixe aqui o seu comentário..." />
                </div>
                <button className="btn btn-secondary mt-3 mb-3" type="submit">enviar</button>
            </form>
        </div>
    )
}