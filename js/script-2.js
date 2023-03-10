// portrait , food , snap , contact 




const $portrait = document.querySelector('#portrait');
const $portraitPhoto = document.querySelector('.portrait_photo');
const $portraitPhotoBox = document.querySelector('.portrait_photo .box');
const $portrait_full = document.querySelector('.portrait_full');




const $portraitPhotoBox01 = document.querySelector('.portrait_photo .box_01');
const $portraitPhotoBox02 = document.querySelector('.portrait_photo .box_02');
const $portraitPhotoBox03 = document.querySelector('.portrait_photo .box_03');
const $portraitPhotoBox04 = document.querySelector('.portrait_photo .box_04');
const $portraitPhotoBox05 = document.querySelector('.portrait_photo .box_05');
const $portraitPhotoBox06 = document.querySelector('.portrait_photo .box_06');
const $portraitPhotoBox07 = document.querySelector('.portrait_photo .box_07');
const $portraitPhotoBox08 = document.querySelector('.portrait_photo .box_08');
const $portraitPhotoBox09 = document.querySelector('.portrait_photo .box_09');
const $portraitPhotoBox10 = document.querySelector('.portrait_photo .box_10');
const $portraitPhotoBox11 = document.querySelector('.portrait_photo .box_11');
const $portraitPhotoBox12 = document.querySelector('.portrait_photo .box_12');
const $portraitPhotoBox13 = document.querySelector('.portrait_photo .box_13');
const $portraitPhotoBox14 = document.querySelector('.portrait_photo .box_14');
const $portraitPhotoBox15 = document.querySelector('.portrait_photo .box_15');
const $portraitPhotoBox16 = document.querySelector('.portrait_photo .box_16');
const $portraitPhotoBox17 = document.querySelector('.portrait_photo .box_17');
const $portraitPhotoBox18 = document.querySelector('.portrait_photo .box_18');
const $portraitPhotoBox19 = document.querySelector('.portrait_photo .box_19');
const $portraitPhotoBox20 = document.querySelector('.portrait_photo .box_20');



const $portraitFull01 = document.querySelector('.portrait_box_01_full');
const $portraitFull02 = document.querySelector('.portrait_box_02_full');
const $portraitFull03 = document.querySelector('.portrait_box_03_full');
const $portraitFull04 = document.querySelector('.portrait_box_04_full');
const $portraitFull05 = document.querySelector('.portrait_box_05_full');
const $portraitFull06 = document.querySelector('.portrait_box_06_full');
const $portraitFull07 = document.querySelector('.portrait_box_07_full');
const $portraitFull08 = document.querySelector('.portrait_box_08_full');
const $portraitFull09 = document.querySelector('.portrait_box_09_full');
const $portraitFull10 = document.querySelector('.portrait_box_10_full');
const $portraitFull11 = document.querySelector('.portrait_box_11_full');
const $portraitFull12 = document.querySelector('.portrait_box_12_full');
const $portraitFull13 = document.querySelector('.portrait_box_13_full');
const $portraitFull14 = document.querySelector('.portrait_box_14_full');
const $portraitFull15 = document.querySelector('.portrait_box_15_full');
const $portraitFull16 = document.querySelector('.portrait_box_16_full');
const $portraitFull17 = document.querySelector('.portrait_box_17_full');
const $portraitFull18 = document.querySelector('.portrait_box_18_full');
const $portraitFull19 = document.querySelector('.portrait_box_19_full');
const $portraitFull20 = document.querySelector('.portrait_box_20_full');


$portrait.addEventListener('click', () => {
    $portraitPhoto.classList.add('active');
});


document.querySelector('.portrait_photo .logo').addEventListener('click', () => {
    $portraitPhoto.classList.remove('active');
});


$portraitPhotoBox01.addEventListener('click', () => {
    $portraitFull01.classList.toggle('active');
});

$portraitPhotoBox02.addEventListener('click', () => {
    $portraitFull02.classList.toggle('active');
});

$portraitPhotoBox03.addEventListener('click', () => {
    $portraitFull03.classList.toggle('active');
});

$portraitPhotoBox04.addEventListener('click', () => {
    $portraitFull04.classList.toggle('active');
});

$portraitPhotoBox05.addEventListener('click', () => {
    $portraitFull05.classList.toggle('active');
});

$portraitPhotoBox06.addEventListener('click', () => {
    $portraitFull06.classList.toggle('active');
});

$portraitPhotoBox07.addEventListener('click', () => {
    $portraitFull07.classList.toggle('active');
});

