import React from "react"
import BannerImage from "./../assets/background/abstract-envelope.svg"

const Banner = () => {
    return (
    <header className="h-48 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="max-w-screen-2xl mx-auto px-4 xl:px-16">
            <h1 className="text-white text-h2 xl:text-h1"> Tables </h1>
            <div className="max-w-fit">
                <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" className="tab tab-active">Tab 1</a>
                    <a role="tab" className="tab">Tab 2</a>
                    <a role="tab" className="tab">Tab 3</a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Banner;