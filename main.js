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
            <button type="button" class="ms-auto mb-3 me-3 btn btn-danger"><i class=" fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
          `
          showContainer.appendChild(div);
          });
}

const seeAll = () =>{
          fetch('https://openapi.programming-hero.com/api/ai/tools')
          .then(res =>res.json())
          .then(data=> displayAllData(data.data.tools))
          const allData = document.getElementById('aiAllData');
          allData.innerHTML = '';
}

showAllData();