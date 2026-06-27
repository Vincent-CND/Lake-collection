import { viewsDir } from '../utils/path.js';

const views = (req,res) => {
    console.log('User is landing to landPage')
    return res.sendFile('land.html', {root:viewsDir})
}

export {views}