$portraitPhotoBox08.addEventListener('click', () => {
    $portraitFull08.classList.toggle('active');
});

$portraitPhotoBox09.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull09.classList.toggle('active');
});

$portraitPhotoBox10.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull10.classList.toggle('active');
});

$portraitPhotoBox11.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull11.classList.toggle('active');
});

$portraitPhotoBox12.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull12.classList.toggle('active');
});

$portraitPhotoBox13.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull13.classList.toggle('active');
});

$portraitPhotoBox14.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull14.classList.toggle('active');
});
$portraitPhotoBox15.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull15.classList.toggle('active');
});
$portraitPhotoBox16.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull16.classList.toggle('active');
});
$portraitPhotoBox17.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull17.classList.toggle('active');
});
$portraitPhotoBox18.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull18.classList.toggle('active');
});
$portraitPhotoBox19.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull19.classList.toggle('active');
});
$portraitPhotoBox20.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $portraitFull20.classList.toggle('active');
});



document.querySelector('.portrait_box_01_full').onclick = () =>{
    $portraitFull01.classList.remove('active');
};
document.querySelector('.portrait_box_02_full').onclick = () =>{
    $portraitFull02.classList.remove('active');
};
document.querySelector('.portrait_box_03_full').onclick = () =>{
    $portraitFull03.classList.remove('active');
};
document.querySelector('.portrait_box_04_full').onclick = () =>{
    $portraitFull04.classList.remove('active');
};
document.querySelector('.portrait_box_05_full').onclick = () =>{
    $portraitFull05.classList.remove('active');
};
document.querySelector('.portrait_box_06_full').onclick = () =>{
    $portraitFull06.classList.remove('active');
};
document.querySelector('.portrait_box_07_full').onclick = () =>{
    $portraitFull07.classList.remove('active');
};
document.querySelector('.portrait_box_08_full').onclick = () =>{
    $portraitFull08.classList.remove('active');
};
document.querySelector('.portrait_box_09_full').onclick = () =>{
    $portraitFull09.classList.remove('active');
};
document.querySelector('.portrait_box_10_full').onclick = () =>{
    $portraitFull10.classList.remove('active');
};
document.querySelector('.portrait_box_11_full').onclick = () =>{
    $portraitFull11.classList.remove('active');
};
document.querySelector('.portrait_box_12_full').onclick = () =>{
    $portraitFull12.classList.remove('active');
};
document.querySelector('.portrait_box_13_full').onclick = () =>{
    $portraitFull13.classList.remove('active');
};
document.querySelector('.portrait_box_14_full').onclick = () =>{
    $portraitFull14.classList.remove('active');
};
document.querySelector('.portrait_box_15_full').onclick = () =>{
    $portraitFull15.classList.remove('active');
};
document.querySelector('.portrait_box_16_full').onclick = () =>{
    $portraitFull16.classList.remove('active');
};
document.querySelector('.portrait_box_17_full').onclick = () =>{
    $portraitFull17.classList.remove('active');
};
document.querySelector('.portrait_box_18_full').onclick = () =>{
    $portraitFull18.classList.remove('active');
};
document.querySelector('.portrait_box_19_full').onclick = () =>{
    $portraitFull19.classList.remove('active');
};
document.querySelector('.portrait_box_20_full').onclick = () =>{
    $portraitFull20.classList.remove('active');
};














// id-pet

const $idPet = document.querySelector('#idpet');
const $idPetPhoto = document.querySelector('.id_pet_photo');
const $idPetPhotoBox = document.querySelector('.id_pet_photo .box');
const $idPet_full = document.querySelector('.id_pet_full');




