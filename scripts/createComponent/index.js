// команда для создания файлов, пример:
// npm run create:component Button src/shared/ui

// на выходе создаются папка и файлы:
// src/shared/ui/Button/Button.tsx
// src/shared/ui/Button/Button.module.scss
// src/shared/ui/Button/Button.stories.tsx

const fs = require('fs/promises');
const path = require('path');

const resolveRoot = (...segments) => path.resolve(__dirname, '..', '..', ...segments);

const createComponent = async (componentName, componentPath) => {
    const resolvedPath = resolveRoot(componentPath);
    const componentDir = path.join(resolvedPath, componentName);

    try {
        await fs.mkdir(componentDir, { recursive: true });

        const templateDir = path.join(__dirname, 'templates');
        const templates = {
            component: await fs.readFile(
                path.join(templateDir, 'component.tsx.template'),
                'utf-8'
            ),
            story: await fs.readFile(
                path.join(templateDir, 'component.stories.tsx.template'),
                'utf-8'
            ),
            style: await fs.readFile(
                path.join(templateDir, 'component.module.scss.template'),
                'utf-8'
            ),
        };

        const filesToCreate = [
            {
                name: `${componentName}.tsx`,
                content: templates.component.replace(/\$NAME/g, componentName),
            },
            {
                name: `${componentName}.stories.tsx`,
                content: templates.story.replace(/\$NAME/g, componentName),
            },
            {
                name: `${componentName}.module.scss`,
                content: templates.style.replace(/\$NAME/g, componentName),
            },
        ];

        for (const file of filesToCreate) {
            await fs.writeFile(
                path.join(componentDir, file.name),
                file.content
            );
        }

        console.log(`Component ${componentName} created successfully at ${componentDir}`);
    } catch (error) {
        console.error('Error creating component:', error);
    }
};

// Получаем аргументы из командной строки
const [,, componentName, componentPath = 'src/shared/ui'] = process.argv;

if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}

createComponent(componentName, componentPath);
