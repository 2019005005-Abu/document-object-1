console.log("Welcome to the Document Object Model");
//There are 3 types of doms .They are
/**
 *1.Core dom
  2.XML DOM
  3.HTML DOM
 */
/**
 * DOM
 * =>Method
 * =>Event
 * w3scool.com
 */

/*
 There are 6 methods in Document Object Model
 document.getElementById
 document.getElementsByClassName
 document.getElementsByTagName
 document.getElementsByName
 document.querySelector
 document.querySelectorAll
 */

 /**
  * Traversing Elements
  * 1.Get the parent Element
  * 2.Get Child Element
  * 3.Get siblings of an Element
  */

//document.getElementById
var getele=document.getElementById('id1');
getele.classList.add("cl_1");
getele.innerHTML="I am a software Enginner";
getele.style.color="red";
console.log(getele)

//document.getElementsByClassName
var c_1=document.getElementsByClassName("className_1")[0];
c_1.innerHTML="This is MY first heading-1";
console.log(c_1);

var c_2=document.getElementsByClassName('className_1')[1];
c_2.innerHTML="This is my second Heading-2"
console.log(c_2);


var c_3=document.getElementsByClassName('className_1')[2];
c_3.innerHTML="This is my third Heading-3";
console.log(c_3);

var c_4=document.getElementsByClassName('className_1')[3];
c_4.innerHTML="This is my  fourth Heading-4";
console.log(c_4);

var c_5=document.getElementsByClassName('className_1')[4];
c_5.innerHTML="This is my fiveth Heading-5";
console.log(c_5);

//document.getElementsByName
var p_6=document.getElementsByName("p_6")[0]
p_6.innerHTML="This is declared by getElementsByName";
console.log(p_6);

//document.getElementsByTagName
var Ele_TagName=document.getElementsByTagName('h2')[0];
Ele_TagName.innerHTML=`I am a full stack web application Developer`;
Ele_TagName.style.color="yellow";
console.log(Ele_TagName);

//document.querySelector
var id_2=document.querySelector('#id2');
console.log(id_2);
//document.querySelectorAll
//button-1
var button_1=document.querySelectorAll('.btn')[0];
button_1.style.color="red";
button_1.style.padding="10px 20px";
button_1.style.background="black";
console.log(button_1);
//button-2
var button_2=document.querySelectorAll('.btn')[1];
button_2.style.color="red";
button_2.style.background="yellow";
button_2.style.padding="10px 20px";
console.log(button_2);
//button-3
var button_3=document.querySelectorAll('.btn')[2];
button_3.style.color="red";
button_3.style.background="blue";
button_3.style.padding="10px 20px";
console.log(button_3);
//button-4
var button_4=document.querySelectorAll('.btn')[3];
button_4.style.color="red";
button_4.style.background="pink";
button_4.style.padding="10px 20px";
console.log(button_4);

//document.getElementById

var elementByID=document.getElementById('id3');
elementByID.innerHTML="I am working as a full stack web application developer";
elementByID.classList.add("cls1");
console.log(elementByID);

const clickMe=function(){
     document.getElementById('p1').innerHTML=Date();
}
/**
  * Traversing Elements
  * 1.Get the parent Element
  * 2.Get Child Element
  * 3.Get siblings of an Element
  */
 
//Javascript Get  the Parent Element ParentNode
var p_n=document.querySelector(".pNote");

console.log(p_n.parentNode);

//Javascript Get the Child element 
/**
 * 1.Get the first Child element
 * 2.Get the last Child element
 * 3.Get all child Element
 */


//1.Get the first Child  Element
var ParentDiv=document.querySelector('.ParentDiv');
//firstchild returns #text
//And we should not use firstChild
console.log(ParentDiv.firstChild);
console.log(ParentDiv.firstElementChild);
//2.Get The last Child element
//lastchild returns #text
//And we should not use lastChild
console.log(ParentDiv.lastChild);
console.log(ParentDiv.lastElementChild);
//3.Get The All Child Element
//Child Node will not return #text Node but we will get [text]

console.log(ParentDiv.childNodes);
//for avoiding text we can use Children
console.log(ParentDiv.children);