const $idPetPhotoBox01 = document.querySelector('.id_pet_photo .box_01');
const $idPetPhotoBox02 = document.querySelector('.id_pet_photo .box_02');
const $idPetPhotoBox03 = document.querySelector('.id_pet_photo .box_03');
const $idPetPhotoBox04 = document.querySelector('.id_pet_photo .box_04');
const $idPetPhotoBox05 = document.querySelector('.id_pet_photo .box_05');
const $idPetPhotoBox06 = document.querySelector('.id_pet_photo .box_06');
const $idPetPhotoBox07 = document.querySelector('.id_pet_photo .box_07');
const $idPetPhotoBox08 = document.querySelector('.id_pet_photo .box_08');
const $idPetPhotoBox09 = document.querySelector('.id_pet_photo .box_09');
const $idPetPhotoBox10 = document.querySelector('.id_pet_photo .box_10');
const $idPetPhotoBox11 = document.querySelector('.id_pet_photo .box_11');
const $idPetPhotoBox12 = document.querySelector('.id_pet_photo .box_12');
const $idPetPhotoBox13 = document.querySelector('.id_pet_photo .box_13');
const $idPetPhotoBox14 = document.querySelector('.id_pet_photo .box_14');
const $idPetPhotoBox15 = document.querySelector('.id_pet_photo .box_15');
const $idPetPhotoBox16 = document.querySelector('.id_pet_photo .box_16');
const $idPetPhotoBox17 = document.querySelector('.id_pet_photo .box_17');
const $idPetPhotoBox18 = document.querySelector('.id_pet_photo .box_18');
const $idPetPhotoBox19 = document.querySelector('.id_pet_photo .box_19');
const $idPetPhotoBox20 = document.querySelector('.id_pet_photo .box_20');
const $idPetPhotoBox21 = document.querySelector('.id_pet_photo .box_21');
const $idPetPhotoBox22 = document.querySelector('.id_pet_photo .box_22');
const $idPetPhotoBox23 = document.querySelector('.id_pet_photo .box_23');
const $idPetPhotoBox24 = document.querySelector('.id_pet_photo .box_24');



const $idPetFull01 = document.querySelector('.id_pet_box_01_full');
const $idPetFull02 = document.querySelector('.id_pet_box_02_full');
const $idPetFull03 = document.querySelector('.id_pet_box_03_full');
const $idPetFull04 = document.querySelector('.id_pet_box_04_full');
const $idPetFull05 = document.querySelector('.id_pet_box_05_full');
const $idPetFull06 = document.querySelector('.id_pet_box_06_full');
const $idPetFull07 = document.querySelector('.id_pet_box_07_full');
const $idPetFull08 = document.querySelector('.id_pet_box_08_full');
const $idPetFull09 = document.querySelector('.id_pet_box_09_full');
const $idPetFull10 = document.querySelector('.id_pet_box_10_full');
const $idPetFull11 = document.querySelector('.id_pet_box_11_full');
const $idPetFull12 = document.querySelector('.id_pet_box_12_full');
const $idPetFull13 = document.querySelector('.id_pet_box_13_full');
const $idPetFull14 = document.querySelector('.id_pet_box_14_full');
const $idPetFull15 = document.querySelector('.id_pet_box_15_full');
const $idPetFull16 = document.querySelector('.id_pet_box_16_full');
const $idPetFull17 = document.querySelector('.id_pet_box_17_full');
const $idPetFull18 = document.querySelector('.id_pet_box_18_full');
const $idPetFull19 = document.querySelector('.id_pet_box_19_full');
const $idPetFull20 = document.querySelector('.id_pet_box_20_full');
const $idPetFull21 = document.querySelector('.id_pet_box_21_full');
const $idPetFull22 = document.querySelector('.id_pet_box_22_full');
const $idPetFull23 = document.querySelector('.id_pet_box_23_full');
const $idPetFull24 = document.querySelector('.id_pet_box_24_full');


$idPet.addEventListener('click', () => {
    $idPetPhoto.classList.add('active');
});


document.querySelector('.id_pet_photo .logo').addEventListener('click', () => {
    $idPetPhoto.classList.remove('active');
});


$idPetPhotoBox01.addEventListener('click', () => {
    $idPetFull01.classList.toggle('active');
});

$idPetPhotoBox02.addEventListener('click', () => {
    $idPetFull02.classList.toggle('active');
});

$idPetPhotoBox03.addEventListener('click', () => {
    $idPetFull03.classList.toggle('active');
});

$idPetPhotoBox04.addEventListener('click', () => {
    $idPetFull04.classList.toggle('active');
});

$idPetPhotoBox05.addEventListener('click', () => {
    $idPetFull05.classList.toggle('active');
});

$idPetPhotoBox06.addEventListener('click', () => {
    $idPetFull06.classList.toggle('active');
});

$idPetPhotoBox07.addEventListener('click', () => {
    $idPetFull07.classList.toggle('active');
});

$idPetPhotoBox08.addEventListener('click', () => {
    $idPetFull08.classList.toggle('active');
});

$idPetPhotoBox09.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull09.classList.toggle('active');
});

$idPetPhotoBox10.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull10.classList.toggle('active');
});

$idPetPhotoBox11.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull11.classList.toggle('active');
});

$idPetPhotoBox12.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull12.classList.toggle('active');
});

$idPetPhotoBox13.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull13.classList.toggle('active');
});

