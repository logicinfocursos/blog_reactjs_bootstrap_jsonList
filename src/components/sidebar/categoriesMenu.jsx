const categories = ["business", "marketing", "audiovisual", "programação", "novidades", "tutorial", "informática"]


export const CategoriesMenu = () => {
    return (
        <section className="card" id="categoriesMenuSidebar">
            <div className="card-header">categorias</div>
            <ul className="list-group list-group-flush">

                {
                    categories.map((item, key)=>{
                        return(
                            <li className="list-group-item">
                            <a href={`/categories/${item}`} className="text-decoration-none text-dark" key={key}>{item}</a>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}