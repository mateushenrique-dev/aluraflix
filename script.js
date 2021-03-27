const filmes = ['https://www.themoviedb.org/t/p/original/2yQUnpc1BXgesJrfcdoRa6jTAnA.jpg', 'https://www.themoviedb.org/t/p/original/p4tEfYSXFLl7qOXA7QwKF9R1qfV.jpg', 'https://www.themoviedb.org/t/p/original/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg', 'https://www.themoviedb.org/t/p/original/hJgEf18Sw8iwtQCzCSIQqGOLaq6.jpg', 'https://www.themoviedb.org/t/p/original/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg', 'https://www.themoviedb.org/t/p/original/uKval7QmEozy7R05FEvE3H9Qice.jpg']
const filmesDestaque = ['https://www.themoviedb.org/t/p/original/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg', 'https://www.themoviedb.org/t/p/original/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg', 'https://www.themoviedb.org/t/p/original/2umU3r6V4V2gTmSnZJmH61nTorF.jpg', 'https://www.themoviedb.org/t/p/original/owGZCAje2VKrGGdwxM7peVwhErx.jpg', 'https://www.themoviedb.org/t/p/original/jtLB7xJKcbekmOYkb5NZditBsgk.jpg', 'https://www.themoviedb.org/t/p/original/1sBx2Ew4WFsa1YY32vlHt079O03.jpg']
const nomeFilmes = ['Pantera Negra', 'Um Principe em Nova York', 'O poderoso chefão', 'Nova Ordem Espacial', 'The Walking Dead', 'Ginny e Georgia']
const categoriaFilmes = ['acao', 'comedia', 'suspense', 'acao', 'suspense', 'comedia']
const trailerFilmes = ['https://www.youtube.com/embed/KszSDnO3GGk', 'https://www.youtube.com/embed/EE10xW7Shdw', 'https://www.youtube.com/embed/y_-YWEot_7w', 'https://www.youtube.com/embed/l1ESdTFqjCM', 'https://www.youtube.com/embed/R1v0uFms68U', 'https://www.youtube.com/embed/GApM0D2gI1s']
const nomeFilmesDestaque = ['Coringa', 'Soul', 'Godzilla 2', 'Colheita Maldita', 'The Good Doctor', 'Lúcifer']
const categoriaFilmesDestaque = ['acao', 'infantil', 'acao', 'suspense', 'suspense', 'acao']
const btnHamburguer = document.querySelector('label')
const Categoria = document.querySelectorAll('input')
const buttonClose = document.querySelector('#closeButton')

if (typeof (localStorage.getItem('Imagem do Conteúdo')) !== 'object') {
  var categoriaAdd = (localStorage['Categorias']).split(',')
  var imagemAdd = (localStorage['Imagem do Conteúdo']).split(',')
  var nomeAdd = (localStorage['Nome do Conteúdo']).split(',')
  var trailerAdd = (localStorage['Trailer do Conteúdo']).split(',')
} else {
  var categoriaAdd = ''
  var imagemAdd = ''
  var nomeAdd = ''
  var trailerAdd = ''
}
console.log(categoriaAdd)
console.log(imagemAdd)
console.log(nomeAdd)
console.log(trailerAdd)

document.write('<h2>Destaques</h2>')
document.write('<div class="filmesDestaque container">')
for (let i = 0; i < filmesDestaque.length; i++) {
  document.write(`<div class="${categoriaFilmesDestaque[i]}"><img class="filme" src="${filmesDestaque[i]}">`);
  document.write(`<p>${nomeFilmesDestaque[i]}</p>`);
  document.write(`<a href="" onclick="exibirtrailer(${trailerFilmes[i]})" >Assistir</a>
  
  </div>`);
  
}
document.write('</div>')

function remove(item) {
  document.querySelector('.' + item).remove()
}


document.write('<div class="filmesGerais container">')

for (let i = 0; i < filmes.length; i++) {
  document.write(`<div class="${categoriaFilmes[i]} ${nomeFilmes[i].replace(/\s/g, '').toLowerCase().normalize()}"><img class="filmeNormal" src="${filmes[i]}">`);
  document.write(`<p>${nomeFilmes[i]}</p>`);
  document.write(`<button onclick="exibirTrailer('${trailerFilmes[i]}')">Assistir</button>
  <img class="lixoBtn" onclick="remove('${nomeFilmes[i].replace(/\s/g, '').toLowerCase().normalize()}')" src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png">
  </div>`);
}

