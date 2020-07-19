import express, { static as staticDist } from 'express';
import { userInfo } from 'os';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(staticDist('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: userInfo().username }));

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));
