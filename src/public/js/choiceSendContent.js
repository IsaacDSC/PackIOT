let choiceDisplay = document.querySelector('#choiceDisplay')

choiceDisplay.innerHTML = `
  <div class="alert alert-warning d-flex align-items-center" role="alert">
    <i class="fas fa-exclamation-triangle"></i>
    <div>
      Selecione o tipo de vizualização
    </div>
  </div>
`

function choice(TypeChoice) {
    try {
        switch (TypeChoice) {
            case 'ReadVideosUploads':
                choiceDisplay.innerHTML = `
          <select name="video" id="" class="form-control">
              <option value="">Selecione o video</option>
              {{#each ../UploadsVideos}}
              <option value="{{this}}">{{this}}</option>
              {{/each}}
          </select>
          <input type="hidden" name="link" class="form-control mt-1 mb-1" placeholder="Link da Linha"/>
          `
                break;
            case 'ReadImagesUploads':
                choiceDisplay.innerHTML = `
          <select name="image" id="" class="form-control">
              <option value="">Selecione a imagem</option>
              {{#each ../UploadsImages}}
              <option value="{{this}}">{{this}}</option>
              {{/each}}
          </select>
          <input type="hidden" name="link" class="form-control mt-1 mb-1" placeholder="Link da Linha"/>
          `
                break;
            case 'link':
                choiceDisplay.innerHTML = `
          <input type="text" name="link" class="form-control mt-1 mb-1" placeholder="Link da Linha">
          `
                break;
            case 'Upload':
                choiceDisplay.innerHTML = `
          <input type="file" name="image" class="form-control mt-1 mb-1" />
        `
                break;
        }
    } catch (error) {
        console.log(error)
    }
}