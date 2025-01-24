import Button from "../../components/button/Button";

function Title({ text }) {
    return <h2 className="text-2xl font-semibold mb-4">{text}</h2>;
}

function Description({ text }) {
    return <p className="mb-4">{text}</p>;
}

function Layout() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-start max-w-lg mx-auto md:ml-12">
                {/* max-w-lg membatasi lebar teks dan mx-auto + md:ml-12 untuk sentralisasi */}
                <Title text={"Welcome to Recipe Coffee"} />
                <Description text={"At Recipe Coffee, we are passionate about sharing the joy of coffee with the world. Our mission is to inspire coffee lovers to explore, create, and enjoy unique recipes that bring out the best flavors in every cup."} />
                <Description text={"Whether you are a seasoned barista or just starting your coffee journey, our collection of recipes and tips is designed to cater to all skill levels. Let's make every sip a memorable experience!"} />
                <Button text={"See More"} link={"./about"} variant={"glass"} />
            </div>
            <div className="flex justify-center">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvZmZlZXxlbnwwfHx8fDE2NzM1MjgyMDQ&ixlib=rb-4.0.3&q=80&w=400" alt="Coffee Lovers" className="rounded-lg shadow-md" />
            </div>
        </div>
    );
}

export default function AboutLayout() {
    return (
        <div className="w-full min-h-screen px-4 py-12 bg-coffee-100 shadow-md dark:bg-darkCoffee-800 text-coffee-800 dark:text-coffee-50">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <Layout />
        </div>
    );
}
