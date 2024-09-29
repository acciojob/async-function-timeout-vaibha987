//your JS code here. If required.
const text=document.getElementById("text")
const delay=document.getElementById("delay")
const button=document.getElementById("btn")
const output = document.getElementById("output")
button.addEventListener('click',async ()=>{
	const promise = new Promise((resolve, reject) => {
	setTimeout(()=>{
	resolve(text.value)	
	},delay.value)
})
output.innerHTML = await promise;
})