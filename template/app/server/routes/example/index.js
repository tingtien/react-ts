'use strict';

// Example
MI.get(/\/example\/[^\/]+|\//, (req, res) => {
    res.render('layouts/example/index');
});

