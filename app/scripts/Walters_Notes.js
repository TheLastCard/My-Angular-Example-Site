
//*** WALTERS NOTES Build 1.0

//**FOR NOTE CUSTOMIZING**
//How many degrees note will be rotated when idle
var rotateAmount = 7;
//How much the note will scale down when idle
var idleScale = 0.5;
//How much the note will scale up when clicked on
var openScale = 1.5;
// Note content without links. (so that user doesn accidentally click a link before the note is opened
var noteContentWITHOUTlinks = '\
                    <div class="noteText">\
                    <h2>My Lynda certificates</h2><br>\
                    <ul>\
                    <li>jQuery Essential Training</li>\
                    <li>CSS3 First Look</li>\
                    <li>HTML5: Structure, Syntax, and Semantics</li>\
                    <li>CSS: Gradients</li>\
                    <li>jQuery for Web Designers</li>\
                    <li>Up and Running with AngularJS</li>\
                    <li>CSS with LESS and Sass</li>\
                    </ul>\
                    </div>\
                    ';
//Links aviable when note is opened up
var noteContentWITHlinks = '\
                <div class="noteText">\
                <h2>My Lynda certificates</h2><br>\
                <ul>\
                <li><a href="http://www.lynda.com/ViewCertificate/6069BFE560004858AA78C0FF4834FC4D" target="_blank">jQuery Essential Training</a></li>\
                <li><a href="http://www.lynda.com/ViewCertificate/BBA7E1A7DE7347CE828E72FA856D9D80" target="_blank">CSS3 First Look</a></li>\
                <li><a href="http://www.lynda.com/ViewCertificate/BAD95890473A47D9929457B1368ABB72" target="_blank">HTML5: Structure, Syntax, and Semantics</a></li>\
                <li><a href="http://www.lynda.com/ViewCertificate/3DEE0FE7F6A547B6855EADE88287707E" target="_blank">CSS: Gradients</a></li>\
                <li><a href="http://www.lynda.com/ViewCertificate/83AF227F5F594923B969E5835495D6DE" target="_blank">jQuery for Web Designers</a></li>\
                <li><a href="http://www.lynda.com/ViewCertificate/341A55F73B0F4F02AE69D4057B75B13B" target="_blank">Up and Running with AngularJS</a></li>\
                <li><a href="http://www.lynda.com/ViewCertificate/E803762372334A9DB82E7AA418FF47CE" target="_blank">CSS with LESS and Sass</a></li>\
                </ul>\
                </div>\
                ';

//**FOR CONTAINER CUSTOMIZING**
//Container left and top margin
var containerLeftPadding = 100;
var containerTopPadding = 100;
//Container width and height
var containerHeight = 450;
var containerWidth= 400;

//Note customizing
var noteOpenTime = 0.5;
var noteCloseTime = 1;
var timeBeforeUserCanCloseNoteWithMouseOut = 500;//ms
var userCanCloseNoteWithMouseOut = false;

//**FOR IMAGE CUSTOMIZING**
//Name to display under image
var imageName = "Walter K. Dahl";
var imageURL = "img/author.jpg";
//Image size for picture lying under the note
var imageWidth = 125;
var imageHeight = 125;
var imageIdleRotated = 90;
//Multiplier for scalin image when opened
var openImageScale = 2;
var imageOpenTime = 0.5;
var imageCloseTime = 1;


//** FUNCTION DEPENDENT VARIABLES***/
//For testing if note is open or not
var isNoteOpen = false;
//Testing to see if image is open or not
var imageIsOpen = false;

