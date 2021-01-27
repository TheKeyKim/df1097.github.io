


var part_arr = ["#body", "#about-part", "#language-part", "#stack-part", "#to-be-part"];

var part_dic = {"#body" : 0, "#about-part" : 1, "#language-part" : 2, "#stack-part" : 3, "#to-be-part" : 4};
let index = 0;


var time = new Date;
console.log(time.getTime());
console.log(part_dic);
let pre = 0;
let tick = 0;

window.onload = function () {
    var elm = "#body, #nav";
    $(elm).each(function (index) {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            let now = new Date;

            if(now.getTime() - tick < 50 && now.getTime() - pre < 1500){
                tick = now.getTime();
                return ;
            }
            let delta = window.event.deltaY;

            if(now.getTime() - pre > 900){
                let temp = window.location.href;
                let part = "";
                for(let i =temp.length-1; i >= 0; i--){
                    part = temp[i] + part;
                    if(temp[i] == "#") break;
                }
                index = part_dic[part];
                if(!index) index = 0;
                let t = index;
                if(delta > 0) {
                    index += 1;
                    index = Math.min(index, part_arr.length-1);
                }
                else{
                    index -=1;
                    index = Math.max(0, index);
                }
                window.location.href = part_arr[index];
                if(t!= index){
                    pre = now.getTime();
                    tick = pre;
                } 
            }
        });
    });
}

document.addEventListener("keydown", function(e){
    
    if(e.code == "ArrowDown"){

        e.preventDefault();
        let temp = window.location.href;
        let part = "";
        for(let i =temp.length-1; i >= 0; i--){
            part = temp[i] + part;
            if(temp[i] == "#") break;
        }
        index = part_dic[part];
        if(!index) index = 0;
        let t = index;
        index += 1;
        index = Math.min(index, part_arr.length-1);

        window.location.href = part_arr[index];
    }
    else if(e.code == "ArrowUp"){

        e.preventDefault();
        let temp = window.location.href;
        let part = "";
        for(let i =temp.length-1; i >= 0; i--){
            part = temp[i] + part;
            if(temp[i] == "#") break;
        }
        index = part_dic[part];
        if(!index) index = 0;
        let t = index;
        index -=1;
        index = Math.max(0, index);

        window.location.href = part_arr[index];
    }
})



    