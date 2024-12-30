const { join } = require('path');
const { promisify } = require('util');
const { readdir, writeFile } = require('fs').promises;
const regCli = require('reg-cli');

const lokiDir = join(__dirname, '..', '.loki');
const actualDir = join(lokiDir, 'current');
const expectedDir = join(lokiDir, 'reference');
const diffDir = join(lokiDir, 'difference');

(async function main() {
    try {
        await regCli({
            actualDir,
            expectedDir,
            diffDir,
            json: join(lokiDir, 'report.json'),
            report: join(lokiDir, 'report.html'),
            update: false,
        });
        console.log('Visual regression report generated successfully');
    } catch (error) {
        console.error('Error generating visual regression report:', error);
        process.exit(1);
    }
}());
