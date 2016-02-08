South By Drinks
---------------

The repository for sxdrinks.com. A Jekyll-site built to share editorial information about South By, and tips and tricks around it.

## Development

The site is built with [Jekyll](http://jekyllrb.com/), with a set of [Gulp](http://gulpjs.com/) tools to make development and deployment easier. All commands should be run through Gulp/npm, including installation tasks, to ensure everything is installed correctly.

### Pre-reqs / installation

First off, you will need Ruby version `2.2.2`. Make sure you have Bundler installed, as well as the latest node version. From there, run `npm install` to install all npm modules and all Ruby gems.

### Running the site locally

```
gulp serve
```

Will run all necessary tasks to ensure the site builds, Sass compiles, and JavaScript and Sass are linted appropriately. It will also run a BrowserSync server to ensure that all changes are updated automatically. Due to how we update our server— even configuration changes will trigger a full rebuild of the site.  

### Deployment

To deploy, you will need access to the appropriate S3 bucket. Your keys should be configured using Amazon's [AWS SDK suggestions](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html), and this task will pick up the appropriate keys.

Deployment occurs by running `gulp deploy`. This will build a complete version of the site (can do this alone with `gulp build`), and putting it into the `_public` folder. That will then be published up to S3, updated only the changed files. As a note: the full site will not update automatically— as it is behind a CloudFront distribution.

## License

The code within this repository is under the MIT License, while the content (e.g. blog posts) is under the Creative Commons Attribution-ShareAlike 4.0 International ([CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)).
