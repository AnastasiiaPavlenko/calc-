function AjaxSample (sSelector){
    var f = this;
    f.init(sSelector);

    f.a       = f.findObj(".b-calc__a");
    f.b       = f.findObj(".b-calc__b");
    f.result  = f.findObj(".b-calc__result");

    f.calcSum = function(){
        event.preventDefault(); 
        console.log("I'm working");
        $.ajax({
           "url" : "calc.php" //текущая страница URL к запросу
           ,"method" : "POST"//метод передачи данных
           ,"dataType" : "json" //тип данных, возвращеемых в callback функцию
           ,"timeout" : 1000 //время таймаут в миллисикундах
           , "data" : {
               "a" : f.a.val()
               ,"b" : f.b.val()
           }
           ,"success" : function(jsonServerResponse){//если ошибок не возникло
         //   console.log("success!");
             f.result.html(jsonServerResponse.result);
             }
             ,"error" : function(oAjax){
            console.log(oAjax);
            if (oAjax.statusText == "timeout"){
                console.log("timeout");
            }
            else if (oAjax.status == 401 | 403 | 404 | 500 | 503){
                console.log("error");
            }
            }
            ,"complete" : function(oAjax){//по окончании запроса
                 console.log("объект из complete:", oAjax);
                 var jsonServerResponse = oAjax.responseJSON;
                 if(oAjax.status == 200){// 200 - статус OK, запрос выполнился успешно
                     if(jsonServerResponse!= undefined){
                         f.result.html(jsonServerResponse.result);
                     }
                     else{
                         alert("response that cannot be parsed at JSON:\n" + oAjax.responseText);
                     }
                 }
                 else if(oAjax.status == 404){
                     alert("AJAX backend is not found.");
                 }
                 else if(oAjax.statusText === "timeout"){
                     alert("AJAX request has timed out.");
                 }
                 else{
                     alert("Totally unpredicted error.");
                 }
            }
           })
        
    };


    f.elem.submit(f.calcSum);
}

AjaxSample.prototype = new Component(); 