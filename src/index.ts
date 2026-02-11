import express,{Request,Response} from "express";
import empRoutes from "./routes/jobs.route";
import bookRoute from "./routes/book.route";
import productRoute from "./routes/product.route"
import userRoute from "./routes/user.route";

const app=express()
app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send("server is running");
});
app.use("/employees",empRoutes);
app.use("/book",bookRoute);
app.use("/product",productRoute);
app.use("/user",userRoute)
const port=5000;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})