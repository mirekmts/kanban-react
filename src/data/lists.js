import uuidv4 from 'uuid/v4'

export const lists = [
    {
        id: uuidv4(),
        name: 'Backlog',
        items: [
            {
                id: uuidv4(),
                name: 'Power up the robot',
                description: 'description',
            },
            {
                id: uuidv4(),
                name: 'Submit chatbot build for review',
                description: 'description',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Next Up',
        items: [
            {
                id: uuidv4(),
                description: 'description',
                name: 'Karta B',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Done',
        items: [
            {
                id: uuidv4(),
                description: 'description',
                name: 'Karta C',
            },
        ],
    },
]