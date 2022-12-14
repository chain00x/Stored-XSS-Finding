let isDoit=true;

find_xss()

function find_xss(){
    test_xss1()
    document.documentElement.addEventListener("DOMSubtreeModified", test_xss, false);
    return !isDoit;
}
        

        function list_h1(){
            for(i=0;i<document.getElementsByTagName("h1").length;i++)
            {
            if(document.getElementsByTagName("h1")[i].textContent.indexOf("sb")!=-1)
            {
              return true
            }
            }
            }


        function test_xss1(){
            if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1())
            {
            alert("xss");
            isDoit=false;
            return isDoit;
            }
            } 


        function test_xss(){
            if(isDoit==false){return}
            if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1())
            {
            alert("xss");
            isDoit=false;
            return isDoit;
            }
            }       
