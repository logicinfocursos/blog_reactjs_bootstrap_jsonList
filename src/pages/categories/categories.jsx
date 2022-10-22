import { useState } from 'react'
import { useParams } from 'react-router'

import _posts from '../../services/db.json'
import { Breadcrumb } from '../../components'
import { NotFoundPost } from '../../components'



export default function Categories() {

    let { id } = useParams()

    const [posts, setPosts] = useState( id ? _posts.filter((i) => i.categories.toLowerCase().trim().includes(id.toLowerCase().trim()) && i.status == 1) : _posts)

    if (!posts) return <h1>procurando...</h1>

    return (
        <section className="container">

            <Breadcrumb
                actualPage={`categorias (${id})`}
            />

            <h1 className='mb-5'>relação de posts</h1>

            <h5 className='mb-5'>chave de pesquisa:{id}</h5>

            <nav aria-label="Page navigation example" className='mb-5'>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">anterior</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">próxima</a></li>
                </ul>
            </nav>

            {
                posts && posts.length > 1 
                
                ? posts.map((item, key) => {
                    return (
                        <PostCard2
                            item={item}
                            key={key}
                        />)
                })

                : <NotFoundPost/>
            }

            <nav aria-label="Page navigation example" className='mt-5'>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">anterior</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">próxima</a></li>
                </ul>
            </nav>
        </section>
    )
}


export const PostCard2 = ({ item }) => {
    return (
        <div class="row mb-5">

                <div className="col-md-4">
                    <a href={`/post/${item.id}`}>
                        <img className="img-fluid rounded mb-3 mb-md-0" src={item.featureImage} alt="imagem do post" />
                    </a>
                </div>

                <div className="col-md-8">
                    <h3>{item.title}</h3>
                    <small>{item.categories}</small>
                    <p className='mt-3'>{item.details.substr(0, 100)}{item.details.length > 100 ? " (...)" : ""}</p>
                    <a className="btn btn-secondary mb-5 mt-3" href={`/post/${item.id}`}>ver detalhes</a>
                </div>
            <hr/>
        </div>
    )
}