$idPetPhotoBox14.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull14.classList.toggle('active');
});
$idPetPhotoBox15.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull15.classList.toggle('active');
});
$idPetPhotoBox16.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull16.classList.toggle('active');
});
$idPetPhotoBox17.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull17.classList.toggle('active');
});
$idPetPhotoBox18.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull18.classList.toggle('active');
});
$idPetPhotoBox19.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull19.classList.toggle('active');
});
$idPetPhotoBox20.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull20.classList.toggle('active');
});
$idPetPhotoBox21.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull21.classList.toggle('active');
});
$idPetPhotoBox22.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull22.classList.toggle('active');
});
$idPetPhotoBox23.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull23.classList.toggle('active');
});
$idPetPhotoBox24.addEventListener('click', () => {
    window.scrollTo({top:0, left:0});
    $idPetFull24.classList.toggle('active');
});



document.querySelector('.id_pet_box_01_full').onclick = () =>{
    $idPetFull01.classList.remove('active');
};
document.querySelector('.id_pet_box_02_full').onclick = () =>{
    $idPetFull02.classList.remove('active');
};
document.querySelector('.id_pet_box_03_full').onclick = () =>{
    $idPetFull03.classList.remove('active');
};
document.querySelector('.id_pet_box_04_full').onclick = () =>{
    $idPetFull04.classList.remove('active');
};
document.querySelector('.id_pet_box_05_full').onclick = () =>{
    $idPetFull05.classList.remove('active');
};
document.querySelector('.id_pet_box_06_full').onclick = () =>{
    $idPetFull06.classList.remove('active');
};
document.querySelector('.id_pet_box_07_full').onclick = () =>{
    $idPetFull07.classList.remove('active');
};
document.querySelector('.id_pet_box_08_full').onclick = () =>{
    $idPetFull08.classList.remove('active');
};
document.querySelector('.id_pet_box_09_full').onclick = () =>{
    $idPetFull09.classList.remove('active');
};
document.querySelector('.id_pet_box_10_full').onclick = () =>{
    $idPetFull10.classList.remove('active');
};
document.querySelector('.id_pet_box_11_full').onclick = () =>{
    $idPetFull11.classList.remove('active');
};
document.querySelector('.id_pet_box_12_full').onclick = () =>{
    $idPetFull12.classList.remove('active');
};
document.querySelector('.id_pet_box_13_full').onclick = () =>{
    $idPetFull13.classList.remove('active');
};
document.querySelector('.id_pet_box_14_full').onclick = () =>{
    $idPetFull14.classList.remove('active');
};
document.querySelector('.id_pet_box_15_full').onclick = () =>{
    $idPetFull15.classList.remove('active');
};
document.querySelector('.id_pet_box_16_full').onclick = () =>{
    $idPetFull16.classList.remove('active');
};
document.querySelector('.id_pet_box_17_full').onclick = () =>{
    $idPetFull17.classList.remove('active');
};
document.querySelector('.id_pet_box_18_full').onclick = () =>{
    $idPetFull18.classList.remove('active');
};
document.querySelector('.id_pet_box_19_full').onclick = () =>{
    $idPetFull19.classList.remove('active');
};
document.querySelector('.id_pet_box_20_full').onclick = () =>{
    $idPetFull20.classList.remove('active');
};
document.querySelector('.id_pet_box_21_full').onclick = () =>{
    $idPetFull21.classList.remove('active');
};
document.querySelector('.id_pet_box_22_full').onclick = () =>{
    $idPetFull22.classList.remove('active');
};
document.querySelector('.id_pet_box_23_full').onclick = () =>{
    $idPetFull23.classList.remove('active');
};
document.querySelector('.id_pet_box_24_full').onclick = () =>{
    $idPetFull24.classList.remove('active');
};





// ------ food ------


const $food = document.querySelector('#food');
const $foodPhotoWrap = document.querySelector('.food_photo')
const $foodPhotoLogo = document.querySelector('.food_photo .logo')


$food.addEventListener('click', () => {
    $foodPhotoWrap.classList.toggle('active')
});
$foodPhotoLogo.addEventListener('click', () => {
    $foodPhotoWrap.classList.remove('active');
});


