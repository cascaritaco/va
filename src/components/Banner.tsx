import React from "react"
import BannerImage from "./../assets/background/scattered-forcefields.svg"

const Banner = () => {
    return (
    <header className="h-44 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="flex flex-col h-full justify-between px-4 xl:px-16">
            <div></div>
            <h1 className="text-primaryB font-bold text-h2 xl:text-h1"> Tables </h1>
            <div className="max-w-fit">
                <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" className="tab [--tab-border-color:transparent] tab-active">Tab 1</a>
                    <a role="tab" className="tab [--tab-border-color:transparent] [--tab-bg:gray]">Tab 2</a>
                    <a role="tab" className="tab [--tab-border-color:transparent] [--tab-bg:gray]">Tab 3</a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Banner;