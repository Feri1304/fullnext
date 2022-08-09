import jwt from 'jsonwebtoken';

export default async function handler(req, res){
    if(req.method !== 'GET') return res.status(405).end();
    
    try {
        const verify = jwt.verify(authToken, 'akuganteng');
        console.log(verify);


        const posts = await db('posts');

        res.status(200);
        res.json({
            message: 'posts data',
            data: posts
        });
    }catch(err){
        res.status(401).end();
    }
}