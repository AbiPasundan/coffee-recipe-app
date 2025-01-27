

export default function Card({img, w, h, ShowImg = true, title, description}) {
    return (
        <div className="card shadow-lg w-full flex-shrink-0 snap-start ">
            <figure>
                {ShowImg && <img
                    src={img}
                    width={w}
                    height={h}
                    alt={title}
                />}
            </figure>
            <div className="card-body">
                <h3 className="card-title text-lg font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}