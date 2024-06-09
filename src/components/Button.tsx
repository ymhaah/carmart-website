import { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

type BasePropsT<E extends React.ElementType> = {
    children: React.ReactNode;
    variant?: "Primary" | "Secondary" | "Tertiary";
    isDisabled?: boolean;
    iconOnlyAlt?: string;
    handleClick?: (event: React.MouseEvent) => void;
    as?: E extends "button" | "a" ? E : never;
};

type ButtonPropsT<E extends React.ElementType> = BasePropsT<E> &
    Omit<ComponentProps<E>, keyof BasePropsT<E>>;

/**
 * Button component.
 * Renders a 'button' or 'a' (anchor) element.
 * @param {ButtonPropsT} props - Component props.
 *    - children: The content to be displayed inside the button.
 *    - variant: The visual style variant of the button. Options are 'Primary', 'Secondary', or 'Tertiary'.
 *    - isDisabled: Indicates whether the button is disabled. Default is false.
 *    - iconOnlyAlt: Alternative text for the button icon, used for accessibility when only an icon is displayed.
 *    - as: The element type to render. Can be either 'button' or 'a' (anchor). Defaults to 'button'.
 * @returns {JSX.Element} - Rendered button component.
 */
function Button<E extends React.ElementType = "button">({
    children,
    variant,
    isDisabled,
    iconOnlyAlt,
    handleClick,
    as,
    ...nativeAttributes
}: ButtonPropsT<E>): JSX.Element {
    const Component = as || "button";

    const variantClasses = twMerge(
        `
        ${iconOnlyAlt ? "p-2" : "px-4 py-3"} 
        ${isDisabled ? "cursor-not-allowed" : "focus:none pointer-events-auto cursor-pointer focus-visible:outline-none focus-visible:ring active:scale-90"}
        rounded border border-solid text-base font-normal leading-none no-underline shadow-md outline-none transition-all`,
        `
    ${
        variant === "Primary"
            ? `${isDisabled ? "border-primary-clr-200 bg-primary-clr-200" : "border-primary-clr-500 bg-primary-clr-500 hover:border-primary-clr-400 hover:bg-primary-clr-400"} text-bg-clr-500`
            : variant === "Secondary"
              ? `${isDisabled ? "border-txt-clr-600 text-txt-clr-700" : "border-txt-clr-600 text-txt-clr-800 hover:border-txt-clr-800"} bg-txt-clr-50 `
              : variant === "Tertiary"
                ? `${isDisabled ? "text-txt-clr-600" : "bg-bg-clr-100 text-txt-clr-900 hover:text-txt-clr-600"} border-none shadow-none`
                : `${isDisabled || "opacity-90"} border-none bg-transparent text-txt-clr-900 shadow-none`
    }
    `
    );

    return (
        <Component
            {...nativeAttributes}
            type={
                Component === "button"
                    ? nativeAttributes.type || "button"
                    : undefined
            }
            aria-label={iconOnlyAlt}
            aria-disabled={isDisabled}
            disabled={as === "button" ? isDisabled : undefined}
            onClick={handleClick}
            className={`button ${twMerge(
                variantClasses,
                nativeAttributes.className
            )}`}
        >
            {children}
        </Component>
    );
}

export default Button;