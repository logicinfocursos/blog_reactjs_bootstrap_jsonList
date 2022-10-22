
export const Jumbotron = ({ title, subtitle, text, buttonText, buttonLink }) => {
    return (
        <section className="card-header p-5 mb-5" style={{ border: '0ch', borderRadius: 10, backgroundSize: '100% 100%', backgroundColor: '#cccccc' }} id="jumbotron">
            <h1 className="display-4">{title ?? ''}</h1>
            <p className="lead">{subtitle ?? ''}</p>
            <hr className="my-4" />
            <p>{text ?? ''}</p>
            {
                buttonLink ?? <p className="lead">
                    <a className="btn btn-outline-dark btn-lg" href={buttonLink ?? '#'} role="button">{buttonText ?? ''}</a>
                </p>
            }

        </section>
    )
}