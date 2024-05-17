import Button from "./ui/Button";

/**
 * Hero component.
 * Renders the hero section with a headline, description, and action buttons.
 * @returns {JSX.Element} - Rendered hero component.
 */
function Hero(): JSX.Element {
    return (
        <main id="Hero">
            <div className="Container flex flex-col items-center justify-center py-40 text-center">
                <h1 className="mb-10 font-semibold leading-none tracking-tight text-txt-clr-800">
                    Buy modern <span className="block max-md:hidden"></span>cars
                    easily
                </h1>
                <p className="mb-10 text-base font-normal text-txt-clr-900 ">
                    Buy and sell cars in an easy and smooth{" "}
                    <span className="block max-md:hidden"></span>way as
                    possible.
                </p>
                <div className="flex flex-row">
                    <Button variant="Primary">Talk to us</Button>
                    <Button variant="Tertiary">Start for free</Button>
                </div>
            </div>
        </main>
    );
}

export default Hero;
