function Content({ title, text }) {
    return (
        <div className="bg-coffee-100 dark:bg-darkCoffee-700 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p>{text}</p>
        </div>
    );
}



export default function ListSideCard() {
    return (
        <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Our Vision</h3>
            {/* Wrapper untuk card */}
            <div className="flex flex-col md:flex-row items-start justify-around gap-6">
                <Content
                    title={"Inspiration"}
                    text={
                        "We aim to inspire creativity by sharing innovative coffee recipes and brewing techniques."
                    }
                />
                <Content
                    title={"Community"}
                    text={
                        "Building a global community of coffee enthusiasts who share their passion and knowledge."
                    }
                />
                <Content
                    title={"Excellence"}
                    text={
                        "Striving for excellence in every cup by highlighting the best practices and tools."
                    }
                />
            </div>
        </div>
    );
}
