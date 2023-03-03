const showAllData = () =>{
          fetch('https://openapi.programming-hero.com/api/ai/tools')
          .then(res =>res.json())
          .then(data=> displayAllData(data.data.tools.slice(0,6)))
}

const displayAllData = (show) =>{
          const showContainer = document.getElementById('aiAllData');
          show.forEach(elements => {
          console.log(elements)                
          const div = document.createElement('div')
          div.innerHTML=`
          <div class="col">
          <div class="card h-100 mt-4">
            <img src="${elements.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text fw-bold fs-3 text">Features: <br>
              <ol>
              <li>Natural language processing</li>
              <li>Contextual understanding</li>
              <li>Text generation</li>
              </ol>
              </p>
            </div>
            <hr>
            <div class="d-flex">
            <h5 class="card-title fw-bold ms-3">${elements.name}</h5>
            <p class="ms-3"><i class="me-3 fa-solid fa-calendar-days"></i>${elements.published_in}</p>
            <button id="showModalData" onclick="showDetails('${elements.id}')" type="button" class="ms-auto mb-3 me-3 btn btn-danger" data-bs-toggle="modal" data-bs-target="#aiDetailsModal"><i class=" fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
          `
          showContainer.appendChild(div);
          });
          spinnerSection(false);
}

const seeAll = () =>{
          fetch('https://openapi.programming-hero.com/api/ai/tools')
          .then(res =>res.json())
          .then(data=> displayAllData(data.data.tools))
          const allData = document.getElementById('aiAllData');
          allData.innerHTML = '';
          spinnerSection(true);
}

const spinnerSection = isLoading =>{
          const loader = document.getElementById('spinner')
          if(isLoading){
                    loader.classList.remove('d-none')
          }
          else{
                    loader.classList.add('d-none')
          }
}

const showDetails = (id) =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showAiDetailsModal(data))
}

const showAiDetailsModal = (ai) =>{
  console.log(ai.data.description);
  const modalPart = document.getElementById('modalDiv');
  // const modalDiv = document.createElement('div');
  modalPart.classList.add('modal-xl')
  modalPart.innerHTML = `
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card bg-danger-subtle">
      <div class="card-body">
      <p class="fw-bold fs-2 text">${ai.data.description}</p>
      <div class="d-lg-flex justify-content-between mt-5 mb-5">
      <div class="border border-danger p-2 text-success text-center">
        <p>${ai.data.pricing[0].price}</p>
        <p>${ai.data.pricing[0].plan}</p>
      </div>
      <div class="border border-danger p-2 text-primary text-center">
        <p>${ai.data.pricing[1].price}</p>
        <p>${ai.data.pricing[1].plan}</p>
      </div>
      <div class="border border-danger p-2 text-danger text-center">
        <p>${ai.data.pricing[2].price}</p>
        <p>${ai.data.pricing[2].plan}</p>
      </div>
      </div>
      <div class="d-lg-flex">
      <div>
      <p class="fw-bold">Features:</p>
      <li>${ai.data.features[1].feature_name}</li>
      <li>${ai.data.features[2].feature_name}</li>
      <li>${ai.data.features[3].feature_name}</li>
      </div>
      <div class="ms-auto"><p class="fw-bold">Integrations:</p>
      <li>${ai.data.integrations[0]}</li>
      <li>${ai.data.integrations[1]}</li>
      <li>${ai.data.integrations[2]}</li>
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card" style="width: 18rem;">
  <img src="'${ai.data.image}'" class="card-img" alt="...">
</div>
  </div>
</div>

  `
  // modalPart.appendChild(modalDiv)


}

showAllData();