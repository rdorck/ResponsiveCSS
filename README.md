# ResponsiveCSS
Targeting HTML tags with CSS selectors, will covert a static non-responsive website to a fully functional responsive website

I am using the Sass (Sytanctically Awesome Style Sheets) extension for CSS.  Sass gives functionality such as: @media, @mixin,
@content, $variables, breakpoints, functions, and nesting among many more.  

Using this functionality we can locate, grab and modify HTML/HTML5 tags with CSS/CSS3.  These modifications will be specifically
aimed towards tablets as well as mobile phones.  Basic ideas include: main nav icon button, main content layout orientated 
vertically, slide in-out sidebars and other standard mobile layout ideologies. 

# Development Goal
Given an .html file, a user can select the tags of elements that they want to alter and in what manner.  Then navigate through said
.html until locating those tags and providing the correct manipulation.
* Example: .html file contains: <body> <nav> <ul> <li>Navigation Tab</li> </ul> <nav>    and the user wants this to be a sidebar
at breakpoint 414px (iphone 6+) then they would select this option and the applicable Sass functions will execute this producing
a new .scss & .css file for your website. 

Sass can be forked from github: https://github.com/sass/sass



