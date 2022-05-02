'use strict';

import path from 'path';
import glob from 'glob';
import util from 'util';
import del from 'del';
import esbuild from 'esbuild';

async function build(options) {
    const dirname = path.dirname('../');
    const absWorkingDir = path.resolve(dirname, 'src');
    const outdir = path.resolve(dirname, 'build');

    del([
        'build//*.js',
        'build/**/*.js'
    ]);

    const entryPoints = await util.promisify(glob)('**/*.ts', { cwd: absWorkingDir });

    await esbuild.build({
        absWorkingDir,
        entryPoints,
        outdir,
        bundle: true,
        chunkNames: 'chunck/[name]-[hash]',
        charset: 'utf8',
        format: 'esm',
        logLevel: 'info',
        minify: true,
        sourcemap: true,
        splitting: true,
        tsconfig: path.resolve(dirname, 'tsconfig.json'),
        ...options
    });
}

(function() {
    build();
})();

export default build;
