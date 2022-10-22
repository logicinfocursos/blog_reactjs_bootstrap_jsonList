import { PostCard } from '../../components'



export const Grid = ({posts, title}) => {

    if(!posts || posts.length < 1)<></>

    return (
        <div className="row" id="grid">
            <div className="container">
                {
                    title ??  <h1 className="text-center mt-5">{title}</h1>
                }
               
                <div className="row text-center text-lg-start" id="gridList">
                    {
                        posts.map((item, key)=>{
                            return <PostCard item={item} key={key} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}