for (let i = 0; (i < categoriaAdd.length) && (i < nomeAdd.length) && (i < imagemAdd.length) && (i < trailerAdd.length); i++) {
  if (nomeAdd[i] !== '') {
    document.write(`<div class="${categoriaAdd[i].slice(0)} ${nomeAdd[i].replace(/\s/g, '').toLowerCase().normalize()}"><img class="filmeNormal" src="${imagemAdd[i]}">`);
    document.write(`<p>${nomeAdd[i]}</p>`);
    document.write(`<button onclick="exibirTrailer('${trailerAdd[i].trim()}')" >Assistir</button>
    <img class="lixoBtn" onclick="remove('${nomeAdd[i].replace(/\s/g, '').toLowerCase().normalize()}')" src="https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png">
    </div>`);
  }
}
document.write('</div>')

function exibirTrailer(trailerLink) {
  document.querySelector('body').classList.add('trailer')
  document.querySelector('.iframe-field').innerHTML = (`
  
  <div class="iframe">
  <iframe class="iframe" width="760" height="415" src="${trailerLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <button class="closeTrailer" onclick="closeTrailer()">X</button>

  </div>
  `)
} 

function closeTrailer() {
  document.querySelector('body').classList.remove('trailer')
  document.querySelector('.iframe-field').innerHTML = ''
}

btnHamburguer.addEventListener('click', function() {
  document.getElementById('categorias').classList.toggle('ativo')
})
buttonClose.addEventListener('click', function() {
  document.querySelector('.adicionar').classList.remove('ativo')
  document.querySelector('#menu-hamburguer').checked = false
})

function adicionar() {
    

    const categoria = document.querySelector('select')
    const imagemBanner = document.querySelector('#imagemBanner')
    const nomeFilme = document.querySelector('#nomeFilme')
    const trailerFilme = document.querySelector('#linkTrailer')
    if ((categoria.value) && (categoria.value) && (categoria.value) && (categoria.value) != '') {
      document.getElementById('categorias').classList.remove('ativo')
      categoriaAdd += `,${categoria.value}`
      imagemAdd += `,${imagemBanner.value}`
      nomeAdd += `,${nomeFilme.value}`
      trailerAdd += `, ${trailerFilme.value}`
      localStorage.setItem('Categorias', categoriaAdd)
      localStorage.setItem('Imagem do Conteúdo', imagemAdd)
      localStorage.setItem('Nome do Conteúdo', nomeAdd)
      localStorage.setItem('Trailer do Conteúdo', trailerAdd)
      window.location.reload()
    } else {
      alert('Há campos vazios!')
    }
}

function categoria(categoria) {
    console.log(categoria)
    if (categoria === 'acao') {
        document.querySelectorAll('.comedia').forEach((comedia) => {
          comedia.classList.add('remove')
        })
        
        document.querySelectorAll('.acao').forEach((acao) => {
          acao.classList.remove('remove')
        })

        document.querySelectorAll('.suspense').forEach((suspense) => {
          suspense.classList.add('remove')
        })

        document.querySelectorAll('.infantil').forEach((infantil) => {
          infantil.classList.add('remove')
        })
    }
    else if (categoria === 'comedia') {
        document.querySelectorAll('.comedia').forEach((comedia) => {
          comedia.classList.remove('remove')
        })
        
        document.querySelectorAll('.acao').forEach((acao) => {
          acao.classList.add('remove')
        })

        document.querySelectorAll('.suspense').forEach((suspense) => {
          suspense.classList.add('remove')
        })

        document.querySelectorAll('.infantil').forEach((infantil) => {
          infantil.classList.add('remove')
        })
    }
    else if (categoria === 'suspense') {
        document.querySelectorAll('.comedia').forEach((comedia) => {
          comedia.classList.add('remove')
        })
        
        document.querySelectorAll('.acao').forEach((acao) => {
          acao.classList.add('remove')
        })

        document.querySelectorAll('.suspense').forEach((suspense) => {
          suspense.classList.remove('remove')
        })

        document.querySelectorAll('.infantil').forEach((infantil) => {
          infantil.classList.add('remove')
        })
      }
    else if (categoria === 'infantil') {
      document.querySelectorAll('.comedia').forEach((comedia) => {
        comedia.classList.add('remove')
      })
      
      document.querySelectorAll('.acao').forEach((acao) => {
        acao.classList.add('remove')
      })

      document.querySelectorAll('.suspense').forEach((suspense) => {
        suspense.classList.add('remove')
      })

      document.querySelectorAll('.infantil').forEach((infantil) => {
        infantil.classList.remove('remove')
      })
    }
  }

function ativarAdicionar() {
  document.querySelector('.adicionar').classList.add('ativo')
  document.getElementById('categorias').classList.remove('ativo')
  document.querySelector('#menu-hamburguer').checked = false
}


  