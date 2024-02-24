import fs from 'node:fs'
import sql from 'better-sqlite3'
const db = sql('meals.db');
import slugify from 'slugify';
import xss from 'xss';

export async  function getMeals(){
    await new Promise((reslove)=>setTimeout(reslove,2000));
   
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower:true});
    meal.instructions = xss(meal.instructions);

    const extensions = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extensions}`
    // This is a method provided by the fs module that creates a writable stream to a specified file.
    
// A writable stream in Node.js is an abstraction provided by the Streams module that represents a destination for data to be written to. 
   const stream =  fs.createWriteStream(`public/images/${fileName}`)

   const bufferedImage = await meal.image.arrayBuffer();
   stream.write(Buffer.from(bufferedImage), (error)=>{
    if(error){
        throw new Error('Saving image failsed')
    }
   });

   meal.image = `/images/${fileName}`

   db.prepare(`
    INSERT INTO meals
    (title,summary,instructions, creator,creator_email,image,slug)
    VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
   `).run(meal);


    

}