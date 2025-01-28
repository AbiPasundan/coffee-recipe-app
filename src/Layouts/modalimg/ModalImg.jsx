import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const images = [
    "./img/tools/espressomachine.webp",
    "./img/tools/frenchpress.webp",
    "./img/tools/milkjug.webp",
    "./img/tools/mokapot.webp",
    "./img/tools/siphon.webp",
    "./img/tools/v60.webp",
];

export default function ModalImg() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full px-4 py-12 bg-coffee-100 shadow-md dark:bg-darkCoffee-800 text-coffee-800 dark:text-coffee-50 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-8">Find Best Coffee Tools</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[400px] md:max-w-[600px] place-items-center">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt=""
                        className="hover:opacity-75 cursor-pointer rounded-lg"
                        onClick={() => {
                            setSelectedImage(src);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black/50">
                <Dialog.Panel 
                    className="bg-white p-4 rounded-lg shadow-lg max-w-lg relative" 
                    onClick={(e) => e.stopPropagation()} // Cegah event bubbling
                >
                    <button className="absolute top-2 right-2" onClick={() => setIsOpen(false)}>
                        <X className="w-6 h-6" />
                    </button>
                    {selectedImage && (
                        <img src={selectedImage} alt="" className="rounded-lg max-w-full max-h-[500px]" />
                    )}
                </Dialog.Panel>
            </Dialog>
        </div>
    );
}
