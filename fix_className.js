const fs = require('fs');
const path = require('path');

const directory = 'e:\\git\\isurupinthu\\gitProgects\\superMarket\\src';

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            const newContent = content.replace(/<(\w+)\s+className\s*>/g, '<$1 className="">');
            if (content !== newContent) {
                console.log(`Fixing ${filePath}`);
                fs.writeFileSync(filePath, newContent, 'utf8');
            }
        }
    });
}

walk(directory);
