/**
 * 파일의 경로에 접근하거나 경로에 대해서 무언가를 처리할 때
 */
const path = require('path');

/**
 * 운영체제마다 표현되는 경로가 다르므로 path를 이용해 잘 동작하도록 만드는 것이 중요함
 * POSIX (Unix: Mac, Linux):'Users/temp/myfile.html'
 * Windows: 'C:\\temp\\myfile.html'
 */

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.group(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize
console.log(path.normalize('./folder///////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
