import { viewsDir } from "../utils/path.js";

import Location from '../models/locationForm.js';

const form = (req,res) => {
    console.log("User is requesting form")
    res.sendFile('lake.html', {root: viewsDir})
}

const formUp = (req,res) => {
    console.log("User is sending info")
    const location = new Location(req.body)
    location.save()
    Location.fetchAll()    
    // console.log(req.body)
}

export {form,formUp}