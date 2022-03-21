import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200'],
    Credential: true
}));
app.get('/', (req, res) =>{

    res.send("Hello");
});
app.listen(8000, () =>{
    console.log('listen to port 8000')
})
