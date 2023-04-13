<pre>
Steps to create the project:

step 1: create an express project
step 2: install npm package @googlemaps/js-api-loader, nodemon
step 3: create a js file in public/javascript
step 4: go to https://developers.google.com/maps/documentation/javascript/overview#javascript_1 and get the code on top for javascript
step 5: in Index.hbs create a div with id "map"
step 6: create a script tag with async and defer and add the src https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
step 7: add "start": "node ./bin/www","dev": "nodemon ./bin/www" in package.json
step 8: start express app with npm run dev 
</pre>




Reference video - https://www.youtube.com/watch?v=ZscHG5xY_r4&t=695s&ab_channel=SameerSaini

Stack link - https://stackoverflow.com/questions/52056077/google-maps-api-using-express-and-node-js

Maps code - https://developers.google.com/maps/documentation/javascript/overview#javascript_1