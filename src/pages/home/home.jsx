
import posts from '../../services/db.json'
import { Jumbotron } from '../../components'
import { Grid } from '../../components'



export default function Home() {


    return (
        <section className="container">

            <Jumbotron
                title='tutoriais e artigos'
                subtitle='estamos elaborado informações relevantes para a sua vida de empreendedor digital ou desenvolvedor'
                text='categorias: marketing digital, dicas de programação, etc'
                buttonText=''
                buttonLink=''
            />

            <Grid posts={posts} />

        </section>
    )
}