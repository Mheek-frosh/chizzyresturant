
import fs from 'fs';
import path from 'path';

const dir = './src/components';
if (!fs.existsSync(dir)) {
    console.error(`Directory ${dir} not found`);
    process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes("from 'framer-motion'")) {
        let newContent = content;

        // Replace import: "import { motion" -> "import { motion as Motion"
        // Handle both "import { motion }" and "import { motion, ..."
        newContent = newContent.replace(/import \{ motion/g, 'import { motion as Motion');

        // Replace usage: "<motion." -> "<Motion."
        newContent = newContent.replace(/<motion\./g, '<Motion.');

        // Replace closing tag: "</motion." -> "</Motion."
        newContent = newContent.replace(/<\/motion\./g, '</Motion.');

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated ${file}`);
        } else {
            console.log(`No changes needed for ${file}`);
        }
    }
});
