	//Clear all
    function clearAll(id, messId, mess) {
        let aa = document.getElementById(id).reset();
        document.getElementById(messId).innerHTML = mess;

    }
    //Age based output
    function inputAge(e) {
        let age = document.getElementById('age').value;

        if (age > 0 && age < 18) {
            document.getElementById('output-one').innerHTML =
                `<span style="color: green;">তোমার বয়স ${age} বছর। তুমি শিশু।</span>`;
        } else if (age >= 18 && age <= 50) {
            document.getElementById('output-one').innerHTML =
                `<span style="color: green;">আপনার বয়স ${age} বছর। আপনি যুবক।</span>`;
        } else if (age > 50 && age <= 100) {
            document.getElementById('output-one').innerHTML =
                `<span style="color: green;">আপনার বয়স ${age} বছর। আপনি বৃদ্ধ।</span>`;
        } else {
            document.getElementById('output-one').innerHTML = `<span style="color: red;">দয়া করে ‍সঠিক তথ্য দিন।</span>`;
        }
    }

    //ketrofol
    function khetroFol() {
        let dorgho = document.getElementById('dorgho').value;
        let postho = document.getElementById('postho').value;


        if (dorgho == '' && postho == '') {
            document.getElementById('output-two').innerHTML =
                "<span style='color:red'> দয়া করে দৈর্ঘ্য ‍এবং প্রস্থ বসান।</span>";
        } else if (dorgho == '') {
            document.getElementById('output-two').innerHTML = "<span style='color:red'> দয়া করে দৈর্ঘ্য বসান।</span>";
        } else if (postho == '') {
            document.getElementById('output-two').innerHTML = "<span style='color:red'> দয়া করে প্রস্থ বসান।</span>";
        } else {
            document.getElementById('output-two').innerHTML = "<span style='color:green'> ক্ষেত্রফল " + dorgho * postho +
                " !!</span>";
        }
    }

    //Result
    function result() {
        let mark = document.getElementById('mark').value;
        if (mark == '') {
            document.getElementById('output-three').innerHTML = `<span style="color:red">আপনার মার্ক বসান! </span>`;
        } else if (mark >= 0 && mark < 33) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:red">আপনি ফেল। আপনার মার্ক ${mark} !!</span>`;
        } else if (mark < 40) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:green">আপনি D গেড পেয়েছেন । আপনার মার্ক ${mark} !!</span>`;
        } else if (mark < 50) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:green">আপনি C গেড পেয়েছেন । আপনার মার্ক ${mark} !!</span>`;
        } else if (mark < 60) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:green">আপনি B গেড পেয়েছেন । আপনার মার্ক ${mark} !!</span>`;
        } else if (mark < 70) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:green">আপনি A- গেড পেয়েছেন । আপনার মার্ক ${mark} !!</span>`;
        } else if (mark < 80) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:green">আপনি A গেড পেয়েছেন । আপনার মার্ক ${mark} !!</span>`;
        } else if (mark <= 100) {
            document.getElementById('output-three').innerHTML =
                `<span style="color:green">আপনি A+ গেড পেয়েছেন । আপনার মার্ক ${mark} !!</span>`;
        } else {
            document.getElementById('output-three').innerHTML =
                `<span style="color:tomato">দয়া করে ‍সঠিক তথ্য দিন।</span>`;
        }
    }

    //Birthday calculate
    function ageCalculate() {
        let ageCal = document.getElementById('ageCal').value;
        if(ageCal==false){
            document.getElementById('output-four').innerHTML= `<span style="color:red">Please input your date of birth!</span>`;
        }else{
        let birth = new Date(ageCal);
        let check = new Date();
        let milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;

        let ageInDays = (check - birth) / milliDay;

        let ageInYears = Math.floor(ageInDays / 365);
        let mm = ageInDays % 365;
        let months = Math.floor(mm / 30);
        let days = Math.floor(months / 24);
        // console.log(`${ageInYears} Years ${months} months ${days} days`);
        document.getElementById('output-four').innerHTML= `<span style="color:green;">${ageInYears} Years ${months} months ${days} days !!</span>`;
        }
        
    }

    //BMI function
    function bmi(){
        let weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;

        let meters = height/3.2808;
        let bmi = Math.ceil(weight/meters/meters);

        if(weight == '' && height == ''){
            document.getElementById('output-five').innerHTML = `<span style="color:red;">আপনার উচ্চতা এবং ওজন বসান!!</span>`;
        }else if(weight == ''){
            document.getElementById('output-five').innerHTML = `<span style="color:red;">আপনার ওজন বসান!!</span>`;
        }else if(height == ''){
            document.getElementById('output-five').innerHTML = `<span style="color:red;">আপনার উচ্চতা বসান!!</span>`;
        } else{
            if(bmi <= 18){
                document.getElementById('output-five').innerHTML = `<span style="color:green;">আপনার বডি ম্যাপ ইনডেক্স ${bmi} !! আপনার ওজন কম। </span>`;
            }else if(bmi > 18 && bmi < 25 ){
                document.getElementById('output-five').innerHTML = `<span style="color:green;">আপনার বডি ম্যাপ ইনডেক্স ${bmi}!! আপনার ওজন ঠিক আছে!!</span>`;
            }else if(bmi < 30 && bmi >= 25){
                document.getElementById('output-five').innerHTML = `<span style="color:green;">আপনার বডি ম্যাপ ইনডেক্স ${bmi}!! আপনার অতিরিক্ত ওজন!!</span>`;
            }else if(bmi > 30){
                document.getElementById('output-five').innerHTML = `<span style="color:green;">আপনার বডি ম্যাপ ইনডেক্স ${bmi}!! আপনি খুব মোটা!!</span>`;
            }else{
                document.getElementById('output-five').innerHTML = `<span style="color:red;">আপনার বডি ম্যাপ ইনডেক্স ${bmi}!!  দয়া করে ‍সঠিক তথ্য দিন।</span>`;
            }
           
        }
    }

    //text color change 
    function color(){
        let text = document.getElementById('text').value;

        let rong = document.getElementById('rong').value;
        
        if(text == ''){
            document.getElementById('output-six').innerHTML = `Text color change function!!`;
        }else{
            document.getElementById('output-six').innerHTML = text;
        }

        // console.log(rong);
        document.getElementById('output-six').style.color = rong;
      
    }

    //Currency function
    function currency(){
        let taka = document.getElementById('taka').value;
        let dollar = document.getElementById('dollar').value;
        document.getElementById('output-seven').innerHTML = `Bangladeshi ${taka} = ${taka * dollar} `;
    }
