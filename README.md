# Click Dummy Sketch Plugin

Exports a simple HTML click dummy so you can easily prototype flows between your screens.

![Sketch Click Dummy](https://cloud.githubusercontent.com/assets/418877/5471648/6ff1f756-85f8-11e4-9645-05e76d699709.png)

# Installation
Download this plugin and [put it in your Sketch plugins folder](http://bohemiancoding.com/sketch/support/developer/01-introduction/01.html).

# How to use
- To create a link placeholder, group the elements you like to link, then select the group and also select a artbort (while shift is pressed)
  then use ^⇧⌘L to rename the group _linkto:ArtboardName_.
- Use _Export Click Dummy_ (^⇧⌘E) to export the HTML click dummy.
- Have a look at the Sketch file `Click Dummy Example.sketch` to get started.

# Known issues
- Sketch crashes when there are too many objects on the page. Splitting the document into pages or multiple documents is currently the only workaround we know of.

# Author
Frank Rausch, [Raureif GmbH](http://raureif.net)
# Extended/Changed
Kristof Friess (changed the handling a bit)

Uses the [Sketch Sandbox](https://github.com/bomberstudios/sketch-sandbox) library by Ale Muñoz.

# License
MIT License