interface CardProps {
    heading: string,
    cardCount: number,
    key: string,
    cardsData: string[]
}

export default function Card(props: CardProps) {
    return (
        <div 
            className = "w-11/12 md:w-[45%] lg:w-[31%] bg-black-300 rounded-md shadow-md"
        >
            <div className = "flex gap-3 bg-black-200 py-3 px-4 rounded-md items-center">
                <span>{props.heading}</span>
                <span className = "flex justify-center items-center bg-white-200 text-black-400 text-xs w-4 h-4 rounded-full">
                    {props.cardCount}
                </span>
            </div>

            <div className = "flex flex-col items-center gap-3 py-5">
                {
                    props.cardsData.map((currentTodo, index) => {
                        return (
                            <div 
                                className = "bg-black-100 py-3 px-4 w-11/12 cursor-pointer rounded-md"  
                                key = {props.heading + "_card_" + index}
                            >
                                {currentTodo}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}