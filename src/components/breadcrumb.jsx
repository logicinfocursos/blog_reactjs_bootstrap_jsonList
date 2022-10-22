export const Breadcrumb = ({ actualPage, previousPage, previousPageLink }) => {

    return (
        <nav aria-label="breadcrumb" className="mb-5">
            <ol className="breadcrumb">
                <li className="breadcrumb-item text-decoration-none text-dark"><a href="/">home</a></li>
                {
                    previousPage
                    ?<li className="breadcrumb-item text-decoration-none text-dark"><a href={previousPageLink}>{previousPage}</a></li>
                    :<></>
                }
                
                <li className="breadcrumb-item active" aria-current="page">{actualPage}</li>
            </ol>
        </nav>
    )
}