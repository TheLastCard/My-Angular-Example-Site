/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/****** WALTERS VAULT V1.0 ******/

//ANIMATION TIMERS
var mainGateTransitionTime = 0.25; //Time to sink in the gates
var gatesTransitionTime = 0.25; //Time to slide the gates
var bookmarksMenuTime = 0.25; //Time to show content


//DO NOT TOUCH THESE . FUNCTION DEPENDENT VARIABLES*******
var mainGateDelay = mainGateTransitionTime*1000;
var secondGatesDelay = gatesTransitionTime*1000;
var bookmarksDelay = bookmarksMenuTime*1000;
var isGatesOpen = false;
var mainGate = $(".mainGate");
var gateTextLEFT = $(".gateTextLEFT");
var gateTextRIGHT = $(".gateTextRIGHT");
var behindPorts = $(".behindPorts");
var lessExampleID = $( "#lessExample" );
//END***************

$(function(){
    initiateModals();
    initiateVault();
    
    //OPEN VAULT
    $(".VaultContainer").click(function(){
        if(!isGatesOpen){
            isGatesOpen = true;
            openMainGate();
            gatesVisibilityStepOnOpen();
            openGates();
        }
    });
    //CLOSE VAULT
    $(".closeVault").click(function(){
        if(isGatesOpen){
            isGatesOpen = false;
            closeGates();
            gatesVisibilityStepOnClose();
            closeMainGate();
        }
    });
    //VAULT HOVER
    $(".VaultContainer").hover(
        function(){
            $(".gateTextLEFT div, .gateTextRIGHT div").css({
                "color": "hsla(0,0%,0%,0.5)",
                "border": "solid 15px hsla(0,0%,0%,0.5)"
            });
        },
        function(){
        if(!isGatesOpen){
            $(".gateTextLEFT div, .gateTextRIGHT div").css({
                "color": "hsla(0,0%,50%,0.25)",
                "border": "solid 15px hsla(0,0%,50%,0.25)"
            });
        }
    });
});

function initiateVault(){
     //Sets transition time for gate sink-in
    mainGate.css({
        "transition-duration": mainGateTransitionTime+"s",
        "-webkit-transition-duration": mainGateTransitionTime+"s"
    });
    
    //Sets transition tim for gates slide-up
    behindPorts.css({
        "transition-duration": gatesTransitionTime+"s",
        "-webkit-transition-duration": gatesTransitionTime+"s",
        "border-left": "inset 1px solid hsla(0,0%,0%,0)",
        "border-right": "inset 1px solid hsla(0,0%,0%,0)"
    });

    gateTextLEFT.css({
        "transition-duration": gatesTransitionTime+"s",
        "-webkit-transition-duration": gatesTransitionTime+"s"
    });
    gateTextRIGHT.css({
        "transition-duration": gatesTransitionTime+"s",
        "-webkit-transition-duration": gatesTransitionTime+"s"
    });
}

function openMainGate(){
    mainGate.css({"box-shadow": "inset 2px 5px 5px #111, inset -5px 5px 5px #111"});
}
function closeMainGate(){
    setTimeout(function(){
        mainGate.css({"box-shadow": "none"});
    }, (secondGatesDelay+bookmarksDelay) );
}

