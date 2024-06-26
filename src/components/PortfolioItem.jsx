import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description, buttons}) {
    const handleClick = (button) => {
        window.open(button.link, "_blank");
    };

    return (
        <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <img 
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl 
                mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 items-center 
                justify-start flex-row text-xs md:text-sm dark:text-white">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold
                        border-2 border-stone-900 rounded-md dark:border-white">
                            {item}
                        </span>
                    ))}
                </p>
                <p className="text-sm max-w-xl py-2" dangerouslySetInnerHTML={{ __html: description }}></p>
                    <div className="flex flex-wrap gap-2 items-center 
                    justify-center flex-row text-xs md:text-sm text-white dark:text-black">
                        {buttons.map((button, index) => (
                            <button key={index} className="px-2 py-1 font-semibold
                            border-2 border-stone-900 rounded-md dark:border-white bg-black dark:bg-white" onClick={() => handleClick(button)}>
                                {button.name}
                            </button>
                        ))}
                    </div>
            </div>
        </a>
    )
}

export default PortfolioItem;