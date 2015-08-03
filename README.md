# ResponsiveCSS
Targeting HTML tags with CSS selectors, will covert a static non-responsive website to a fully functional responsive website

# Quick Starting Points
* It is best viewed in the Device console within a javascript console in your browser.  
* I am starting at the iPhone6+ screen size pixel wise for now (414px X 736px).
* I only implemented the title for a horizontal screen rotation which will be a starting rule for landscape view.
* Cross-browser compatability is not implemented yet, works for Chrome.

I am using the Sass (Sytanctically Awesome Style Sheets) extension for CSS.  Sass gives functionality such as: @media, @mixin,
@content, $variables, breakpoints, functions, and nesting among many more.  

* Note: When dealing with nesting, one can not go to deep into nesting so to mitigate this Sass offers modules.  To start laying that out I have section the site by body.wrapper{} components followed by respective sections navigation, feature(not scaled correctly by apprx 200px), content, boxes, sidebar.

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



