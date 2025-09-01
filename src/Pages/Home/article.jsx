import React from "react";
import Card from "../../Component/card";

const Article = () => {
    return (
        <section className="w-full px-8 py-12">
            {/* Section Title */}
            <p className="text-sm text-gray-500">What We Do</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-8">
                Insights of Jaipur’s
            </h2>

            {/* Layout: left big card, right stacked cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-8 ">
                {/* Left Big Card */}
                <div>
                    <Card
                        image="https://maverickbird.com/wp-content/uploads/2019/05/29064314_2088915684458801_6697876526559831881_o.jpg"
                        className="w-full h-96  rounded-lg object-cover flex-shrink-0"
                    />

                    <h3 className="text-xl font-semibold mt-4 text-gray-800">
                        Jaipur hand block print: a hands on experience
                    </h3>
                    <span className="mt-2 inline-block text-xs bg-gray-100 text-gray-700  py-1 rounded-full">
                        Reed More
                    </span>
                </div>

                {/* Right Column with stacked Cards */}
                <div className="flex flex-col gap-6">
                    <Card
                        image="https://rajasthancab.b-cdn.net/uploads/1743495736-67eba238ec8d0.webp"
                        title="Desert Safari Adventure: A Journey Through the Sands"
                        className="w-auto h-35 rounded-lg object-cover flex-shrink-0"
                        description="Unveiling the enigmatic world of giant pandas and conservation challenges"
                        tag="Species"
                    />
                    <Card
                        image="https://i0.wp.com/travelshoebum.com/wp-content/uploads/2020/09/IMG_20200718_212254_280.jpg?fit=1200%2C900&ssl=1"
                        title="Local who useCrafted in Jaipur: The Artisans Behind Pots, Clayware & More"
                        className="w-auto h-45 rounded-lg object-cover flex-shrink-0"
                        description="Fauna & Flora has been using the collective knowledge and experience to protect nature."
                        tag="Species"
                    />
                    <Card
                        image="https://www.jaipurcraftonline.com/cdn/shop/articles/11-unexplored-local-jaipur-markets-for-traditional-handicrafts-of-rajasthan-991172.jpg"
                        title="Exploring the Fascinating Realm of Birds"
                        className="w-auto h-35 rounded-lg object-cover flex-shrink-0"
                        description="Exploring the Fascinating Realm of Birds and their ecological significance"
                        tag="Species"
                    />
                </div>
            </div>
        </section>
    );
};

export default Article;