function gatesVisibilityStepOnOpen(){
    setTimeout(function(){
        mainGate.css({"display": "none","width": "0px"});
        $(".leftGate, .rightGate").css("display", "block");
    }, mainGateDelay);
}
function gatesVisibilityStepOnClose(){
    setTimeout(function(){
        mainGate.css({"display": "block","width": "480px"});
        $(".leftGate, .rightGate").css("display", "none");
    }, bookmarksDelay);
}
function openGates(){
    setTimeout(function(){
    	behindPorts.css({
            "width": "440px",
            "ms-transform": "translateX(-220px)",
            "-webkit-transform": "translateX(-220px)",
            "transform": "translateX(-220px)",
            "border-left": "inset 1px solid hsla(0,0%,0%,1)",
         	"border-right": "inset 1px solid hsla(0,0%,0%,1)"
        });
        gateTextLEFT.css({
            "-ms-transform":"translate(-220px,0px)",
            "-webkit-transform":"translate(-220px,0px)",
            "transform":"translate(-220px,0px)",
            "clip": "rect(0px,240px,320px,220px)"
        });
        gateTextRIGHT.css({
            "-ms-transform":"translate(220px,0px)",
            "-webkit-transform":"translate(220px,0px)",
            "transform":"translate(220px,0px)",
            "clip": "rect(0px,260px,320px,240px)"
        });
        displayVaultContent();
        
    }, mainGateDelay);
}

function closeGates(){
    
    hideVaultContent();
    
    setTimeout(function(){
    	behindPorts.css({
            "width": "0px",
            "ms-transform": "translateX(0px)",
            "-webkit-transform": "translateX(0px)",
            "transform": "translateX(0px)",
            "border-left": "inset 1px solid hsla(0,0%,0%,0)",
         	"border-right": "inset 1px solid hsla(0,0%,0%,0)"
        });
        gateTextLEFT.css({
            "-ms-transform":"translate(-0px,0px)",
            "-webkit-transform":"translate(0px,0px)",
            "transform":"translate(0px,0px)",
            "clip": "rect(0px,240px,320px,0px)"
        });
        gateTextRIGHT.css({
            "-ms-transform":"translate(0px,0px)",
            "-webkit-transform":"translate(0px,0px)",
            "transform":"translate(0px,0px)",
            "clip": "rect(0px,480px,320px,240px)"
        }); 
        $(".gateTextLEFT div, .gateTextRIGHT div").css({
            "color": "hsla(0,0%,50%,0.25)",
            "border": "solid 15px hsla(0,0%,50%,0.25)"
        });
    },bookmarksDelay);
}


function displayVaultContent(){
    setTimeout(function(){
        $(".behindPorts a").css("display", "block");
        $(".closeVault").css({
            "clip": "rect(0px,35px,50px,0px)",
            "transition-duration": bookmarksMenuTime+"s",
            "-webkit-transition-duration": bookmarksMenuTime+"s"
        });
        $(".lessExample").css({
        "clip": "rect(-5px,155px,40px,0px)"
        });
        $(".vaultGit").css({
        "clip": "rect(-5px,228px,50px,0px)"
        });
        $(".linkedIn").css({
        "clip": "rect(-5px,110px,40px,0px)"
        });
        $(".vaultWIG").css({
        "clip": "rect(-5px,220px,40px,0px)"
        });
    }, secondGatesDelay);
}

function hideVaultContent(){
    $(".behindPorts a").css("display", "none");
    $(".closeVault").css({
        "clip": "rect(50px,35px,50px,0px)"
    });
    $(".lessExample").css({
        "clip": "rect(-5px,0px,40px,0px)"
    });
    $(".vaultGit").css({
        "clip": "rect(-5px,0px,50px,0px)"
        });
    $(".linkedIn").css({
        "clip": "rect(-5px,0px,40px,0px)"
    });
    $(".vaultWIG").css({
        "clip": "rect(-5px,0px,40px,0px)"
    });
}

