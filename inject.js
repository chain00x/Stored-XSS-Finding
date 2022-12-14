function list_h1(){
    for(i=0;i<document.getElementsByTagName("h1").length;i++)
    {
        if(document.getElementsByTagName("h1")[i].textContent.indexOf("sb")!=-1)
        {
            return true
        }
    }
}

    Object.prototype.exist = function(){ if(typeof this !="undefined" && this.length >= 1){return true;}return false;};
    //检测dom变化
    if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1()){

      alert("xss")}

    document.documentElement.addEventListener("DOMSubtreeModified", function(){

    if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1()){

      alert("xss")}
      
      }, false);
