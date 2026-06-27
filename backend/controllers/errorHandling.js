import { viewsDir } from "../utils/path.js";

const error = (req,res) => {
    return res.sendFile('error.html', {root: viewsDir})
}

export {error}