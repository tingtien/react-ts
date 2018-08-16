'use strict';

// Example
MI.get(/\/example\/[^\/]+|\//, (req, res) => {
    res.render('index', {
        vendor: MI.config.staticURL + '/static/{{name}}',
        static: MI.config.staticURL + '/static/{{name}}/example'
    });
});