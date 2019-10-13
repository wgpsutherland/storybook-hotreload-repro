Storybook Hot Reload Issue Reproduction
=========

Run app: `npm start`

Run stroybook: `npm run storybook`

How to reproduce:

- `npm run storybook`
- Go to http://localhost:9009/?path=/story/todocard--complete
- Go to file `src/stories/2-TodoCard.stories.tsx` and change the name in the completeTodo object.
- See error in browser