const $foodPhotoBox01 = document.querySelector('.food_photo .box_01');
const $foodPhotoBox02 = document.querySelector('.food_photo .box_02');
const $foodPhotoBox03 = document.querySelector('.food_photo .box_03');
const $foodPhotoBox04 = document.querySelector('.food_photo .box_04');
const $foodPhotoBox05 = document.querySelector('.food_photo .box_05');
const $foodPhotoBox06 = document.querySelector('.food_photo .box_06');
const $foodPhotoBox07 = document.querySelector('.food_photo .box_07');
const $foodPhotoBox08 = document.querySelector('.food_photo .box_08');

const $foodFull01 = document.querySelector('.food_box_01_full');
const $foodFull02 = document.querySelector('.food_box_02_full');
const $foodFull03 = document.querySelector('.food_box_03_full');
const $foodFull04 = document.querySelector('.food_box_04_full');
const $foodFull05 = document.querySelector('.food_box_05_full');
const $foodFull06 = document.querySelector('.food_box_06_full');
const $foodFull07 = document.querySelector('.food_box_07_full');
const $foodFull08 = document.querySelector('.food_box_08_full');



$foodPhotoBox01.addEventListener('click', () => {
    $foodFull01.classList.toggle('active');
});

$foodPhotoBox02.addEventListener('click', () => {
    $foodFull02.classList.toggle('active');
});

$foodPhotoBox03.addEventListener('click', () => {
    $foodFull03.classList.toggle('active');
});

$foodPhotoBox04.addEventListener('click', () => {
    $foodFull04.classList.toggle('active');
});

$foodPhotoBox05.addEventListener('click', () => {
    $foodFull05.classList.toggle('active');
});

$foodPhotoBox06.addEventListener('click', () => {
    $foodFull06.classList.toggle('active');
});

$foodPhotoBox07.addEventListener('click', () => {
    $foodFull07.classList.toggle('active');
});

$foodPhotoBox08.addEventListener('click', () => {
    $foodFull08.classList.toggle('active');
});



document.querySelector('.food_box_01_full').onclick = () =>{
    $foodFull01.classList.remove('active');
};
document.querySelector('.food_box_02_full').onclick = () =>{
    $foodFull02.classList.remove('active');
};
document.querySelector('.food_box_03_full').onclick = () =>{
    $foodFull03.classList.remove('active');
};
document.querySelector('.food_box_04_full').onclick = () =>{
    $foodFull04.classList.remove('active');
};
document.querySelector('.food_box_05_full').onclick = () =>{
    $foodFull05.classList.remove('active');
};
document.querySelector('.food_box_06_full').onclick = () =>{
    $foodFull06.classList.remove('active');
};
document.querySelector('.food_box_07_full').onclick = () =>{
    $foodFull07.classList.remove('active');
};
document.querySelector('.food_box_08_full').onclick = () =>{
    $foodFull08.classList.remove('active');
};





// ----- snap

const $snap = document.querySelector('#snap');
const $snapPhoto = document.querySelector('.snap_photo');


$snap.addEventListener('click', () => {
    $snapPhoto.classList.add('active');
});

// document.querySelectorAll('.snap_photo_row img').forEach(image => {
//     image.onclick = () => {
//         document.querySelector('.snap_full').style.display = 'block';
//         document.querySelector('.snap_full img').src = image.getAttribute('src');
//     }
// })
// document.querySelector('.snap_full span').onclick = () => {
//     document.querySelector('.snap_full').style.display = 'none';
// }


const $snapPhotoBox = document.querySelector('.snap_photo .box');
const $snap_full = document.querySelector('.snap_full');




document.querySelector('.snap_photo .logo').addEventListener('click', () => {
    $snapPhoto.classList.remove('active');
});


const $snapPhotoBox01 = document.querySelector('.snap_photo .box_01');
const $snapPhotoBox02 = document.querySelector('.snap_photo .box_02');

const $snapFull01 = document.querySelector('.snap_box_01_full');
const $snapFull02 = document.querySelector('.snap_box_02_full');


$snapPhotoBox01.addEventListener('click', () => {
    $snapFull01.classList.toggle('active');
});

$snapPhotoBox02.addEventListener('click', () => {
    $snapFull02.classList.toggle('active');
});




document.querySelector('.snap_box_01_full').onclick = () =>{
    $snapFull01.classList.remove('active');
};
document.querySelector('.snap_box_02_full').onclick = () =>{
    $snapFull02.classList.remove('active');
};






// ------ contact -------

const $contact = document.querySelector('#contact');
const $contactContainer = document.querySelector('.contact_container');

$contact.addEventListener('click', () => {
    $contactContainer.classList.add('active');
});

document.querySelector('.contact_container .logo').addEventListener('click', () => {
    $contactContainer.classList.remove('active');
});











