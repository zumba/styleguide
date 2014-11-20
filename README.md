styleguide
==========

Zumba's Styleguide

<h4>INITIAL SETUP</h4>

1. "git clone" the repo
2. "bower install" to create your local bower_components directory
3. Run a web server of your choice to load the site, for example,  enter "python -m SimpleHTTPServer 8000"
4. Visit "localhost:8000" in your web browser

<h4>PAGE CREATION</h4>
1. Create an HTML file in the 'views' directory (or in a subdirectory in 'views' as needed, for example 'design')
2. Add the route to the 'js/app.js' Router function, with the path to the new file and desired browser path.
3. Add the link to the 'views/sidebar.html' file.