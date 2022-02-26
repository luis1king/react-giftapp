


export const getGifs = async(e) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(e) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
   const resp = await fetch(url);

   const {data} = await resp.json();

   const gifs = data.map( img =>{
       return {
           id:img.id,
           title: img.title,
           url: img.images.downsized_large.url}
        })

        return gifs;

}