'use strict';

// Example
MI.get(/\/example\/[^\/]+|\//, (req, res) => {
    res.render('example/index', {
        vendor: MI.config.staticURL + '/static/react-portal',
        static: MI.config.staticURL + '/static/react-portal/example'
    });
});