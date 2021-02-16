# Landing Page Project

The aim of this project is to convert the static web page state into an interactive wep page. 

# Functionality AND Behavior

1- Navigation

To build the navigation bar dynamically, I created "navcreator" function that clears the navigation bar at first then looping through each section to create "li" element for each section and add it to the "ul" Element using a Global Variable called "navbar".

2- Section Active State

Create "SectionPosition" function returns the size AND the relative position to check later in "IsActive" function whether the section is active on the screen or not by looping through each section using and then using the "ADDActiveSection" function to add the section or remove the it from the screen if it is not active.

3- Scroll to Anchor

I added the smooth effect using "scroll-behavior" in CSS Styling file for the whole HTML file.

4- Scroll to top button

Using "ScrollTopButton" function, I created "GoToTOpButton" as a Global Variable to check when click the "Top" button and return smoothly to the start of the page.

# Additions

I changed some styling of the navegation Bar to make it make it respnsev in a mobile such as:
1- .navbar__menu ul => added padding and changed the text-align to "center".
2-.navbar__menu li => added "padding-left" and changed the display to "inline-flex".
3-.navbar__menu .menu__link => removed padding and changed the display to "inline-flex".