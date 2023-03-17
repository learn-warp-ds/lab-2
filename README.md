>  Warp Field Guide

# Lab 2

Goals for this lab:
- See semantic-tokens in use
- Get an idea of how theme switching might work in development
- Work with some atoms and patterns in Warp for making components accessible

## Part 1

Go to the Github Page for this lab, you should see a playground site that greets you with "Hi".

Tasks:
1. Add a wrapping element to the paragraph, and modify the paragraph to something more interesting than 'Hi'
2. Give the wrapping element a background color using `bg` or `bg-subtle`, also specify a color for the text using `text` or `text-subtle`.
    - You can inspect the text using the browser inspector to see what the semantic tokens actually map to.
3. Open the browser console (the console will need to be set to `__preview.html` and not `top`, [like this](/.github/console.png)) and run `warp.setTheme('blocket-se')`
    - You should see the semantic tokens stay the same (e.g. the `bg` class still uses `var(--w-background-color)`), but what those tokens **map to** changes
    - You can go back to the original theme by doing `warp.setTheme('finn-no')`, and you can query which theme is active by doing `warp.theme`

## Part 2

Task: Implement the following design using accessbility best practices in one of Warp's golden-path frameworks.
- [React](https://codesandbox.io/p/sandbox/learn-warp--react-1hjouk)
- [Vue](https://codesandbox.io/p/sandbox/learn-warp--vue-39fi3v)

![sketch](/.github/assets/design.png?raw=true)
![sketch in-motion](/.github/assets/design-in-use.gif?raw=true)

Notes:
- Since this is a choice between two items, it should be implemented using a radio toggle
- The boxes should be clickable anywhere to modify the radio value
- A screenreader should properly interpret this as two items labelled: 'Go to the gym' and 'Go for a hike'
- An example of radio elements is available in the RadioExample component
    - The `.radio` class creates a radio element, and either the `:checked` state or the `.checked` class can set the appearance of a selected radio element
- The SVGs you'll need are available at `/gym.svg` and `/hiking.svg`
