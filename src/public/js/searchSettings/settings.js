async function settingsLines(nameLine, serverHost) {
    const response = await fetch(`http://${serverHost}/settings/line/search`, {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded'
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ line: nameLine })
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.json();
    insertLines(content)
}

async function insertLines(content) {
    const monitor = document.querySelector('#monitor')
    monitor.innerHTML = ''
    content.forEach(element => {
                monitor.innerHTML += `
    <div class="row mt-1 mb-1">    
        <div class="col-xl-2 col-sm-12 col-md-12 text-center">
        ${element.image? `<a target="_blank" href="/images/uploads/${element.image}"><img src="/images/uploads/${element.image}" class="mt-4" width="100" alt="${element.image}"></a>`:`<a target="_blank" href="${element.link}" class="btn btn-success col-12 mt-4"><i class="fas fa-link"></i></a>`}
            
        </div>       
        <div class="col-xl-6 col-sm-12 col-md-12 mt-4 text-center">
            <h4>${element.line} - ${element.time} Min -  ${element.active==true? 'Ativado': 'Desativado' }</h4>
        </div>             
        <div class="col-xl-4 col-sm-12 col-md-12 mt-4 text-center">
            <div class="btn-group col-12" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-dark col-12" data-bs-toggle="modal"
                    data-bs-target="#EditInLine${element.id}">
                    <i class=" fas fa-edit"></i>
                </button>
                <a href="/overview/${element.line.replace(/\s/g, '')}" target="_blank"
                    class="btn btn-dark col-12">
                    <i class="fas fa-eye"></i>
                </a>
                <a href="/settings/delete/monitor/line/${element.id}"
                    class="btn btn-dark col-12">
                    <i class="fas fa-trash-alt"></i>
                </a>               
            </div>
        </div>
    </div>
    <hr>
        `
    })

}