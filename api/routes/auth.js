import express from "express";

const router = express.Router();

router.get("/api", (req, res)=> {
    res.send("Hey, this is auth endpoint!")
})


export default router