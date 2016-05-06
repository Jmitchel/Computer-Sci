var motherboard = document.getElementById("motherboard");
var CPU = document.getElementById("CPU");
var RAM = document.getElementById("RAM");
var hdrive = document.getElementById("hdrive");
var monitor = document.getElementById("monitor");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

motherboard.addEventListener("click", function(){
    info1.innerHTML = "What is a Motherboard?";
    info2.innerHTML = "Motherboards are a type of PCB(Printed Circuit Board). Motherboards are used to allow communication between a computers other components, like the CPU and memory.";
});

CPU.addEventListener("click", function(){
    info1.innerHTML = "What is a CPU?";
    info2.innerHTML = "The CPU is electronic circuitry that is found inside computers. The CPU is in charge of performing stuff like basic math, logic, control, and input/output.";
});

RAM.addEventListener("click", function(){
    info1.innerHTML = "What is RAM?";
    info2.innerHTML = "RAM is a type of data storage used in computers and laptops. RAM alows items made of data to be accessed.";
});

hdrive.addEventListener("click", function(){
    info1.innerHTML = "What is a Hard Disk Drive?";
    info2.innerHTML = "A hard disk drive is a data storage device that can be used to retrieve and store information taken from rapidly rotating disks called platters.";
});

monitor.addEventListener("click", function(){
    info1.innerHTML = "What are keyboards, mouses, and monitors?";
    info2.innerHTML = "Keyboards are used to type on computers. Keyboards have a number of keys that each correspond to a certain symbol and when that key is pressed the corresponding symbol apears on the computers monitor.";
    info3.innerHTML = "Computer mouses are pointing devices. Computer mouses detect two-dimensional motion on a flat surface, a on-screen pointer then moves in the corresponding direction.";
    info4.innerHTML = "Computer monitors are computer visual displays. Computer monitors are used for data processing and entertainment.";
});