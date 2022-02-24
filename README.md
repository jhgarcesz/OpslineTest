# Set up

 1. Download or clone the project.
 2. Open a command window for client folder and other one for the api folder.
 3. Run **npm install** command in both command windows.
 4. Execute **npm start** in the command window you have for the api folder
 5. Wait until you get a message saying **Successfully connected to MongoDB**.
 6. Then execute **npm start** in the command window you have opened for the client folder.
 7. The App is ready for you.
 
 # Approach
 
 I have created an API that was built using node.js and mongoDB for data access. 
 We have different layers since we are looking for a decoupled API, which means that 
 if we need to change our data access logic to be connected to a different database engine
 we could do it without changing anything in the upper layer which would be our controller (or service layer).
 
 In the client side, we have created a component to show all the records in a table where we do not display the
 entire record information until user clicks on the details button that is placed in the first column, when the button is clicked 
 we launch a modal built in a different component that renders all the details of the record which could be more user-friendly interface instead of
 showing all the data in each row of the table.
