import { useState } from "react";

import Button from "@/Button";

import Audi from "@icon/Audi.svg";
import Acura from "@icon/Acura.svg";
import BMW from "@icon/BMW.svg";
import Chevrolet from "@icon/Chevrolet.svg";
import Dodge from "@icon/Dodge.svg";
import Ford from "@icon/Ford.svg";
import Honda from "@icon/Honda.svg";
import Hyundai from "@icon/Hyundai.svg";
import Kia from "@icon/Kia.svg";
import Lexus from "@icon/Lexus.svg";
import MercedesBenz from "@icon/Mercedes-Benz.svg";
import Toyot from "@icon/Toyot.svg";

/**
 * Brands component to display a list of car brands with options for new and used cars.
 *
 * @returns {JSX.Element} A section containing car brand icons and buttons to toggle between new and used car options.
 */
function Brands(): JSX.Element {
    const icons = [
        { src: Toyot, alt: "Toyot", link: { new: "#1", used: "#2" } },
        { src: BMW, alt: "BMW", link: { new: "#1", used: "#2" } },
        { src: Chevrolet, alt: "Chevrolet", link: { new: "#1", used: "#2" } },
        { src: Honda, alt: "Honda", link: { new: "#1", used: "#2" } },
        { src: Ford, alt: "Ford", link: { new: "#1", used: "#2" } },
        { src: Audi, alt: "Audi", link: { new: "#1", used: "#2" } },
        { src: Acura, alt: "Acura", link: { new: "#1", used: "#2" } },
        { src: Hyundai, alt: "Hyundai", link: { new: "#1", used: "#2" } },
        { src: Dodge, alt: "Dodge", link: { new: "#1", used: "#2" } },
        {
            src: MercedesBenz,
            alt: "Mercedes-Benz",
            link: { new: "#1", used: "#2" },
        },
        { src: Kia, alt: "Kia", link: { new: "#1", used: "#2" } },
        { src: Lexus, alt: "Lexus", link: { new: "#1", used: "#2" } },
    ];

    const [sellState, setSellState] = useState<"new" | "used">("new");

    function handleSellState(buttonSellState: "new" | "used") {
        if (buttonSellState !== sellState) {
            setSellState(buttonSellState);
        }
    }

    return (
        <section aria-labelledby="Brands" className="">
            <div className="fixed-container overflow-hidden bg-bg-clr-100 pb-40 pt-10 text-center">
                <h2
                    id="Brands"
                    className="mb-6 text-3xl font-semibold text-txt-clr-700"
                >
                    Shop your favorite brand
                </h2>
                <div
                    className="mb-3 flex flex-row justify-center"
                    aria-label="car selling options (new/used)"
                >
                    <Button
                        variant={sellState === "new" ? "Primary" : "Secondary"}
                        className="rounded-l-3xl rounded-r-none px-10 active:scale-100 max-md:px-5"
                        handleClick={() => {
                            handleSellState("new");
                        }}
                        style={{ margin: 0 }}
                    >
                        New Cars
                    </Button>
                    <Button
                        variant={sellState === "new" ? "Secondary" : "Primary"}
                        handleClick={() => {
                            handleSellState("used");
                        }}
                        className="rounded-l-none rounded-r-3xl px-10 active:scale-100 max-md:px-5"
                    >
                        Used Cars
                    </Button>
                </div>
                <div className="brands-grid px-6 py-3">
                    {icons.map((icon, index) => (
                        <a
                            href={
                                sellState === "new"
                                    ? icon.link?.new
                                    : icon.link?.used
                            }
                            key={index}
                            className="flex flex-row items-center justify-start gap-4 px-8 py-4"
                        >
                            <img
                                className="w-10"
                                src={icon.src}
                                alt={icon.alt}
                                loading="lazy"
                            />
                            <h3 className="text-base font-normal text-txt-clr-900">
                                {icon.alt}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Brands;
