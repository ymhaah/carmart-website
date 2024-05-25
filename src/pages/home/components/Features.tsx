import Image from "@/Image";

import findYourFit from "@img/featured_find-your-fit.png";
import findYourFitWebp from "@img/featured_find-your-fit.webp";

import shopByBudget from "@img/featured_shop-by-budget.png";
import shopByBudgetWebp from "@img/featured_shop-by-budget.webp";

import buildAndPrice from "@img/featured_build-and-price.png";
import buildAndPriceWebp from "@img/featured_build-and-price.webp";

import sellYourCar from "@img/featured_sell-your-car.png";
import sellYourCarWebp from "@img/featured_sell-your-car.webp";

/**
 * Features component that displays a section of featured tools.
 * Each feature includes an image, a title, and a description.
 *
 * @returns {JSX.Element} The Features component.
 */
function Features(): JSX.Element {
    return (
        <section aria-labelledby="featured" className="bg-bg-clr-500 pt-6">
            <div className="Container text-center">
                <h2
                    id="featured"
                    className="mb-6 text-3xl font-semibold text-txt-clr-700"
                >
                    Featured tools
                </h2>
                <div className="grid grid-cols-2  gap-4 max-md:grid-cols-1">
                    <div className="flex flex-col items-center justify-start gap-4  rounded bg-bg-clr-100 px-10 py-32 max-md:px-2 max-md:py-24">
                        <Image
                            src={findYourFit}
                            webpSrc={findYourFitWebp}
                            alt="Three white SUVs lined up"
                            className="h-20"
                        />
                        <h3 className="text-3xl font-semibold text-txt-clr-700">
                            Find your fit
                        </h3>
                        <p className="text-base font-normal text-txt-clr-600">
                            Not sure what you want? Answer a few questions{" "}
                            <br className="max-lg:hidden" />
                            to find what fits you best.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-4  rounded bg-bg-clr-100 px-10 py-32 max-md:px-2 max-md:py-24">
                        <Image
                            src={shopByBudget}
                            webpSrc={shopByBudgetWebp}
                            alt="A piggy bank filled with cash"
                            className="h-20"
                        />
                        <h3 className="text-3xl font-semibold text-txt-clr-700">
                            Shop by budget
                        </h3>
                        <p className="text-base font-normal text-txt-clr-600">
                            Save time and narrow down cars that fit your{" "}
                            <br className="max-lg:hidden" />
                            monthly payment and price point.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-4  rounded bg-bg-clr-100 px-10 py-32 max-md:px-2 max-md:py-24">
                        <Image
                            src={buildAndPrice}
                            webpSrc={buildAndPriceWebp}
                            alt="Three smartphones displaying an app"
                            className="h-20"
                        />

                        <h3 className="text-3xl font-semibold text-txt-clr-700">
                            Build and price
                        </h3>
                        <p className="text-base font-normal text-txt-clr-600">
                            Choose the make, model, trim, and options you want.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-4  rounded bg-bg-clr-100 px-10 py-32 max-md:px-2 max-md:py-24">
                        <Image
                            src={sellYourCar}
                            webpSrc={sellYourCarWebp}
                            alt="A person handing a car key to another person"
                            className="h-20"
                        />

                        <h3 className="text-3xl font-semibold text-txt-clr-700">
                            Sell and trade
                        </h3>
                        <p className="text-base font-normal  text-txt-clr-600">
                            Get an offer in minutes, then cash out or trade in.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
