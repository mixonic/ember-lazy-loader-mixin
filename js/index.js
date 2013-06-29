Ember.TEMPLATES['index'] = Ember.Handlebars.compile('<h2>Pick a Sherlock</h2><ul>{{#each}}<li>{{#linkTo "sherlock" this}}{{name}}{{/linkTo}}</li>{{/each}}</ul>');
