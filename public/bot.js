var audio = new Audio('public/bot/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href=''> <div class='socialItem' id='call'><img class='socialItemI' src='bot/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:fitness@gmail.com'> <div class='socialItem'><img class='socialItemI' src='bot/gmail.svg' alt=''></div> </a> <a target='_blank' href='#'> <div class='socialItem'><img class='socialItemI' src='bot/github.svg' alt=''></div> </a> <a target='_blank' href='#'> <div class='socialItem'><img class='socialItemI' src='bot/whatsapp.svg' alt=''>";
var deitString = "<img src='bot/diet.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='bot/pdf.png'><label>MonthlyMealPlanFitness</label></div><a href='bot/MonthlyMealPlanFitness.pdf' download='bot/MonthlyMealPlanFitness.pdf'><img class='download' src='bot/downloadIcon.svg'></a></div>";
var safetyString = "<img src='bot/safety.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='bot/pdf.png'><label>ExerciseSafetyfitness</label></div><a href='bot/ExerciseSafetyfitness.pdf' download='bot/ExerciseSafetyfitness.pdf'><img class='download' src='bot/downloadIcon.svg'></a></div>";
var trainersString = "<div class='social'> <a target='_blank' href='mailto:nageshedlafitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 001</h6> <h4>Nagesh Edla</h4><h5>Strength and Conditioning</h5><br></label></label></div> </a> <a target='_blank' href='mailto:nithishkumarbollapellifitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 002</h6><h4>Nithish Kumar Bollapelli</h4><h5>High-intensity functional training (HIFT)</h5><br></label></label></div> </a> <a target='_blank' href='mailto:srividhinreddypeddyreddyfitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 003</h6><h4>Srividhin Reddy Peddyreddy</h4><h5>Yoga and Mindfulness</h5><br></label></label></div> </a> <a target='_blank' href='mailto:nikithreddychittireddyfitness@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='bot/gmail.svg'/><label class='number'><h6>Trainer ID: 004</h6><h4>Nikith Reddy Chittireddy</h4> <h5>Yoga and Mindfulness</h5><br></label></label></div> </a> ";
var nutritionString = "<img src='bot/Nutrition.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='bot/pdf.png'><label>Training&NutritionFitness</label></div><a href='bot/Training&NutritionFitness.pdf' download='bot/Training&NutritionFitness.pdf'><img class='download' src='bot/downloadIcon.svg'></a></div>";


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("<span>Hello there 👋🏻,<br><br>We're here to help you on your fitness journey.</span><br><br>If you have any questions<span>🙋❓</span> or need assistance with your workouts, nutrition plans, or anything else, we're just a message away.<br><br>Send <span class='bold'>'help'</span> to get started and we'll guide you through whatever you need.<br>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br><br>Example:<br><span class='bold'>1.'training or nutrition':</span><br> -> to know about Training and Nutrition<span>🧘🥗🍎🌱🔆</span><br><br><span class='bold'>2.'Diet or deit':</span><br>-> to get Deit or Meal Planning<span>🥗🥦🍽🥑🍎😋</span><br><br><span class='bold'>3.'precautions':</span><br>-> to get safety details while doing exercises<span>⚠️</span><br><br><span class='bold'>4.'contact':</span><br>-> to get ways to connect with admin<span>📩💬👤📞</span><br><br><span class='bold'>5.'trainers':</span><br>-> to get details of trainers<span>📩💬👤📞</span><br><br><span class='bold'>6.'clear':</span><br>-> to clear conversation<span>🧹🗑️</span><br>");
            break;


        case "Diet":
        case "diet":
            sendTextMessage(deitString);
            break;
        
        case "precautions":
        case "Precautions":
            sendTextMessage(safetyString);
            break;
        
        case "trainers":
        case "Trainers":
            sendTextMessage(trainersString);
             break;
        
        case "nutrition":
        case "Nutrition":
        case "Training":
        case "training":
            sendTextMessage(nutritionString);
            break;


        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        // case "projects":
        //     sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
        //     break;

        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;
        
        case "hey":
        case "hi":
        case " ":
        case "hello":
        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br><br>Example:<br><span class='bold'>1.'training or nutrition':</span><br> -> to know about Training and Nutrition<span>🧘🥗🍎🌱🔆</span><br><br><span class='bold'>2.'Diet or deit':</span><br>-> to get Deit or Meal Planning<span>🥗🥦🍽🥑🍎😋</span><br><br><span class='bold'>3.'precautions':</span><br>-> to get safety details while doing exercises<span>⚠️</span><br><br><span class='bold'>4.'contact':</span><br>-> to get ways to connect with admin<span>📩💬👤📞</span><br><br><span class='bold'>5.'trainers':</span><br>-> to get details of trainers<span>📩💬👤📞</span><br><br><span class='bold'>6.'clear':</span><br>-> to clear conversation<span>🧹🗑️</span><br>");
            break;
        
        case "Fitness":
        case "Fitness Bot":
        case "Fitness Application":
            sendTextMessage("Yes, that's me");
            break;
        
        
        case "github":
            sendTextMessage("we will add this soon!! sorry for your inconvenience.<br>Send 'help' to know more about usage.");
            break;
        case "linkedin":
            sendTextMessage("we will add this soon!! sorry for your inconvenience.<br>Send 'help' to know more about usage.");
            break;

        case "friends":
        case "friend":
            sendTextMessage("I am always ready to make new friends");
            break;

        case "thank":
        case "thankyou":
            sendTextMessage("You're welcome!! If you need any more assistance. I'm here to help!");
            break;

        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");},2000);
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
