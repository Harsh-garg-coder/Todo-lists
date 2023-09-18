export const data: {
    todo: {id: string, text: string}[],
    inprogress: {id: string, text: string}[],
    done: {id: string, text: string}[]
} = {
    todo: [
        {
            id: "1",
            text: "Create a good portfolio."
        },
        {
            id: "2",
            text: "Create good projects.",
        },
        {
            id: "3",
            text: "Improve communication skills.",
        }
    ],
    inprogress: [
        {
            id: "4",
            text: "Improve frontend skills.",
        }
    ],
    done: [
          
    ]
}

export const listArray: ["todo", "inprogress", "done"] = ["todo", "inprogress", "done"];