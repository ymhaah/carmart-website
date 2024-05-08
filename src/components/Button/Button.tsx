import React from 'react';

type BasePropsT<E extends React.ElementType> = {
  children: React.ReactNode;
  variant: 'Primary' | 'Secondary' | 'Tertiary';
  isDisabled?: boolean;
  iconOnlyAlt?: string;
  as?: E extends 'button' | 'a' ? E : never;
};

type ButtonPropsT<E extends React.ElementType> = BasePropsT<E> &
  Omit<React.ComponentProps<E>, keyof BasePropsT<E>>;

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
function Button<E extends React.ElementType = 'button'>({
  children,
  variant,
  isDisabled = false,
  iconOnlyAlt,
  as,
  ...nativeAttributes
}: ButtonPropsT<E>): JSX.Element {
  const Component = as || 'button';

  const classNames = `button ${nativeAttributes.className || ''} ${
    variant === 'Secondary'
      ? `${isDisabled ? 'border-violet-600 text-violet-700' : 'border-violet-600 text-violet-800 hover:border-violet-800 focus-visible:bg-violet-600 active:bg-violet-600'} bg-violet-50 `
      : variant === 'Tertiary'
        ? `${isDisabled ? 'text-violet-600' : 'bg-transparent text-violet-700 hover:bg-violet-400 hover:text-violet-800 focus-visible:bg-violet-500 active:bg-violet-500'} border-none`
        : `${isDisabled ? 'border-purple-200 bg-purple-200' : 'border-purple-500 bg-purple-500 hover:border-purple-400 hover:bg-purple-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-200 active:border-purple-200'} text-violet-50`
  } ${iconOnlyAlt ? 'p-4' : 'px-4 py-2'} ${isDisabled ? 'pointer-events-none cursor-not-allowed' : 'pointer-events-auto cursor-pointer'} rounded border border-solid text-base font-semibold capitalize leading-none no-underline shadow-md`;

  return (
    <Component
      aria-label={iconOnlyAlt}
      className={classNames}
      aria-disabled={isDisabled}
      disabled={as === 'button' ? isDisabled : undefined}
      {...nativeAttributes}
    >
      {children}
    </Component>
  );
}

export default Button;
