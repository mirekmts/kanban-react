import uuidv4 from 'uuid/v4';

export const lists = [
  {
    id: uuidv4(),
    name: 'Backlog',
    items: ['1'],
  },
  {
    id: uuidv4(),
    name: 'Next Up',
    items: ['2', '3'],
  },
  {
    id: uuidv4(),
    name: 'Done',
    items: [],
  },
];

export const tasks = [
  {
    id: '1',
    name: 'Power up the robot',
    description: 'description',
  },
  {
    id: '2',
    name: 'Submit chatbot build for review',
    description: 'description',
  },
  {
    id: '3',
    name: 'Submit chatbot build for review',
    description: 'description',
  },
];
