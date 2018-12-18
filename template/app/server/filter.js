'use strict';

// Example
MI.get(/\/example\/[^\/]+|\//, (req, res) => {
    res.render('index');
});