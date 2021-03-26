const filmes = ['https://www.themoviedb.org/t/p/original/2yQUnpc1BXgesJrfcdoRa6jTAnA.jpg', 'https://www.themoviedb.org/t/p/original/p4tEfYSXFLl7qOXA7QwKF9R1qfV.jpg', 'https://www.themoviedb.org/t/p/original/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg', 'https://www.themoviedb.org/t/p/original/hJgEf18Sw8iwtQCzCSIQqGOLaq6.jpg', 'https://www.themoviedb.org/t/p/original/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg', 'https://www.themoviedb.org/t/p/original/uKval7QmEozy7R05FEvE3H9Qice.jpg']
const filmesDestaque = ['https://www.themoviedb.org/t/p/original/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg', 'https://www.themoviedb.org/t/p/original/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg', 'https://www.themoviedb.org/t/p/original/2umU3r6V4V2gTmSnZJmH61nTorF.jpg', 'https://www.themoviedb.org/t/p/original/owGZCAje2VKrGGdwxM7peVwhErx.jpg', 'https://www.themoviedb.org/t/p/original/jtLB7xJKcbekmOYkb5NZditBsgk.jpg', 'https://www.themoviedb.org/t/p/original/1sBx2Ew4WFsa1YY32vlHt079O03.jpg']
const nomeFilmes = ['Pantera Negra', 'Um Principe em Nova York', 'O poderoso chefão', 'Nova Ordem Espacial', 'The Walking Dead', 'Ginny e Georgia']
const categoriaFilmes = ['acao', 'comedia', 'suspense', 'acao', 'suspense', 'comedia']
const nomeFilmesDestaque = ['Coringa', 'Soul', 'Godzilla 2', 'Colheita Maldita', 'The Good Doctor', 'Lúcifer']
const categoriaFilmesDestaque = ['acao', 'infantil', 'acao', 'suspense', 'suspense', 'acao']
const btnHamburguer = document.querySelector('.hamburguer')
const Categoria = document.querySelectorAll('input')



document.write('<h2>Destaques</h2>')
document.write('<div class="filmesDestaque container">')
for (let i = 0; i < filmesDestaque.length; i++) {
  document.write(`<div class="${categoriaFilmesDestaque[i]}"><img class="filme" src="${filmesDestaque[i]}">`);
  document.write(`<p>${nomeFilmesDestaque[i]}</p>`);
  document.write(`<a href="#">Assistir</a></div>`);
  
}
document.write('</div>')



document.write('<div class="filmesGerais container">')
for (let i = 0; i < filmes.length; i++) {
  document.write(`<div class="${categoriaFilmes[i]}"><img class="filmeNormal" src="${filmes[i]}">`);
  document.write(`<p>${nomeFilmes[i]}</p>`);
  document.write(`<a href="#">Assistir</a></div>`);
}
document.write('</div>')

btnHamburguer.addEventListener('click', function() {
  console.log(document.getElementById('categorias'))
  console.log(document.getElementById('categorias').classList.add('ativo'))
})

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