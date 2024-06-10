import Button from "@/Button";

import transparentPricing from "@icon/benefits_transparent-pricing.svg";
import minutesNotHours from "@icon/benefits_minutes-not-hours.svg";
import shopYourWay from "@icon/benefits_shop-your-way.svg";

/**
 * Benefits component that displays the benefits of using the service.
 * Each benefit includes an icon, a title, and a description.
 *
 * @returns {JSX.Element} The Benefits (Why Us) component.
 */
function Benefits(): JSX.Element {
    return (
        <section className="mb-10 bg-txt-clr-900" aria-labelledby="whyUs">
            <div className="Container py-10 text-center">
                <h2
                    id="whyUs"
                    className="text-3xl font-semibold text-bg-clr-500"
                >
                    Why Carmart?
                </h2>
                <div className="flex w-full flex-row justify-center gap-28 py-10 max-lg:gap-20 max-md:flex-col">
                    <div className="flex flex-col items-center justify-start gap-4">
                        <img
                            src={transparentPricing}
                            alt=""
                            role="presentation"
                        />
                        <h3 className="text-xl font-semibold text-bg-clr-500">
                            Transparent pricing
                        </h3>
                        <p className="text-base font-normal text-bg-clr-500">
                            No surprises here. See how
                            <br className="max-lg:hidden" /> much you'll pay on
                            cars
                            <br className="max-lg:hidden" /> you like.
                        </p>
                    </div>
                    <div className="flex  flex-col items-center justify-start gap-4">
                        <img src={minutesNotHours} alt="" role="presentation" />
                        <h3 className="text-xl font-semibold text-bg-clr-500">
                            Minutes, not hours
                        </h3>
                        <p className="text-base font-normal text-bg-clr-500">
                            Time saving tools to help you
                            <br className="max-lg:hidden" /> find the right car
                            in a snap.
                        </p>
                    </div>
                    <div className="flex  flex-col items-center justify-start gap-4">
                        <img src={shopYourWay} alt="" role="presentation" />
                        <h3 className="text-xl font-semibold text-bg-clr-500">
                            Shop your way
                        </h3>
                        <p className="text-base font-normal text-bg-clr-500">
                            Your own pace, your own
                            <br className="max-lg:hidden" /> space. Shop online
                            where and
                            <br className="max-lg:hidden" /> when it's
                            convenient for you.
                        </p>
                    </div>
                </div>
                <Button
                    variant="Tertiary"
                    type="button"
                    className="rounded-3xl px-8"
                >
                    Sign up
                </Button>
            </div>
        </section>
    );
}

export default Benefits;
