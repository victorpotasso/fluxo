'use strict';

import path from 'path';
import bs from 'browser-sync';

import build from './build.mjs';

(async function() {
    const dirname = path.dirname('../');

    await build({ watch: true });

    console.log('Creating server');

    bs({
        server: path.resolve(dirname, 'build'),
        port: '6001',
        open: false,
        files: [
            '../build/*.js',
            '../build/**/*.js',
            '../build/**/*.html'
        ]
    });
})();
