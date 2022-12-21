const tambah = document.querySelector('.tambah');
const tabel = document.querySelector('.table')
const tombolD = document.createElement('td')
tambah.addEventListener('click', function(){
    const kata = prompt('tulis')
    const isi = document.createTextNode(kata)
    const tr = document.createElement('tr')
    const td = document.createElement('td')    
    td.appendChild(isi)
    td.classList.add('col-10')
    tr.appendChild(td)
    
    const tblm = document.createElement('button')
    const delet = document.createTextNode('delet')
    tblm.appendChild(delet)
    tombolD.appendChild(tblm)
    tblm.classList.add('btn', 'btn-danger', 'delete')
    tblm.setAttribute('type','button')
    tblm.style.color = 'black'
    tr.appendChild(tombolD)
    
    const tombolE = document.createElement('td')
    const tblb = document.createElement('button')
    const edit = document.createTextNode('edit')
    tblb.appendChild(edit)
    tombolE.appendChild(tblb)
    tblb.classList.add('btn','btn-primary', 'edite')
    tblb.setAttribute('type','button')
    tblb.style.color = 'black'
    tr.appendChild(tombolE)
    
    if(kata){
        tabel.appendChild(tr);
        console.log(tr)
    }
    
})



// delet
tombolD.addEventListener('click',function(){
    console.log('p')
})


// const tD = tabel.querySelector('tr td:nth-child(2) button') 
// tabel.addEventListener('click', function(e){
//     if(e.target == tD ) {
//         console.log('ok')
//     }
// })