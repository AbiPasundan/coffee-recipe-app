import Button from "../../components/button/Button";

function Title({ text }) {
    return <h2 className="text-2xl font-semibold mb-4">{text}</h2>;
}

function Description({ text }) {
    return <p className="mb-4">{text}</p>;
}

function Layout({
    showButton,
    title,
    descriptions,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    w,
    h,
    reverse,
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Konten Teks */}
            <div
                className={`flex flex-col justify-center items-start max-w-lg mx-auto md:ml-12 ${
                    reverse ? "order-2 md:order-1" : "order-1 md:order-1"
                }`}
            >
                <Title text={title} />
                {descriptions.map((desc, index) => (
                    <Description key={index} text={desc} />
                ))}
                {showButton && (
                    <Button text={buttonText} link={buttonLink} variant={"glass"} />
                )}
            </div>

            {/* Gambar */}
            <div
                className={`flex justify-center ${
                    reverse ? "order-1 md:order-2" : "order-2 md:order-2"
                }`}
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    width={w}
                    height={h}
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}

export default function AboutLayout({
    about,
    title,
    descriptions,
    showButton = true,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt = "Dynamic Image",
    w,
    h,
    reverse = true,
}) {
    return (
        <div className="w-full px-4 py-12 bg-coffee-100 shadow-md dark:bg-darkCoffee-800 text-coffee-800 dark:text-coffee-50">
            <h1 className="text-4xl font-bold text-center mb-8">{about}</h1>
            <Layout
                title={title}
                descriptions={descriptions}
                showButton={showButton}
                buttonText={buttonText}
                buttonLink={buttonLink}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                w={w}
                h={h}
                reverse={reverse}
            />
        </div>
    );
}
