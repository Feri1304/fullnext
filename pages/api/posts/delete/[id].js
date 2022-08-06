import db from '../../../../libs/db';

export default async function handler(req, res){
    if(req.method !== 'DELETE') return res.status(405).end();
    const{ id } = req.query; 
    // console.log(id)
    const deleteRow = await db('posts')
                            .where({id})
                            .del();

    // const deleteData = await db('posts').where({id}).first();
    res.status(200);
    res.json({
        message: 'Post delete sucessfully'
    });
}