function initiateModals(){
    lessExampleID.dialog({
      autoOpen: false,
      width:'auto',
      height:'auto',
      show: {
        effect: "fade",
        duration: 350
      },
      hide: {
        effect: "fade",
        duration: 350
      }
    });
    $( "#cvDialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "fade",
        duration: 250
      },
      hide: {
        effect: "fade",
        duration: 250
      }
    });
    $( "#openLessExample" ).click(function() {
        lessExampleID.css({"width": "600px"});
        lessExampleID.dialog( "open" );
        $('#lessExample p').html("<span class='gra'>*classes*</span> <br>\
                                    <span class='brw'>.transition</span> (<span class='blue'>@where: all</span>, <span class='blue'>@seconds</span>: <span class='blue'>0.25</span><span class='ora'>s</span>){<br>\
                                    <span class='brw'>transition:</span>               <span class='blue'>@arguments</span>;<br>\
                                    <span class='brw'>-webkit-transition</span>:       <span class='blue'>@arguments</span>;<br>\
                                }<br>\
                                <br>\
                                <span class='brw'>.transform-origin</span> (<span class='blue'>@xAxis</span>: <span class='blue'>50</span><span class='ora'>%</span>, <span class='blue'>@yAxis</span>:<span class='blue'>50</span><span class='ora'>%</span>){<br>\
                                    <span class='brw'>transform-origin:</span>         <span class='blue'>@arguments</span>;<br>\
                                    <span class='brw'>-ms-transform-origin:</span>     <span class='blue'>@arguments</span>;<br>\
                                    <span class='brw'>-webkit-transform-origin:</span> <span class='blue'>@arguments</span>; <span class='gra'>/* Chrome, Safari, Opera */</span><br>\
                                }<br>\
                                <br>\
                                <span class='brw'>.rotate</span>(<span class='blue'>@amount</span>: <span class='blue'>0</span><span class='ora'>deg</span>){<br>\
                                    <span class='brw'>transform:</span>         <span class='brw'>rotate</span>(<span class='blue'>@amount</span>);<br>\
                                    <span class='brw'>-ms-transform:</span>     <span class='brw'>rotate</span>(<span class='blue'>@amount</span>); <span class='gra'>/* IE 9 */</span><br>\
                                    <span class='brw'>-webkit-transform:</span> <span class='brw'>rotate</span>(<span class='blue'>@amount</span>); <span class='gra'>/* Chrome, Safari, Opera */</span><br>\
                                }<br>\
                                <br>\
                                <span class='brw'>.border-radius</span>(<span class='blue'>@top-left</span>: <span class='blue'>0</span><span class='ora'>px</span>, <span class='blue'>@top-right</span>:<span class='blue'>0</span><span class='ora'>px</span>, <span class='blue'>@bottom-right</span>:<span class='blue'>0</span><span class='ora'>px</span>, <span class='blue'>@bottom-left</span>:<span class='blue'>0</span><span class='ora'>px</span>){<br>\
                                    <span class='brw'>border-top-left-radius:</span>     <span class='blue'>@top-left</span>;<br>\
                                    <span class='brw'>border-top-right-radius:</span>    <span class='blue'>@top-right</span>;<br>\
                                    <span class='brw'>border-bottom-right-radius:</span> <span class='blue'>@bottom-right</span>;<br>\
                                    <span class='brw'>border-bottom-left-radius:</span>  <span class='blue'>@bottom-left</span>;<br>\
                                }<br>\
                                <br>\
                                <span class='gra'>*DEFINES*</span><br>\
                                <span class='blue'>@vaultWidth</span>: <span class='ora'>480px</span>;<br>\
                                <span class='blue'>@vaultHeigth</span>: <span class='ora'>320px</span>;<br>\
                                <span class='blue'>@basecolor</span>: <span class='brw'>hsla</span>(<span class='ora'>0</span>,<span class='ora'>0%</span>,<span class='ora'>100%</span>,<span class='ora'>1</span>);<br>\
                                <span class='blue'>@lesscolor</span>: <span class='brw'>hsla</span>(<span class='ora'>230</span>,<span class='ora'>100%</span>,<span class='ora'>50%</span>,<span class='ora'>1</span>);<br>\
                                <span class='blue'>@shadowcolor</span>: <span class='ora'>#AAA</span>;<br>\
                                <br>\
                                <a href='Walters_Vault.txt' style='font-size: 0.75em'>Click here to check out the complete .less file</a>");
    });
}