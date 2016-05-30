# Screen Invaders OS

## Intro

The aims of this project is to deliver an easily theme-able OS-look-a-like for uses on movie sets. Two stylesheets are to be delivered, one for the “belastingdienst” and one for the Screen Invaders company.

## Usage

(The node package manager (npm) needs to be installed globally)

First time initialization: ```npm run prepare```

To test the app: ```npm run dev``` and check localhost:8080

To build the app: ```npm run build``

To regenerate the data: ```npm run data``

To build & deploy the app to GH-pages: ```npm run deploy```

## Components breakdown
 
1. Filesytem
 - Representation
 - Random generator (folders and files)
2. Overlays
 - Intro (fullscreen and browser detection)
 - Login (with error messages) 
3. Window Manager
 - Desktop and menu with drop-downs
 - Performant windows and modals
 - Behavior (focus, move, resize, open / close) 
4. Apps / Notable components
 - Explorer (up / down, path view, two view modes)
 - Search (exact match on filename)
 - txt/md-viewer
 - PDF-viewer (paginated index and main view)
 - Browser (url to iframe link)

## Implementation details

1. Component based Javascript architecture implemented with ES6, React JSX and Webpack/NPM. to create a performant app. State is managed by a single synchronous store (or tree) implemented with Redux. 
2. Modular CSS implemented with SMACCS and SASS.
3. Content generation scripts are implemented with Bash and Node scripts.
4. Version control (git) used to track development.

## Process

Agile (iterative) process with specifications and designs changing during development as needed and within reason. Local development environment and online staging area is provided. Final delivery by email with packaged files and Github repository.




