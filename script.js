// tambah pesan
$(".btn").on('click', function(){
    $(".forminput").toggleClass("show");
    console.log("oke")
})

// close
$(".close").on("click", function(){
    $(".forminput").toggleClass("show");
})

// pesan
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIJbLIaHvqXHRvbopd6mRK1rxmKRB9XidzXYNXiyT43xoFVqh5iJXHzcHNBvsQ9_Rw6A/exec'
const form = document.forms['submit-pesan']

form.addEventListener('submit', e => {
  e.preventDefault()
  $(".kirim").html("Mengirim...")
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan alert
        $(".alert").toggleClass("hide");
        // Kembalikan teks button
        $(".kirim").html("Kirim")
        // sembunyikan form input
        $(".forminput").toggleClass("show");
        form.reset();
        fetch(url) 
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.length)
    console.log(data[0])
    i =  0;
    setInterval(function(){
            $('.nama1').html(data[i].dari)
            $('.isi h3').html(data[i].pesan)
            $('.nama2').html(data[i].untuk)
            i++;
            if(i >= data.length){
                i = 0;
             }
         },5000)
       
} )
        console.log('Success!', response)})
    .catch(error => console.error('Error!', error.message))
})

// hilangkan alert
$(".alert span").on("click", function(){
    $(".alert").toggleClass("hide");
})



// Menampilkan data google sheet
const url = "https://script.google.com/macros/s/AKfycbz2QWcljY2TUH8kPAZD3VCwnI9xXYS3XcrpC8Vmba0cdSEJbaFXl_7si9MlEDCZCkEwBQ/exec";
const ssid = "11yjV_2lj9w6BXF1AlcEESCK9odZvEzo2-S4vKZEHoOk";
const query1 = `/gviz/tq?`;
const endpoint = `${url}${ssid}${query1}`;
fetch(url) 
.then(res => res.json())
.then(data => {
    // default
$('.nama1').html(data[0].dari)
$('.isi h3').html(data[0].pesan)
$('.nama2').html(data[0].untuk)
    console.log(data)
    console.log(data.length)
    console.log(data[0])
    i =  0;
    setInterval(function(){
            $('.nama1').html(data[i].dari)
            $('.isi h3').html(data[i].pesan)
            $('.nama2').html(data[i].untuk)
            i++;
            if(i >= data.length){
                i = 0;
             }
         },5000)
       
} )
{
}