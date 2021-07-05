import fs from 'fs';
import path from 'path';

// 사용:
// const routes = [];
// walkSync(path.resolve('./src/pages/'), (filePath) => {
//   const isPage = /\.(js|jsx|ts|tsx)$/.test(filePath);
//   if (isPage) {
//     const fpo = path.parse(filePath);
//     const routerPath = `${fpo.dir.replace(path.resolve('./src/pages'), '')}/${fpo.name}`;
//     routes.push({ path: routerPath });
//   }
// });

const walkSync = (currentDirPath: string, callback: any) => {
  fs.readdirSync(currentDirPath).forEach((name) => {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

export default walkSync;