$(function(){
    //Initiating the Note with Image beneath first time
    initiateNote();

    //Notes functions. Let us click to open or close note
    $(".Note").click(function(){
       if(isNoteOpen){
       closeNote();
       }
       else{
       openNote();
       }
       setLinksUnderline();
    });
    //Leaving note
    $(".Note").mouseleave(function(){
        if(userCanCloseNoteWithMouseOut == true){
            closeNote();
           //Remove border when mouse is leaving note
           userCanCloseNoteWithMouseOut = false;
        }
        $(this).css("border", "2px solid hsla(0,0%,0%,0)");
       
    });
    //When entering note. Function to remove border on open note
    $(".Note").mouseenter(function(){
        //Make border visible when mouseover
        if(isNoteOpen){
            $(this).css({"border": "2px solid hsla(0,0%,0%,0.0)"});
        }
        else{
            $(this).css({"border": "2px solid hsla(0,0%,25%,1.0)"});
        }
    });

    //Image functions. Function to close or open image with click
    $(".noteImage").click(function(){
        if(!imageIsOpen){
        imageIsOpen = true;
        openNoteImage();
        }
        else{
        imageIsOpen = false;
        closeNoteImage();
        }
     });
     //When leaving image (hover)
    $(".noteImage").mouseleave(function(){
       //Remove border when mouse is leaving note
       $(this).css("border", "1px solid hsla(0,0%,0%,0)");
    });
    //When entering image (hover)
    $(".noteImage").mouseenter(function(){
        //Test to check if image is open or not. More subtle bordre when opened
        if(imageIsOpen){
            $(this).css("border", "1px solid hsla(0,0%,50%,0.5)");
        }
        else{
            $(this).css("border", "1px solid hsla(0,0%,25%,1.0)");
        }  
    });
 });

 function initiateNote(){
     //Container initiation
     $(".NotesContainer").css({
         "padding-left": containerLeftPadding+"px",
         "padding-top": containerTopPadding+"px",
         "width": containerWidth+"px",
         "height": containerHeight+"px"
     });
     
     //Image initiation
     $(".noteImage").css({
         "margin-left": (containerWidth/2-(imageWidth/2)+10)+"px",
         "margin-top": "75px",
         "width": imageWidth+"px",
         "height": imageHeight+"px",
         transform: "rotate("+imageIdleRotated+"deg)",
         "-ms-transform": "rotate("+imageIdleRotated+"deg)",
         "-webkit-transform": "rotate("+imageIdleRotated+"deg)",
         "background-image": "url("+imageURL+")",
         //Shadow for image. Note: The image is rotated so shadow have to change on open image
         "box-shadow": "inset -1px -1px 2px #fefefe,inset 1px 1px 2px #fefefe, 1px -1px 1px #AAA"
     });
     
     //Note initiation
     $(".Note").css({
         transform: "rotate("+rotateAmount+"deg) scale("+idleScale+")",
         "-ms-transform": "rotate("+rotateAmount+"deg) scale("+idleScale+")",
         "-webkit-transform": "rotate("+rotateAmount+"deg) scale("+idleScale+")"
     });
     
     unsetNoteLinks();
 }

 function openNote(){
     $(".Note").css({
         "transition-duration": noteOpenTime+"s",
         "-webkit-transition-duration": noteOpenTime+"s",
         //Transform
         transform: "rotate(0deg) scale("+openScale+")",
         "-ms-transform": "rotate(0deg) scale("+openScale+")",
         "-webkit-transform": "rotate(0deg) scale("+openScale+")",
         //Border remove when open
         "border": "2px solid hsla(0,0%,0%,0)",cursor:"auto"
     });
     setNoteLinks();
     isNoteOpen = true;
     setTimeout(function(){
        userCanCloseNoteWithMouseOut = true;
     }, timeBeforeUserCanCloseNoteWithMouseOut);
 }
 function closeNote(){
     $(".Note").css({
         "transition-duration": noteCloseTime+"s",
         "-webkit-transition-duration": noteCloseTime+"s",
         //Transform
         transform: "rotate("+rotateAmount+"deg) scale("+idleScale+")",
         "-ms-transform": "rotate("+rotateAmount+"deg) scale("+idleScale+")",
         "-webkit-transform": "rotate("+rotateAmount+"deg) scale("+idleScale+")",
         cursor:"pointer"
     });
     unsetNoteLinks();
     isNoteOpen = false;
 }

 function openNoteImage(){
     $(".noteImage").css({
         "transition-duration": imageOpenTime+"s",
         "-webkit-transition-duration": imageOpenTime+"s",
         //Transform
         transform: "rotate(0deg) scale("+openImageScale+")",
         "-ms-transform": "rotate(0deg) scale("+openImageScale+")",
         "-webkit-transform": "rotate(0deg) scale("+openImageScale+")",
         //Border change when open
         "border": "1px solid hsla(0,0%,0%,0)",
         "box-shadow": "inset -1px -1px 2px #fefefe,inset 1px 1px 2px #fefefe, 1px 1px 1px #AAA"
     });
     $(".noteImage").html("Click to close<h4>"+imageName+"</h4>");
 }
 function closeNoteImage(){
     $(".noteImage").html("");
     $(".noteImage").css({
         "transition-duration": imageCloseTime+"s",
         "-webkit-transition-duration": imageCloseTime+"s",
         //Transform
         transform: "rotate("+imageIdleRotated+"deg) scale(1)",
         "-ms-transform": "rotate("+imageIdleRotated+"deg) scale(1)",
         "-webkit-transform": "rotate("+imageIdleRotated+"deg) scale(1)",
         //Shadow change
         "box-shadow": "inset -1px -1px 2px #fefefe,inset 1px 1px 2px #fefefe, 1px -1px 1px #AAA"
     });
 }

function unsetNoteLinks(){
    $(".Note").html(noteContentWITHOUTlinks);
}
function setNoteLinks(){
    $(".Note").html(noteContentWITHlinks);
}
function setLinksUnderline(){
    $(".noteText ul li a").each(function(){
            $(this).hover(function(){
                $(this).css("text-decoration", "underline");
            }, function(){
                $(this).css("text-decoration", "none");
            });
       });
}
