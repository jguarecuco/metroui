Package.describe({
  name: 'jguarecuco:metroui',
  version: '1.0.4',
  // Brief, one-line summary of the package.
  summary: 'Integración de MetroUi version 4',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jguarecuco/metroui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('ecmascript');
  api.mainModule('metroui.js');
  api.addFiles(['metro.min.css', 'metro.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jguarecuco:metroui');
  api.mainModule('metroui-tests.js');
});
