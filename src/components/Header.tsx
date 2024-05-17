import { useRef, useState, useEffect } from "react";

import Button from "./ui/Button";

/**
 * Header component.
 * Renders the header with navigation and logo.
 * @returns {JSX.Element} - Rendered header component.
 */
function Header(): JSX.Element {
    const nav = useRef<HTMLDivElement>(null);

    const [navOpenState, setNavOpenState] = useState<
        "closed" | "opened" | "closing"
    >("closed");

    function toggleNav() {
        if (navOpenState === "closed") {
            setNavOpenState("opened");
        } else if (navOpenState === "opened") {
            setNavOpenState("closing");
            if (nav.current) {
                // ? Listen for animation end to change data state to closed
                nav.current.addEventListener(
                    "animationend",
                    () => {
                        setNavOpenState("closed");
                    },
                    {
                        once: true,
                    }
                );
            }
        }
    }

    useEffect(() => {
        // ? Closes the navigation menu when scroll away.
        function handleScroll() {
            if (navOpenState === "opened") {
                setNavOpenState("closing");
                if (nav.current) {
                    // ? Listen for animation end to change state to closed
                    nav.current.addEventListener(
                        "animationend",
                        () => {
                            setNavOpenState("closed");
                        },
                        { once: true }
                    );
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { once: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navOpenState]);

    return (
        <header className="relative h-20 w-full py-0.5">
            <div className="Container flex flex-row items-center justify-between gap-4">
                <div>
                    <a href="#" className="block">
                        <img
                            src="/logo.png"
                            className="h-5/6 min-h-4"
                            alt="Carmart logo"
                            loading="eager"
                        />
                        <span className="sr-only" aria-hidden="true">
                            Carmart logo
                        </span>
                    </a>
                </div>

                <div>
                    <Button
                        iconOnlyAlt="Menu Toggle"
                        type="button"
                        aria-controls="main-navigation-list"
                        aria-expanded={navOpenState === "opened"}
                        handleClick={toggleNav}
                        className="max-md:block md:hidden"
                    >
                        {navOpenState === "opened" ? (
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-labelledby="close-icon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title id="close-icon">close icon</title>
                                <path
                                    d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                aria-labelledby="menu-icon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title id="menu-icon">menu icon</title>
                                <path
                                    d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                                    fill="black"
                                />
                            </svg>
                        )}
                    </Button>
                    <nav
                        className={`bg-bg-clr-100 max-md:absolute max-md:left-0 max-md:top-20 max-md:z-50 max-md:h-auto max-md:w-full max-md:translate-y-[-125%] max-md:px-4 max-md:py-10 max-md:shadow-md
                        ${
                            navOpenState === "opened"
                                ? "max-md:block max-md:animate-slideIn"
                                : navOpenState === "closing"
                                  ? "max-md:animate-slideOut"
                                  : "max-md:hidden"
                        }`}
                        ref={nav}
                        aria-label="Main Navigation"
                    >
                        <ul
                            id="main-navigation-list"
                            className="flex size-full content-center justify-start gap-8 max-md:flex-col max-md:items-center max-md:justify-between"
                        >
                            <li className="">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-nowrap hover:underline hover:opacity-90"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
                                    type="button"
                                    className="text-nowrap hover:underline hover:opacity-90"
                                >
                                    Sell
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
                                    type="button"
                                    target="_blank"
                                    className="text-nowrap hover:underline hover:opacity-90"
                                >
                                    Buy
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
                                    type="button"
                                    target="_blank"
                                    className="text-nowrap hover:underline hover:opacity-90"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="#"
                                    type="button"
                                    target="_blank"
                                    className="text-nowrap hover:underline hover:opacity-90"
                                >
                                    Faq
                                </a>
                            </li>
                            <li className="max-md:w-full md:hidden">
                                <Button
                                    variant="Tertiary"
                                    type="button"
                                    className="max-md:w-full"
                                >
                                    Sign in
                                </Button>
                            </li>
                            <li className="max-md:w-full md:hidden">
                                <Button
                                    variant="Primary"
                                    type="button"
                                    className="max-md:w-full"
                                >
                                    Sign up
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-row items-center max-md:hidden">
                    <Button variant="Tertiary" type="button">
                        Sign in
                    </Button>
                    <Button variant="Primary" type="button">
                        Sign up
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
