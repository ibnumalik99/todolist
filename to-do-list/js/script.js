// // buat tombol close dan tambahkan ke setiap list
// const li = document.getElementsByTagName('li')
// for(let i = 0; i < li.length; i++){
//     const close = document.createElement('button')
//     button.className = "close";
//     close.classList.add('btn', 'btn-primary')
//     const teks = document.createTextNode('Hapus')
//     close.appendChild(teks)
//     li[i].appendChild(close)
// }

// // sembunyikan list yang di hapus
// const hapus = document.getElementsByClassName('btn-primary')
// for(let i =0; i < hapus.length; i++){
//     hapus[i].onclick = function(){
//         const div = this.parentElement;
//         div.style.display = 'none'
//     }
// }

// // beri tanda list yang selesai
// const selesai = document.querySelector('ul')
// selesai.addEventListener('click', function(e){
//     if(e.target.tagName === 'li'){
//         e.target.classList.toggle('checked')
//     }
// }, false)

// // buat list dan tambahkan tombol
// const tombol = document.querySelector('#button-addon2').value
// tombol.addEventListener('click', function(){
//     const li = document.createElement('li')
//     // const input = document.getElementById('button-addon2').value;
//     const teks = document.createTextNode(input)
//     li.appendChild(teks)
//     if(input = ''){
//         alert('Mohon Masukan List Dengan Benar')
//     }else{
//         document.getElementById('daftar').appendChild(li)
//     }
//     var button = document.createElement('button');
//     var txt = document.createTextNode('Hapus');
//     button.className = "close";
//     close.classList.add('btn', 'btn-primary')
//     button.appendChild(txt);
//     li.appendChild(button);

//     const hapus = document.getElementsByClassName('btn-primary')
//     for(let i =0; i < hapus.length; i++){
//         hapus[i].onclick = function(){
//             const div = this.parentElement;
//             div.style.display = 'none'
//         }
//     }
// })


// const tambah = document.getElementById('button-addon2')
// tambah.addEventListener('click',function(){
//     // rangkai li
//     const li = document.createElement('li');
//     const input = document.querySelector('input').value
//     const isi = document.createTextNode(input)
//     li.appendChild(isi)

//     // buat tombol hapus untuk li
//     const tombol = document.createElement('button')
//     tombol.classList.add('btn', 'btn-primary', 'hapus')
//     const teksHapus = document.createTextNode('Hapus')
//     tombol.appendChild(teksHapus)
//     li.appendChild(tombol)

//     // buat kerja tombol
//     var close = document.getElementsByClassName('hapus');
//     // for (var i = 0; i < close.length; i++) {
//     //     close[i].onclick = function() {
//     //         var div = this.parentElement;
//     //         div.style.display = "none";
//     //     }
//     // }

//     if (input){
//         document.getElementById('daftar').appendChild(li)
//     }
//  // beri tanda list yang selesai
//     const selesai = document.querySelector('ul')
//     selesai.addEventListener('click', function(e){
//         if(e.target.tagName === 'li'){
//             e.target.classList.toggle('checked')
//         }
//     }, false)

    
   

//     console.log(li)
// })


// beri tanda list yang sudah selesai
const hapus = document.getElementsByClassName('hapus')
const ubah = document.getElementsByClassName('edit')

const ul = document.querySelector('ul')
ul.addEventListener('click',function(e){
    if(e.target = document.getElementsByClassName('li')){
        e.target.classList.toggle('checked')
    }
}, false)



const tambah = document.getElementById('button-addon2')
tambah.addEventListener('click', function(){
    // buat li
    const liBaru = document.createElement('li')
    let inputNilai = document.getElementById('input').value
    let t = document.createTextNode(inputNilai)
    liBaru.appendChild(t)
    if(inputNilai){
        document.getElementById('daftar').appendChild(liBaru)
    }
    // document.getElementById('input').value = ''

    //buat tombol
    const button = document.createElement('button')
    const txt = document.createTextNode('Hapus')
    button.classList.add('btn', 'btn-primary', 'hapus')
    button.appendChild(txt)
    liBaru.appendChild(button)

    const tombol = document.createElement('button')
    const edit = document.createTextNode('Edit')
    tombol.classList.add('btn', 'btn-success', 'edit')
    tombol.appendChild(edit)
    liBaru.appendChild(tombol)
    for (let i = 0; i < hapus.length; i++) {
        const btn = hapus[i];
        btn.onclick = function(){
            const div = this.parentElement;
            div.style.display = 'none';
        }
    }
    for (let i = 0; i < ubah.length; i++) {
        const tbl = ubah[i];
        tbl.onclick = function(){
            const popup = prompt('tulis')
            tombol.previousElementSibling.previousElementSibling.innerHTML = popup
        }
    }

    console.log(liBaru)
})