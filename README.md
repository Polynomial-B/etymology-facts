## Goal

To create a message board where you can post etymology facts, using a hashtag system that will allow you to filter your facts by language.
You can add a comment and you can 'upvote' any comment (currently no local storage or database has been added for persisting data).

## Build

This was built using React and TypeScript.
Initially I implemented useContext and as it was a small project this would have been sufficient, however I decided to add Zustand just for fun. 

## Screenshots

![](src/assets/readme-images/screenshot-1.png)

## Technologies and Dependencies

#### Front-end

- JavaScript
- TypeScript
- React
- Zustand
- HTML
- CSS
- Radix-UI


#### Development Tools

- VS Code
- Git
- Github
- Chrome DevTools

## Future Adaptations

Currently the upvote feature is only a visual feature. I would like to implement including a backend and being able to actually save the data. I will likely do this using MongoDB as hosting this information wouldn't be difficult, especially if I'm using Mongoose as schema validation. For the incomplexity of the data, using a noSQL database would be sufficient here. Also, hosting with MongoDB is cheaper that using a SQL database and hosting through something like Heroku.

## Accreditations

- ByteGrad: for the teaching resources and CSS styling.
- Flaticon.com: for the icons
- Freepik.com: for the 'texture' background used in the header.