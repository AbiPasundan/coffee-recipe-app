import Button from "../button/Button";

function Layout({ children, backgroundImage }) {
    return (
        <section
            id="home"
            className="relative bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url("${backgroundImage}")`,
            }}
        >
            {children}
        </section>
    );
}

function Content({title, description}) {
    return (
        <div className="container mx-auto px-6 text-left">
            <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-4">
                {title}
            </h1>
            <p className="text-lg text-gray-200 mb-6">
                {description}
            </p>
            <Button text={"Recipe"} link={"./Learn"} variant={"glass"}/>
        </div>
    );
}

export default function Hero() {
    return (
        <Layout backgroundImage={"https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvZmZlZXxlbnwwfHx8fDE2NzM1MjgyMDQ&ixlib=rb-4.0.3&q=80&w=400"}>
            <div className="bg-black bg-opacity-50 h-full flex items-center">
                <Content title={"Welcome to Our Coffee World"} description={"Discover the best coffee recipes, brewing techniques, and tools to enjoy the perfect cup."}/>
            </div>
        </Layout>
    );
}
