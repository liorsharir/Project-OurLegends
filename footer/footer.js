// Add footer element
  $(document).ready(function(){
  $(function() {
      // Load the footer content into the designated container
      $("#footerContainer").load("../footer/footer.html");
  });
});

  var box= document.getElementById("pop-div");
  var nav = document.querySelector(".footer-menu");
  activeBox = box;

  document.addEventListener("click", function(event) {
      var isNavClicked = nav.contains(event.target);
      if (!isNavClicked && box.contains(activeBox)) {
        // Clicked outside the navigation and the active box, remove it
        box.innerHTML='';
      }
  });
  
  function footerBox(type){
    box.innerHTML='';
    if(type == 'contact'){
      content= "<p>המייל שלנו: ourLegends@gmail.com </p>";
      box.innerHTML=content;
      } 
    else if(type == 'about'){
      value="<p>אתם עומדים בפיתחו של אתר הנצחה מיוחד. אתר שהוקם לכבודם של יקרינו, שכל אחד מהם הוא כמו אגדה, שלעולם לא מתה...<br>"
      +"אנחנו, צוות האתר מבטיחים לתת את מלוא תשובת הלב לבקושתכם בכדי שנוכל לספק לכל אחד ואחת מכם את השירות הטוב ביותר. </p>";
      box.innerHTML=value;
    }
    else if(type == 'privacy'){
      value="<p>&#x2022 כבוד הפרטיות ושמירה על מידע הלקוחות הם עקרונות המדיניות שלנו <br> "
      + "&#x2022 אנו אוספים, מעבדים ושומרים מידע אישי בהתאם לדרישות החוק והתקנות הרלוונטיות. <br> "
      + "&#x2022 אנו לא מספקים מידע אישי לצדדים שלישיים ללא הסכמת הלקוחות, למעט חובות משפטיות או בקשות קשורות לשירותים שלנו.<br>"
      + "&#x2022 אנו מגנים על המידע האישי של לקוחותינו באמצעות אבטחה ופתרונות מתאימים.<br> "
      + "&#x2022 אנו עוקבים אחרי רגולציות הפרטיות ומתעדכנים כדי להבטיח תאימות למדיניות הרלוונטית.<br>"
      + "&#x2022 אנו מאפשרים ללקוחות לשלוט ולעדכן את המידע האישי שלהם. </p>"
      box.innerHTML=value;
      }
    else if(type=='accessibility'){
      value="<p>אנו מתחייבים לספק שירותים ותוכן ברמת נגישות מיטבית לכלל המשתמשים. <br>"
      +"אנו מבצעים כל הצעדים הנדרשים כדי להבטיח שהאתר/המוצר שלנו יהיו נגישים לאנשים עם מגבלות פיזיות, תפקודיות או חשיבה. <br>"
      +"אנו עוקבים אחרי התקנים והמדיניות הרלוונטיים לנגישות ומשפרים את חוויית המשתמש כדי להבטיח שכולם יכולים ליהנות משירותינו. <br>"
      +"אנו מזמינים את קהל המשתמשים להציע משוב והערות לנושאי נגישות כדי שנוכל להמשיך לשפר את עבודתנו. </p>"
      box.innerHTML=value;
    }
  }