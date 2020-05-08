# Zonal Maps
> https://evaldasstu.github.io/zonalmaps

## Overview

Zonal Maps creates embeddable maps with location markers using data from [Google Sheets](https://www.google.com/sheets/about/) spreadsheets. It has a powerful **zoning feature** which allows assigning object sets to geographical areas and automatically displays boundaries of such zones.

To do: add zoning visual?

This project was developed to simplify a process of creating commercial real estate property maps and to provide an easy to learn and convenient way of real–time content update.

Zonal Maps is built with [React](https://reactjs.org) and uses map data provided by [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

To do: add visuals.

## Prepare a spreadsheet

[Create a spreadsheet](https://sheet.new/) on Google Sheets.

The simplest possible spreadsheet that could be understood by Zonal Maps would look like this:

<img src="./public/readme/spreadsheet-screenshot-927427.png" alt="Spreadsheet screenshot" width="175" />

To do: explain regular attributes.

<img src="./public/readme/spreadsheet-screenshot-374628.png" alt="Spreadsheet screenshot" width="603" />

To do: describe that order numbers are not needed.

### Spreadsheet specification

For a spreadsheet that 

To do: introduction.

To do: sheet names: Locations, Translations (?).

Row 1 cell values represent location list header values. To do.

To do: add example spreadsheet screenshot.

[Open this spreadsheet](https://docs.google.com/spreadsheets/d/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM/edit?usp=sharing) in Google Sheets.

#### Special attributes

Special attribute names are presented in uppercase form to keep consistency with custom attributes, however they are case–insensitive. Special attributes are not displayed in location lists. 

| Special attribute | Required | Example value             |
|:------------------|:---------|:--------------------------|
| `Coordinates`     | +        | `54.698415, 25.271016`    | 
| `Zone`            |          | Central Business District |

##### `Coordinates`

Geographical coordinates are expected to be provided in Decimal degrees (DD) format. First number is for latitude, second is for longitude. For the example above, numbers for the example value have been conveniently copied from Google Maps, however four decimal places (`54.6984, 25.2710`) would suffice for most practical purposes. Space between latitude and longitude is optional, numbers must be comma–separated.

##### `Zone`

This attribute is used to assign objects to groups for displaying boundaries around geographic areas.

### Share the spreadsheet

In Google Sheets, choose **File** > **Share**, select **Copy link** and change **Restricted** to **Anyone with the link** to allow the spreadsheet to be publicly readable. The spreadsheet will have to remain public for the embed to work.

## Get embed code

Navigate to [Get Embed Code](https://evaldasstu.github.io/zonalmaps/embed) to access the embed code generator. To do: add more.

### Embed format

Expanding **Customize embed** panel and choosing **Format** allows to choose from two different options: **iframe** and **oEmbed**.

Note: In [WordPress](https://wordpress.org) websites, *iframe* method works out of the box. *oEmbed* can also be used, but one additional configuration step needs to be taken. Check [Embedding in WordPress](#embedding-in-wordpress) below for more info.

#### iframe

*iframe* embed is a versatile time–tested format. It should be relatively easy to use such embed code by adding it if you have access to website's HTML code. `<style>` tag is included in the embed code to make the content responsively fit its container.

##### iframe embed code example:

> `<div class="zm"><iframe src="https://evaldasstu.github.io/zonalmaps/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>`

#### oEmbed

*oEmbed* is a newer standard which lets embedding content into compatible websites and platforms using a shorter and simpler code snippet, which is a simple URL of embeddable content. This method is supported in some environments, e.g. in [Squarespace](https://squarespace.com) websites. More on this open standard can be found [here](https://oembed.com/).

##### oEmbed embed code example:

> `https://evaldasstu.github.io/zonalmaps/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM`

### Additional options

#### Language

By default, Zonal Maps outputs a user interface in English. However, this can be changed by choosing **Customize embed** and selecting **Language**.

To do: add instruction on translating attributes.

#### Display location list

By default, Zonal Maps displays a location list as a sortable table below the map. If this functionality is not needed, list display can be turned off by choosing **Customize embed** and unchecking **Display location list**.

## Use embed code

### Embedding in WordPress

#### iframe format

To add an embed to a [WordPress](https://wordpress.org) website using Block Editor (default since version 5.0), add a **Custom HTML** block and paste the embed code.

When using the Classic Editor or pre–Gutenberg WordPress, switch to **Text** tab of the editor and paste the embed code.

#### oEmbed format

WordPress supports *oEmbed* format and automatically displays content from selected websites by converting URLs into content objects straight in the editor. However, it uses an internal whitelist of trusted websites for this feature. To enable *oEmbed* for Zonal Maps, add this line to `functions.php` file of your theme:

> `wp_oembed_add_provider( 'https://evaldasstu.github.io/zonalmaps/embed/*', 'https://evaldasstu.github.io/zonalmaps/oembed', false );`

To do: check syntax.

### Browser support

| Desktop              | Mobile             |
|:---------------------|:-------------------|
| Chrome               | Chrome             |
| Firefox              | Firefox            |
| Safari 5+ (Mac only) | Safari 7+          |
| Opera 12+            | Android Browser 5+ |
| IE 10+               |                    |
| Edge                 |                    |

## Examples

* [Link to Example 1](https://evaldasstu.github.io/zonalmaps/example/1)
* [Link to Example 2](https://evaldasstu.github.io/zonalmaps/example/2)
* [Link to Example 3](https://evaldasstu.github.io/zonalmaps/example/3)

## Development

Project source code is stored in a public GitHub repository at https://github.com/evaldasstu/zonalmaps.

This project is based on Create React App. Standard `npm start`, `npm test`, `npm run build` scripts are available in a Node.js development environment. More on this [here](https://create-react-app.dev/docs/available-scripts).

To do: add more on integration, branches, GitHub's encrypted secrets, Google Sheets API code.

### Deployment

Project's `package.json` is configured for deployment to GitHub Pages using `npm run deploy` script.

## Acknowledgements

Zonal Maps runs using:

* [React](https://reactjs.org)
* [OpenStreetMap](https://openstreetmap.org) via [Leaflet](https://leafletjs.com)
* [Google Sheets API](https://developers.google.com/sheets/api)

As well as with the help of [Bootstrap](https://getbootstrap.com), [Sass](https://sass-lang.com), [react-spring](https://www.react-spring.io/), [Jest](https://jestjs.io) and other packages. For full list, check the [dependency graph](https://github.com/evaldasstu/zonalmaps/network/dependencies).

## License

Zonal Maps is open source software licensed as... To do: choose a license.
