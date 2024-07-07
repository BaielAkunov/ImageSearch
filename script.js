const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const showMoreBtn = document.getElementById('show-more-btn')
const search = document.getElementById('search')

const API = 'zyVP7UE_W8x4OUQ_5Rn2xR_JmUHdr1zsyBhiM604-w8'

let keyword = ''
let page = 1

async function searchImages(){
    keyword=searchBox.value 
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    results.map((results)=>{
        const img = document.createElement('img')
        img.classList.add('image')
        img.src = results.urls.small
        const imgLink=document.createElement('a')
        imgLink.href=results.links.html
        imgLink.target='_blank'
        imgLink.append(img)
        searchResult.append(imgLink)
    })
    showMoreBtn.style.display="block"
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    page=1
    searchImages()
})
showMoreBtn.addEventListener('click', (e)=>{
    e.preventDefault
    page++
    searchImages()
})