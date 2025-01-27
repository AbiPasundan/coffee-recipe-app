function Img1({ img1 }) {
    return (
        <div className="diff-item-1">
            <img
                alt="daisy"
                loading="lazy"
                src={img1} />
        </div>
    )
}

function Img2({ img2 }) {
    return (
        <div className="diff-item-2">
            <img
                alt="daisy"
                loading="lazy"
                src={img2} />
        </div>
    )
}

export default function Diff({ img1, img2 }) {
    return (
        <div className="w-full px-4 py-12 bg-coffee-100 shadow-md dark:bg-darkCoffee-800 text-coffee-800 dark:text-coffee-50">
            <h1 className="text-4xl font-bold text-center mb-8">Learn More About Beans</h1>
            <div className=" max-w-4xl mx-auto diff aspect-[16/9] ">
                <Img1 img1={img1} />
                <Img2 img2={img2} />
                <div className="diff-resizer"></div>
            </div>
        </div>
    )
}
