const article1 = document.createElement('article');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const h5_1 = document.createElement('h5');
const h5_2 = document.createElement('h5');
const h5_3 = document.createElement('h5');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
document.body.append(article1);

article1.className = 'flexContainer';
const c1= document.getElementsByClassName('flexContainer');

article1.style.display ='flex';
article1.style.justifyContent ='spaceArround'
article1.style.marginLeft = '25%';

div1.className = 'flexItemLvl_1';
div1.append(img1);
img1.src='./index.jpeg'
img1.style.marginLeft='25%'
img2.style.marginLeft='25%'
img3.style.marginLeft='25%'
div1.append(h5_1);
h5_1.textContent ='First Title h5';
h5_1.style.textAlign ='center';
div1.append(p1);
div1.append(button1);
button1.textContent = 'Click1';

div2.className = 'flexItemLvl_1';
p1.innerText ='orem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пе'
div2.append(img2);
img2.src='./index.jpeg'
div2.append(h5_2);
h5_2.textContent ='First Title h5';
h5_2.style.textAlign ='center';
div2.append(p2);
div2.append(button2);
button2.textContent = 'Click2';
p2.innerText ='orem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пе'
div3.className = 'flexItemLvl_1';
div3.append(img3);
img3.src='./index.jpeg'
div3.append(h5_3);
h5_3.textContent ='First Title h5';
h5_3.style.textAlign ='center';
div3.append(p3);
div3.append(button3);
button3.textContent = 'Click1';
p3.innerText='orem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пе'


const styleFlexItem1 = document.getElementsByClassName('flexItemLvl_1');







article1.append(div1);
article1.append(div2);
article1.append(div3);



