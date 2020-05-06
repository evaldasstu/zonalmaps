# Zonal Maps

## Overview

Zonal Maps creates embeddable maps with location markers using data from [Google Sheets](https://www.google.com/sheets/about/) spreadsheets. It has a powerful **zoning feature** which allows assigning object sets to geographical areas and automatically displays boundaries and additional information for such zones.

This project was developed to simplify a process of creating commercial real estate property maps and to provide an easy to learn and convenient way of real–time content update.

Zonal Maps is built with [React](https://reactjs.org) and uses map data provided by [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

## Using Zonal Maps

### Create the spreadsheet

To do: add description.

To do: add visuals.

### Spreadsheet specification {#spec}

To do.

### Share the spreadsheet

In Google Sheets, choose **File** > **Share**, select **Copy link** and change **Restricted** to **Anyone with the link** to allow the spreadsheet to be publicly readable.

### Get embed code

Navigate to [Get Embed Code](https://evaldasstu.github.io/zonalmaps/embed) to access the embed code generator. To do: add more.

#### Customize embed: Method

Expanding **Customize embed** panel and choosing **Method** allows to choose from two different options: **iframe** and **oEmbed**. Also, both methods work well for WordPress websites. Check the [Embedding in WordPress](#wordpress) section below for instructions for each approach.

##### iframe

*iframe* embed is a versatile time–tested format. It should be relatively easy to use such embed code by adding it to website's HTML code. Please note that `<style>` tag is added to make this embed a responsive 100 percent width element so it can nicely fit its container.

*iframe* method output example:

<pre style="white-space: pre-wrap">Test</pre>

```
<div class="zm"><iframe src="https://evaldasstu.github.io/zonalmaps/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>
```

##### oEmbed

*oEmbed* is a newer standard which lets embedding content into compatible websites and platforms without a clunky HTML snippet. A simple URL of embeddable content is enough (where this method is supported, e.g. in [WordPress](https://wordpress.org) or [Squarespace](https://squarespace.com) websites). More on this open standard can be found [here](https://oembed.com/).

*oEmbed* method output example:

`https://evaldasstu.github.io/zonalmaps/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM`

#### Customize embed: Language

By default, Zonal Maps outputs a user interface in English. However, this can be changed by choosing **Customize embed** and selecting **Language**.

#### Customize embed: Display property table

By default, Zonal Maps displays a property list in a sortable table format under the map. If this functionality is not needed, table display can be turned off by choosing **Customize embed** and unchecking the **Display property table** option.

### Theming

To do.

### Browser compatibility

To do.

### Embedding in WordPress {#wordpress}

To do.

#### iframe method

To do.

#### oEmbed method

To do.

## Examples

* [Link to Example 1](https://evaldasstu.github.io/zonalmaps/example/1)
* [Link to Example 2](https://evaldasstu.github.io/zonalmaps/example/2)
* [Link to Example 3](https://evaldasstu.github.io/zonalmaps/example/3)

## Development

Project source code is stored in a public GitHub repository at <https://github.com/evaldasstu/zonalmaps>.

This project is based on Create React App. Standard `npm start`, `npm test`, `npm run build` scripts are available in a Node.js development environment. More on this [here](https://create-react-app.dev/docs/available-scripts).

To do: add more on integration, branches, GitHub's encrypted secrets, Google Sheets API code.

### Deployment

Project's `package.json` is configured for deployment to GitHub Pages using `npm run deploy` script.

## Acknowledgements

Zonal Maps runs using:

* [React](https://reactjs.org)
* [OpenStreetMap](https://openstreetmap.org) via [Leaflet](https://leafletjs.com)
* [Google Sheets API](https://developers.google.com/sheets/api)

...as well as [Bootstrap](https://getbootstrap.com), [Sass](https://sass-lang.com), [react-spring](https://www.react-spring.io/), [Jest](https://jestjs.io) and other components. For full list, check the [dependency graph](https://github.com/evaldasstu/zonalmaps/network/dependencies).

## License

Zonal Maps is open source software licensed as... To do: choose a license.
