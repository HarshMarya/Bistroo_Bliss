import React from "react";
import dish from "../assets/Images/d6.svg";
import dish2 from "../assets/Images/d4.svg";
import FoodCard from "./FoodCard";

function Page1() {
  return (
    <>
      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-20 mx-auto w-10/12">
          <div>
            <h1 className="text-7xl playfair-display text-center mb-10">
              The secret tips & tricks to prepare a perfect burger & pizza for
              our customers
            </h1>
            <img src={dish} className="w-full" alt="" />
          </div>
          <div className="pt-10 text-[#414536]">
            <h2 className="font-semibold text-3xl my-4">
              What do you need to prepare a home-made burger?
            </h2>
            <p>
              Creating the perfect burger and pizza is an art, combining
              ingredients, techniques, and passion to craft dishes that truly
              delight the palate. Today, we'll unveil some closely guarded
              secrets and insider tips for mastering these beloved staples of
              the culinary world.
            </p>
            <ol className="list-number p-4">
              <li className="my-2">
                <strong>Quality Beef:</strong>
                <p>
                  {" "}
                  The heart of a perfect burger is top-notch beef. Opt for
                  fresh, high-quality ground beef with a fat content of about
                  20% for the juiciest, most flavorful results.
                </p>
              </li>
              <li className="my-2">
                <strong>Seasoning:</strong>
                <p>
                  {" "}
                  Simplicity is key here. A generous pinch of salt and black
                  pepper just before cooking will enhance the beef's natural
                  flavors without overshadowing them.
                </p>
              </li>
              <li className="my-2">
                <strong>Don’t Overwork the Meat:</strong>
                <p>
                  {" "}
                  When forming your patties, be gentle. Overworking the meat can
                  lead to dense, tough burgers. You want a patty that's firm
                  enough to hold together, but not compressed.
                </p>
              </li>
              <li className="my-2">
                <strong>Cooking:</strong>
                <p>
                  {" "}
                  High heat is crucial. Whether you're grilling or pan-searing,
                  make sure your cooking surface is hot enough to form a nice
                  crust on the patty, sealing in those delicious juices.
                </p>
              </li>
              <li className="my-2">
                <strong>Resting:</strong>
                <p>
                  {" "}
                  Allow your cooked burgers to rest for a few minutes before
                  serving. This lets the juices redistribute throughout the
                  patty, ensuring a moist and flavorful bite.
                </p>
              </li>
            </ol>
          </div>
          <div className="pt-10 text-[#414536]">
            <h2 className="font-semibold text-3xl my-4">
              What are the right ingredients to make it delicious?
            </h2>
            <p>
              Creating the perfect burger and pizza is an art, combining
              ingredients, techniques, and passion to craft dishes that truly
              delight the palate. Today, we'll unveil some closely guarded
              secrets and insider tips for mastering these beloved staples of
              the culinary world.
            </p>
            <ol className="list-number p-4">
              <li className="my-2">
                <strong>Quality Beef:</strong>
                <p>
                  {" "}
                  The heart of a perfect burger is top-notch beef. Opt for
                  fresh, high-quality ground beef with a fat content of about
                  20% for the juiciest, most flavorful results.
                </p>
              </li>
              <li className="my-2">
                <strong>Seasoning:</strong>
                <p>
                  {" "}
                  Simplicity is key here. A generous pinch of salt and black
                  pepper just before cooking will enhance the beef's natural
                  flavors without overshadowing them.
                </p>
              </li>
              <li className="my-2">
                <strong>Don’t Overwork the Meat:</strong>
                <p>
                  {" "}
                  When forming your patties, be gentle. Overworking the meat can
                  lead to dense, tough burgers. You want a patty that's firm
                  enough to hold together, but not compressed.
                </p>
              </li>
              <li className="my-2">
                <strong>Cooking:</strong>
                <p>
                  {" "}
                  High heat is crucial. Whether you're grilling or pan-searing,
                  make sure your cooking surface is hot enough to form a nice
                  crust on the patty, sealing in those delicious juices.
                </p>
              </li>
              <li className="my-2">
                <strong>Resting:</strong>
                <p>
                  {" "}
                  Allow your cooked burgers to rest for a few minutes before
                  serving. This lets the juices redistribute throughout the
                  patty, ensuring a moist and flavorful bite.
                </p>
              </li>
            </ol>
          </div>
          <div>
            <img src={dish2} className="w-full" alt="" />
            <h3 className="font-semibold text-3xl my-4 text-[#414536] pt-10">
              What are the right ingredients to make it delicious?
            </h3>
            <p>
              Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
              Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
              accumsa Cras sollicitudin, le ligula, porttitor eu, consequat
              vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit lobortis arcu enim urna adipiscing praesent velit
              viverra sit semper lorem eu cursus ve of all hendrerit elementum
              morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi
              dignissim at ante massa mattis magna sit amet purus gravida quis
              blandit turpis..
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="p-4 md:p-20 mx-auto w-10/12">
          <div className="text-center m-10">
            <p className="text-7xl playfair-display my-4 font-normal">
              Read More Articles
            </p>
            <p>
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
          </div>
          <FoodCard/>
        </div>
      </section>
    </>
  );
}

export default Page1;
