import { useRef, useState } from "react";

import chevron_right from "@icon/chevron_right.svg";
import chevron_left from "@icon/chevron_left.svg";

import ev from "@img/ev.png";
import hatchback from "@img/hatchback.png";
import hybrid from "@img/hybrid.png";
import phev from "@img/phev.png";
import sedan from "@img/sedan.png";
import suv from "@img/suv.png";
import truck from "@img/truck.png";
import van from "@img/van.png";
import wagons from "@img/wagons.jpg";
import coupes from "@img/coupes.jpg";
import convertibles from "@img/convertibles.jpg";

import Button from "@/Button";

/**
 * A React component that displays a slider of top-rated cars by type.
 * @returns {JSX.Element} The Cars component.
 */
function Cars(): JSX.Element {
    const cars = [
        { src: sedan, alt: "sedan", link: "#" },
        { src: suv, alt: "suv", link: "#" },
        { src: truck, alt: "truck", link: "#" },
        { src: van, alt: "vans", link: "#" },
        { src: ev, alt: "electric vehicles (ev)", link: "#" },
        { src: hybrid, alt: "hybrid", link: "#" },
        { src: phev, alt: "plug-in hybrids (phev)", link: "#" },
        { src: hatchback, alt: "hatchback", link: "#" },
        { src: wagons, alt: "wagons", link: "#" },
        { src: coupes, alt: "coupes", link: "#" },
        { src: convertibles, alt: "convertibles", link: "#" },
    ];

    const slider = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrev(): void {
        if (slider.current && container.current) {
            const itemWidth =
                (slider.current.firstElementChild?.getBoundingClientRect()
                    .width ?? 0) + 8;
            setCurrentSlide((prev) => Math.max(prev - itemWidth, 0));
        }
    }

    /**
     * Handles the next button click event to slide right.
     */
    function handleNext(): void {
        if (slider.current && container.current) {
            const itemWidth =
                (slider.current.firstElementChild?.getBoundingClientRect()
                    .width ?? 0) + 8;
            const maxScroll =
                slider.current.scrollWidth - container.current.offsetWidth;
            setCurrentSlide((prev) => Math.min(prev + itemWidth, maxScroll));
        }
    }

    return (
        <section aria-labelledby="cars" className="pt-6">
            <div
                ref={container}
                className="fixed-container flex flex-col items-center overflow-hidden bg-bg-clr-100 px-8 pb-40 pt-10 text-center"
            >
                <h2
                    id="cars"
                    className="mb-6 text-3xl font-semibold text-txt-clr-700"
                >
                    Top-rated cars by type
                </h2>
                <div className="mb-6 flex w-[95%] max-w-[1000px] flex-row items-center justify-center gap-2">
                    <Button
                        handleClick={handlePrev}
                        iconOnlyAlt="arrow left"
                        className="m-0 bg-bg-clr-100 px-2 py-8 shadow-[0_0_20px_5px_#00000042]"
                    >
                        <img
                            className="w-4"
                            src={chevron_left}
                            alt=""
                            role="presentation"
                        />
                    </Button>
                    <div className="w-[90%] overflow-hidden">
                        <div
                            ref={slider}
                            style={{
                                transform: `translateX(-${currentSlide}px)`,
                            }}
                            className="flex flex-row items-start justify-start gap-2 transition-all"
                        >
                            {cars.map((car, index) => (
                                <a
                                    href={car.link}
                                    key={index}
                                    className="flex w-28 flex-shrink-0 flex-col items-center gap-4"
                                >
                                    <img
                                        src={car.src}
                                        alt={car.alt}
                                        className="rounded"
                                    />
                                    <h3 className="text-base font-normal uppercase text-txt-clr-900">
                                        {car.alt}
                                    </h3>
                                </a>
                            ))}
                        </div>
                    </div>

                    <Button
                        handleClick={handleNext}
                        iconOnlyAlt="arrow right"
                        className="rounded bg-bg-clr-100 px-2 py-8 shadow-[0_0_20px_5px_#00000042]"
                    >
                        <img
                            className="w-4"
                            src={chevron_right}
                            alt=""
                            role="presentation"
                        />
                    </Button>
                </div>
                <Button variant="Secondary" className="rounded-3xl px-8">
                    See all
                </Button>
            </div>
        </section>
    );
}
export default Cars;
