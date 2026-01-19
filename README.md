# After theme installation

1. In console navigate to the theme directory and install all needed packages via `npm` command.

`npm install`

2. Run laravel mix command to compile all assets.

`npx mix`

3. Seed all blueprints, languages and data

`php artisan theme:seed <author-themename>`

## Watching SASS and JS file changes

You can run watch command while styling the theme to automatically compile you assets.

`npm mix watch`

## Using Phosphor icons

If you want to use Phosphor icons alongside the default Google material symbols, you need to do the following:

1. Uncomment the lines in `webpack.mix.js` file.
2. Uncomment the stylesheet link in `layouts/default.htm` file.
3. Run the laravel mix command to compile all assets.

`npx mix`
