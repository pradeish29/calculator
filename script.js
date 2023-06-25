let ou = document.querySelector('input');
function display(num){
    ou.value += num;  
}
function calc(){
    try{
        ou.value = eval(ou.value);
    }
    catch(err){
        ou.value = 'invalid';
    }
}
function clear(){
    
}
function del(){
    ou.value= ou.value.slice(0,-1);
}