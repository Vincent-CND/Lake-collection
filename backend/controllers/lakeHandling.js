import { viewsDir } from "../utils/path.js";

const form = (req,res) => {
    console.log("User is requesting form")
    res.sendFile('lake.html', {root: viewsDir})
}

export {form}