# Rainbow Six: Siege | Random Operators
A simple website that can be used to randomize your operator selection in Rainbow Six: Siege.

  * [Demo](https://orcicorn.com/siege)
  * [Change Log](https://github.com/orcicorn/SiegeOperators/blob/master/changes.txt)

## Note
The *includes/css/style.css* and *includes/js/global.js* files are supplied for reference only.  Both of these files are minified/uglified and injected directly in to the index.html due to their small size.  If you choose to change any of the css/js, you will have to manually repeat this process yourself.

## Legal
This project is not affiliated with, maintained, authorized, endorsed or sponsored by Ubisoft or any of its affiliates. This is an independent, unofficial project. All product or brand names are trademarks of their respective owners.  This is nothing more than a fan project.

## Adding Operators

  - Add "/images/operators/(name).jpg" for each operator
  - Update "/images/icons/sprite.png" with new icons
  - Add Operators to "/operators.json"
  - Change "operators.json?v=XXX" in /js/global.js to today's date
  - Update "/includes/css/style.css" to include class icon sprite definitions (.icon.(name))
  - Minify/Uglify "/js/global.js" and paste into the script footer of index.html & streamer.html
  - Minify/Uglify "/includes/css/style.css" and paste into the style tag of index.html & streamer.html
  - Update "last-modified" meta tag in index.html & streamer.html
  - Update changes.txt
  - Deploy/Commit