export const CommentList = ({ comments }) => {

    if (!comments) <></>

    return (
        <div className="card mt-5" >
            <div className="card-header">
                últimos comentários
            </div>
            <table className="table">
                <tbody>
                    <tr>
                        <th><img className="mr-3" alt="Bootstrap Media Preview" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" /></th>
                        <td><h5 className="mt-0">sonhadora</h5></td>
                        <td><p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis</p></td>
                    </tr>
                    <tr>                        
                        <th><img className="mr-3" alt="Bootstrap Media Preview" src="https://www.layoutit.com/img/sports-q-c-64-64-2.jpg" /></th>
                        <td><h5 className="mt-0">equipe do blog</h5></td>
                        <td><p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}