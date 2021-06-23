let arr=[
	'CORONA VIRUS',
	'good boy',
	'CUTE BOY',
	'HANDSOME',
	'BODMAIS',
	'Gentleman',
	'poor',
	'LOVELY BOY',
	'like a hero',
	'need a heroin',
	'need to marrage immidiately',
	'cearing boy',
	'decent boy',
	'T2 VIRUS',
	'PLAY BOY',
	'BOD',
	'Multi plug',
	'vabuk',
	'gully boy',
	'dancer',
	'like a girl',
	'clever',
	'wise',
	'monster'
];
let arr1=[
	'Please give a Name',
	'unexpected charecter used',
	'empty,Provide a name'
];

let i="Enter your name",j;
let chan=()=>{
	j=document.getElementById("inp").value;
	console.log(j)
}
let faishal=()=>{
	 if (j===undefined) i=arr1[2]
	else if((/^[a-z]{1,}$/ig).test(j)) i=arr[Math.floor(Math.random() * 22)]

	else if(/\d/.test(j)) i=arr1[0]
	else if(/[^a-z0-9 ]/ig.test(j)) i=arr1[1]
	else if(/\s/ig.test(j)) i=arr1[2]
	
	document.getElementById("res").value=i;
	document.getElementById('inp').value='';
	j=undefined;
	
}



























