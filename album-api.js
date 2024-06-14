const baseUrl="https://jsonplaceholder.typicode.com";
const container = document.getElementById('container');

const getAlbumData = async () => {
    const albumData = await fetch(`${baseUrl}/albums/1/photos`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(async (response) =>{
        const result = await response.json();
        return result
    })
    .catch(error=> {
        throw new Error(error.message)
    });

    console.log({albumData});

    albumData.forEach (item=>{
        const singleAlbumContainer= document.createElement('div');
        singleAlbumContainer.setAttribute('key',item.id)
        singleAlbumContainer.setAttribute('class','singleAlbumContainer')
        const title = document.createElement('h3');
        title.innerHTML=item.title;
        const image = document.createElement('img');
        image.src=item.url;
        singleAlbumContainer.appendChild(image);
        singleAlbumContainer.appendChild(title);
        container.appendChild(singleAlbumContainer);
    })
};

document.addEventListener('DOMContentLoaded',getAlbumData);