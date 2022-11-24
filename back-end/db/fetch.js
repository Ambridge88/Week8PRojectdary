const settings = { 
    "async": true, 
    "crossDomain": true, 
    "url": "https://atlas.api.barclays/open-banking/v2.1/atms", 
    "method": "GET", 
    "headers": { 
    "cache-control": "no-cache", 
    } 
    } 
    $.ajax(settings).done(function (response) { 
    console.log(response); 
    });


const atmLocation = async() =>{
    const response = await fetch(`https://atlas.api.barclays:443/open-banking/v2.2`, settings)
    const data = await response.json()
    const location = await data
    return location
}
