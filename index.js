//App de giphy

const API_KEY = 'WmFJWyf5MYL4Hzm3ym1nu6NDhGgC11kz';

const getGif = async() => {
  try {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const {data} = await resp.json();
    //console.log(data);
    const { url } = data.images.original;
    const {title} = data;
    const img = document.createElement('img');
    const titleGif = document.createElement('p');
    img.src = url;
    img.className = 'giphy';
    titleGif.innerText = title;
    titleGif.className = 'titleGif';
    document.body.append(img, titleGif);
  } catch (err) {
    console.error(err);
  }
};

getGif();