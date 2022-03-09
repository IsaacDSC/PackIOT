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
<form action="/settings/edit/monitor/ordem/line" method="post">
    <input type="hidden" name="id" value="${element.id}">
    <div class="row mt-1 mb-1 row align-items-center"> 
        <div class="col-xl-2 col-sm-6 col-md-6">
            <h6 class="d-table-cell align-middle text-center">${element.line}</h6>
        </div>
        <div class="col-xl-2 col-sm-2 col-md-2 mt-0 text-center">
            <input type="number" name="ordem" value="${element.ordem}" class="form-control col-12">
        </div>
        <div class="col-xl-3 col-sm-3 col-md-3 mt-0 text-center">
            <select name="active" id="" class="form-control">
                <option value="${element.active==true? 'true': 'false'}">${element.active==true? 'Ativado': 'Desativado' }</option>
                <option value="${element.active==true? 'false': 'true'}">${element.active==true? 'Desativado': 'Ativado' }</option>
            </select>
        </div>
        <div class="col-xl-5 col-sm-12 col-md-12  text-center">
            <div class="btn-group col-12" role="group" aria-label="Basic example">
                <button type="submit" class="btn btn-dark col-12" title="Salvar">
                    <i class="fas fa-share-square"></i>
                </button>
                <button type="button" class="btn btn-dark col-12" data-bs-toggle="modal" data-bs-target="#EditInLine${element.id}" title="Editar">
                    <i class=" fas fa-edit"></i>
                </button>
                <a href="/overview/${element.line}" target="_blank" class="btn btn-dark col-12" title="Vizualizar">
                    <i class="fas fa-eye"></i>
                </a>
                <a href="${element.image? `/images/uploads/${element.image}`:`${element.link}`}" target="_blank" class="btn btn-dark col-12" title="Abrir Link">
                    <i class="fas fa-link"></i>
                </a>
                <a href="/settings/delete/monitor/line/${element.id}" class="btn btn-dark col-12" title="Apagar">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <hr>
</form>
        `
    })
}