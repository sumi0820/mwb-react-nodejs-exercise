## `How to run`

$ git clone https://github.com/sumi0820/mwb-react-nodejs-exercise.git  
$ cd mwb-react-nodejs-exercise  
$ docker-compose up --build  

App is running on http://localhost:3000/



## `Backend part`
☑ Server part to be implemented by node.js  
☑ Use a database or not - at your discretion.  - MongoDB  
☑ Any framework can be used.  - Express.js  
☑ Application should give a REST or GraphQL response.  -REST  
□ No Authentication needed, but could be scored as a bonus.  
☑ Backend part should be delivered as a Docker container.  


## `Frontend part`
☑ A frontend application should be implemented as a React single-page application. 
☑ Feel free to use any frontend framework (bootstrap, material-ui, etc.) - Bootstrap  
☑ Demonstrate the ability to manage the global application state.  
☑ Common idea is to show a list of devices (phones, tablets, computers, etc).   
☑ Click on the item title opens a modal dialog to increase or decrease the number of items.  
☑ Click on the ‘add to cart’ button should decrease quantity. Total number of items in the cart should be represented in the application header.   
☑ Click on the ‘remove from cart’ button should increase the quantity. The item quantity cannot be decreased if in stock left 0 items.    
☑ If this application opened in another window, after data changing, the second application instance should automatically open a modal window with a message about the changed data. Data in the header should be updated as well.  
☑ The modal window component should be reusable.  
☑ Frontend application should be delivered as a Docker   container.
