# SRC Folder Description

It is responsible for all the source code and animations used.

### :bulb: assets

The folder contains sources for all the animations used. They are loaders and a skater. Also, the app's favicon is located there.

### :bulb: components

The folder stores the source code for all the components used, their styles and logic helpers. Inside the folder the data is divided into independent components and UI ones.

Independent components:

- Day
- Task
- TaskRounds
- TasksList

UI components:

- customised buttons
- customised inputs
- vectors used

### :bulb: hooks

The folder is responsible for custom hooks used in the app. They are:

- useAuth - for authorisation
- useDays - for loading tasks from database and preparing the data for days calendar rendering
- useTheme - for theme management

### :bulb: logic

The folder contains some helper-functions files.

### :bulb: pages

The folder stores the source code for rendering and managing main components through the whole app.
These pages are:

- EntryPage
- SignIn
- SignUp
- Main
- NewTask
- EditTask

### :bulb: routes

The folder is responsible for switching between the pages mentioned above. It contains a file with routes constants and a component for their management.

### :bulb: store

The folder is used as Redux store management source. It includes an index file that is responsible for creating the store and slice folders which are in charge of the corresponding reducers.

Slices used:

- currentTaskSlice
- errorSlice
- lastDaySlice
- loadingSlice
- tasksSlice
- userSlice


### :bulb: theme-context

The folder is responsible for theme management logic

### :bulb: types
 
The folder includes a configuration file.

### :bulb: App.tsx & App.css

App.tsx is the main outer app component. App.css describes global styles used through the app.

### :bulb: firebase.ts

The file describes firebase connection configuration.

### :bulb: index.tsx & index.css

index.tsx is the start point of the app. index.css describes global style rules for the whole project.
