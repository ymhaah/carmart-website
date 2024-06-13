import north_east from "@icon/north_east.svg";

/**
 * The Footer component renders the footer with various link sections.
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer(): JSX.Element {
    // ? each object in footerLinks array is a column the footer that contains a title and links
    const footerLinks = [
        {
            title: "Buyers",
            links: [
                { href: "#", text: "Authentication", outside: false },
                { href: "#", text: "User Management", outside: false },
                { href: "#", text: "Lead Generation", outside: false },
                { href: "#", text: "Connected Apps", outside: false },
            ],
        },
        {
            title: "Sellers",
            links: [
                { href: "#", text: "Organizations", outside: false },
                { href: "#", text: "Access Management", outside: false },
            ],
        },
        {
            title: "Blogs",
            links: [
                { href: "#", text: "Documentation", outside: false },
                { href: "#", text: "Kinde API", outside: false },
                { href: "#", text: "Starter Kits", outside: true },
                { href: "#", text: "Kinde on GitHub", outside: true },
            ],
        },
        {
            title: "FAQ",
            links: [
                { href: "#", text: "Schedule a Demo", outside: true },
                { href: "#", text: "Documentation", outside: false },
                { href: "#", text: "Guides", outside: false },
                { href: "#", text: "Blog", outside: false },
                { href: "#", text: "Release Notes", outside: true },
                { href: "#", text: "Feature Roadmap", outside: true },
                { href: "#", text: "Security", outside: false },
                { href: "#", text: "Tools", outside: false },
            ],
        },
        {
            title: "Careers",
            links: [
                { href: "#", text: "About", outside: false },
                { href: "#", text: "Careers", outside: false },
                { href: "#", text: "Pricing", outside: false },
                {
                    href: "#",
                    text: "Our Commitment to Fairness in Auth",
                    outside: true,
                },
                { href: "#", text: "Customers", outside: false },
            ],
        },
    ];

    return (
        <footer>
            <div className="Container flex w-full flex-row justify-between gap-10 py-12 max-md:flex-col">
                {footerLinks.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-start gap-4"
                    >
                        <h2 className="text-base font-medium capitalize text-txt-clr-900">
                            {item.title}
                        </h2>
                        <ul>
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="flex flex-row items-center justify-start gap-2 text-base font-normal capitalize text-txt-clr-900"
                                    >
                                        {link.text}
                                        {link.outside && (
                                            <img
                                                src={north_east}
                                                alt=""
                                                role="presentation"
                                                className="h-[0.5em]"
                                            />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
}
export default Footer;
