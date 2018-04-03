
function checkSelect(){   
   var value = document.getElementById("mySelect").value;

    if(value==="vietcombank"){
         checkElement();
        
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 044 100 377 8455";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
      
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Cộng Hoà, Tân Bình, HCM";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
        
      
    }
    else if(value==="acb"){
       checkElement();
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 174 313 789";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
        
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Sài Gòn";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
       
    }
    else if(value==="vietin"){
       checkElement();
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 711 A05 365 361";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
        
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Phan Đình Phùng - Phú Nhuận";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
       
    }
    else if(value==="sacom"){
       checkElement();
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 060 100 529 109";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
        
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Thị Nghè - Tp. Hồ Chí Minh";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
       
    }
    else if(value==="bidv"){
       checkElement();
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 186 100 000 797 49";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
        
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Hàm Nghi";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
       
    }
      else if(value==="agri"){
       checkElement();
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 1604 2053 91816";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
        
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Phú Nhuận - Sài Gòn";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
       
    }
      else if(value==="tech"){
       checkElement();
        //tao span
        var span = document.createElement("span");
        var classname = document.createAttribute("class");
        classname.value="number-account";
        span.setAttributeNode(classname);
        span.textContent=" 1902 8617 0050 10";
        
        var list = document.querySelector("li.number-account");
        list.appendChild(span);
        
         //tao location
        var spanlocation = document.createElement("span");
        var classnamelocation = document.createAttribute("class");
        classnamelocation.value="location";
        spanlocation.setAttributeNode(classnamelocation);
        spanlocation.textContent=" Nguyễn Kiệm - Phú Nhuận";
        
        var listlocation = document.querySelector("li.detail-location");
        listlocation.appendChild(spanlocation);
       
    }
}

function checkElement(){
    var checkspan = document.querySelector("span.number-account");
     var checkspanlocation = document.querySelector("span.location");
    if(checkspan!=null){
        var listspan = document.querySelector("li.number-account");
        listspan.removeChild(checkspan);
        
        var lilocation = document.querySelector("li.detail-location");
        lilocation.removeChild(checkspanlocation);
    }
}

