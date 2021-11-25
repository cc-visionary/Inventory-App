# Office Supplies Inventory App

## Instructions for setting up for development:
You will only have to do these once when you are setting up for development

1. Open a new instance of command line
2. Enter the command `npm i`.
3. Enter the command `cd client`.
4. Enter the command `npm i`.

## Instructions to run for development:
1. Open a new instance of command line
2. Enter the command `cd client`.
4. Enter the command `npm run dev`
5. You can now access the front-end (to see the website) through `http://localhost:8080/`  

## Instructons to run the application:
1. Open a new instance of command line
2. Enter the command `npm i`.
3. Enter the command `npm run start`.


## Default Credentials
| username      | password   |
| ------------- | ---------- |
| moderator     | password   |
| user          | password   |

## Tech Stack:
| Area                  | Tool                    |
| --------------------- | ----------------------- |
| Programming Languages | HTML, CSS, Javascript   |
| Front-End Framework   | ReactJS                 |
| Back-End Framework    | ExpressJS               |
| Database              | MongoDB                 |

## Development Notes: 
### Coding Standards
ReactJS (JSX): https://github.com/airbnb/javascript/tree/master/react  
HTML: https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/HTML  
Javascript: https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript  
CSS: https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/CSS  

### Folder Structure
#### client (contains all the code for the front-end part of the project)
- src  
  - assets  
    - images (contains all the images to be used in the project)  
    - styles (contains all the css code)  
      - components (contains the css code for the components)
      - pages (contains the css code for the pages)  
      - App.css (css code for App.jsx)
      - index.css (css code for index.jsx)
  - components (contains the component which is a subset feature of a page ex. ImageButton, ClassList, etc)  
    `NOTE: every single file here will be imported in the pages folder`
  - pages (contains the pages of the project)
  - services (contains the callable axios for accessing the back-end)  
    `NOTE: each service should only access 1 database. For example, UserService should only be able to access the Users database`
  - utils (contains the utitilities/helpers for the front-end)
  - App.jsx (contains the routing logic for the project)
  - index.jsx (connects App.jsx to HTML)
- public (contains the built application)  
  `NOTE: the files here will be the ones used for deployment` 
- package.json (contains the details of the project for the front-end)

#### server (contains all the code for the back-end part of the project)
- controllers (contains the functions to access the database)
- helpers (contains the helper functions such as inserting default data to the database, and dropping the database)
- models (contains the mongoose schema and database.js) 
  - database.js (contains the commands for creating, reading, updating, and deleting in the database) 
- routes
  - routes.js (contains all the routing for calling a specific controller function) 
- modules (contains the middlewares)
- index.js (the main file which contains the code responsible for every back-end functionality)
- package.json (contains the details of the project for the back-end)