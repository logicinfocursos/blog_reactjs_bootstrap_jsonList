export const PostCard = ({ item }) => {
    
    return (
        <div className="col-lg-6 mb-4">
            <div className="card h-100">
                <a href={`/post/${item.id}`}><img className="card-img-top" src={item.featureImage} alt /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href={`/post/${item.id}`}>{item.title}</a>
                    </h4>
                    <p className="card-text">{item.details.substr(0, 100)}{item.details.length > 100 ? " (...)" : ""}</p>
                    <a href={`/post/${item.id}`} className="btn btn-secondary mt-2 mb-2">continuar lendo</a>
                </div>
            </div>
        </div>
    )
}
