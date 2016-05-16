/* Atul Bhat : Website Terminal code. 
/* Author: Atul Bhat
/* Website: http://atulbhats.com
/* Updated: Jan 2016
/* DO NOT ADD SINGLE LINE COMMENTS WITH double slashes !!!!! PHP will make the whole file a comment. Always use /* */ 

var ip='user';
var year='2016';

function getweather($loc){
	$data="op=weather&loc="+$loc;
	$clloc=$loc.replace(' ','');
	$.ajax({  
        type: "POST",  
        url: "apis.php",  
        data: $data,  
        success: function(e) {
        		if($.trim(e)==""){
        			e="Weather for "+$loc+" returned no result. Please check the location and try again.";
        		}
        		$('.weather'+$clloc).html(e);
        		$('#defaultline').show();
        },
        error: function(){
        		$('.weather'+$clloc).html('Weather not available due to some tech error. Please try again. Sorry.');
        		$('#defaultline').show();
        }  
    });
    $('body').scrollTop($(window).height());
}

function getnews($topic){
	$data="op=news&topic="+$topic;
	$clloc=$topic.replace(' ','');
	$.ajax({  
        type: "POST",  
        url: "apis.php",  
        data: $data,  
        success: function(e) {
        		if($.trim(e)==""){
        			e="News about "+$topic+" returned no result. Please try again. after a while";
        		}
        		$('.news'+$clloc).html(e);
        		$('#defaultline').show();
        },
        error: function(){
        		$('.news'+$clloc).html('News not available due to some tech error. Please try again. Sorry.');
        		$('#defaultline').show();
        }  
    });
    $('body').scrollTop("+100px");
}

function getmeaning($wrd){
	$data="op=dic&wrd="+$wrd;
	$clloc=$wrd.replace(' ','');
	$.ajax({  
        type: "POST",  
        url: "apis.php",  
        data: $data,  
        success: function(e) {
	        	if($.trim(e)==""){
        			e="No meaning of "+$wrd+" found. Try googling \"define "+$wrd+"\" ";
        		}
        		$('.meaning'+$clloc).html(e);
        		$('#defaultline').show();
        },
        error: function(){
        		$('.meaning'+$clloc).html('Meaning not available due to some tech error. Please try again. Sorry.');
        		$('#defaultline').show();
        }  
    });
    $('body').scrollTop($(window).height());
}



function getascii(){
	$.ajax({  
        type: "POST",
        async: "true",  
        url: "http://atulbhats.com/ascii.php",  
        success: function(e) {
        		$('.ascii').css('font-size','8px');
        		$('.ascii').html(e);
        		$('#defaultline').show();

        },
        error: function(){
        	$('.ascii').html('Ascii Could Not be Loaded Now. Please check Connection and Try Later');
        	$('#defaultline').show();
        }
	});
}

function hidedefault(){
	$('#defaultline').hide();
}

function skipintro($type){
	$intro_run=0;
	$introstop=true;
	$('#introdiv').html("");
	clearInterval($type);			
	$p==$intro.length;
	$intro=$intro.replace(/#/gi,'<br>');
	$intro=$intro.replace(/\/BGui/gi,'<b>gui</b>');
	$intro=$intro.replace(/\/BHelp/gi,'<b>help</b>');
	$intro=$intro.replace(/CPY/gi,'<span id="copy">&copy;'+$copy+'</span>');
	$intro=$intro.replace('GUI','<a href=\'gui\' class="guilink">Click Here</a>');
	$('#introdiv').html($intro);	
	$('#defaultline').show();
	clearInterval($type);		
	$('#defaultline').before('<div class="commandline" id="commandline0"><span class="defaulttext">welcome_bot@atulbhats : ~$ </span>'+$salute+'</div>');		
}


$(document).ready(function(){

	$('#introdiv').html('');

	$time=new Date();
	$time_hours=$time.getHours();
	$time_mins=$time.getMinutes();

	if($time_hours>15 && $time_hours>00){
		$salute="Evening";
	}
	else if($time_hours>11 && $time_hours>00){
		$salute="Afternoon";
	}
	else if($time_hours>00 && $time_hours>00){
		$salute="Morning";
	}
	else{
		$salute="Day";
	}

	$salute="Good "+$salute; 


	$z=0;
	$x=0;
	$('#actualinput').focus();
	$('#defaultline').hide();
	$('.cursor').css('background','rgb(238, 238, 238)');	
	$link="";
	$p=0; /*intro counter*/
	$msg=0;
	$asciia=0;
	$msgcmd=0;
	$sendact=0;
	$clr=0;
	$save=0;
	/*
	# : br
	^ : bold open
	%: 	copyright
	~ : bold close
	*/
	$copy=" "+year+" AtulBhatS - terminal version. Hosted on GitHub. Visit the respository <a href=\"http://github.com/atulbhats/atulbhats.com-terminal-version\">Here</a>"; /* Hey you Code Reader. You may Steal the Idea. Copy the code. But dont steal the code */
	$intro="#";
	$intro="Welcome to atulbhats.com | Designed like a terminal to add more interaction with user. Start with '/BHelp'.##CPY";
	$help="<div class='help'>"+
			"<div>Interface Commands</div>"+
			"<div><b>ls</b>Lists out Available Commands</div>"+
			"<div><b>bio</b>Displays my bio</div>"+
			"<div><b>dob</b>Displays Date of Birth</div>"+
			"<div><b>social</b>Shows Social Links Commands</div>"+
			"<div><b>email</b>Displays Email Address</div>"+
			"<div><b>message</b>Activates Message Sending Options (<b>ping</b> and <b>msg</b> commands will also work).</div>"+
			"<div><b>visit</b>Takes you to the previously loaded Link in a new tab.</div>"+
			"<div><b>cls</b>Clear Screen. (<b>clr</b> will also work).</div>"+
			"<div><b>google</b>searches google (encrypted) for a query that follows the command. eg: <b>google atul bhat</b></div>"+
			"<div><b>search</b>searches duckduckgo for a query that follows the command. eg: <b>search atul bhat</b></div>"+
			"<div><b>wiki</b>searches wikiwand (the better wikipedia) for a query that follows the command. eg: <b>wiki atul bhat</b></div>"+
			"<div><b>define</b>displays the meaning of a word. eg: <b>define website</b></div>"+
			"<div><b>weather</b>displays the weather at a place. eg: <b>weather new york</b></div>"+
			"<div><b>locate</b>searches for a place on map. eg: <b>locate new york</b></div>"+
			"<div><b>exit</b>Exits Terminal</div>"+
			"</table>";

	$intro_run=1;
	

	$type=setInterval(function(){
						writeintro();
					  },15);

	function writeintro(){
			$html=$('#introdiv').html();
			if($p<$intro.length-1 && $intro_run==1){
				if($intro[$p]=='#') $('#introdiv').html($html+'<br>');
				/*else if($intro[$p]=='^') $('#introdiv').html($html+'<b>');
				else if($intro[$p]=='~') $('#introdiv').html($html+'</b>');*/
				else if($intro[$p]=='%') $('#introdiv').html($html+'<span id="copy">&copy;');
				else if($intro[$p]=='*') $('#introdiv').html($html+'</span>');
				else if($intro[$p]=='/' && $intro[$p+1]=='B' && $intro[$p+2]=='G' && $intro[$p+3]=='u' && $intro[$p+4]=='i'){
					$('#introdiv').html($html+'<b>gui</b>');
					$p=$p+4;	
				}
				else if($intro[$p]=='/' && $intro[$p+1]=='B' && $intro[$p+2]=='P' && $intro[$p+3]=='r' && $intro[$p+4]=='i'){
					$('#introdiv').html($html+'<b>privacy</b>');
					$p=$p+4;	
				}
				else if($intro[$p]=='/' && $intro[$p+1]=='B' && $intro[$p+2]=='H' && $intro[$p+3]=='e' && $intro[$p+4]=='l' && $intro[$p+5]=='p' ){
					$('#introdiv').html($html+'<b>help</b>');
					$p=$p+5;	
				} 
				else if($intro[$p]=='C' && $intro[$p+1]=='P' && $intro[$p+2]=='Y'){
					$('#introdiv').html($html+'<span id="copy">&copy;'+$copy+'</span>');
					$p=$p+2;	
				} 
				else if($intro[$p]=='G' && $intro[$p+1]=='U' && $intro[$p+2]=='I'){
					$('#introdiv').html($html+'<a href=\'gui\' class="guilink">Click Here</a>');
					$p=$p+2;	
				} 
				else {
					$('#introdiv').html($html+$intro[$p]);
				}
					
			}
			else if($p>=$intro.length-1){
				clearInterval($type);
				$intro_run=0;
				$('#defaultline').show();
				$loadedintro=$('#introdiv').html();
				$loadedintro=$loadedintro.replace(/\^/g,'<b>');
				$loadedintro=$loadedintro.replace(/~/g,'</b>');
				$('#introdiv').html($loadedintro);
				$('#defaultline').before('<div class="commandline" id="commandline0"><span class="defaulttext">welcome_bot@atulbhats : ~$ </span>'+$salute+'</div>');
			}
			$p++;
	}


	function sendmsg(){
		/* Add msg sending Ajax Code here */
		alert('Update Msg Sending Code');
	}

	function savecommand(command,type){
		/* 	If you wish to save commands, this would be the place to add the ajax code to save the command. 
			If you do not wish to do so, then return false. */
	}

	function destroy(){
		$z=4;
		setInterval(function(){
						$('#dest').text($z);
						$z--;
						if($z==-2){
							window.open('about:blank','_self');
						}
					},1000);
	}

	setInterval(function(){
					blinkcursor();
				},560);


	function blinkcursor(){
		$bg=$('.cursor').css('background-color');
		if($bg=='rgb(238, 238, 238)'){
			
			$('.cursor').css('background-color','transparent');	
		}
		else $('.cursor').css('background-color','rgb(238, 238, 238)');
	}

	$l=0;

	var $history=new Array();
	var $cmdarray=new Array('help','cls','gui','user','ascii','pic','bio','dob','email','social','message','dir','projects','physics','phy','paste','ctrl+v','exit','fb','in','tw','g+','ig','be','visit','first','gui','ip','color','cipher','2012','2013','2014','2015');
	
	function runcommand($command){
		/*addcommand();*/
		unnull();
		rehistory($command);
		$history[$z]=$command;
		$z++;
		$x=$z;
		$command=$command.toLowerCase();

	    var wiki="wiki";
	    var google="google";
	    var weather="weather";
	    var news="news";

		if($command=='cancelsending'){
		 $command2='Cancelled';
		 $msg=0;
		 $msgcmd=0;	
		}
		else $command2=$command;
		$('#defaultline').before('<div class="commandline" id="commandline'+$l+'"><span class="defaulttext">'+ip+'@atulbhats : ~$ </span>'+$command2+'</div>');
		if($command=='exit'){
			$html="The Site Will Self Destruct in <span id='dest'>5</span>";
			hidedefault();
			destroy();		
		}
		else if($msg==0){
				if($command.trim()=="search"){
					$html="<i>Search</i> is a features wherein you can search something directly from this website.<br>"+
						"Currently you can Use:<br><b>google keyword</b> : search the keyword in google (encrypted.google.com). eg:google atul bhat"+
						"<br><b>wiki keyword</b> : search the keyword in wikiwand (the better wikipedia). eg:wiki atul bhat"+
						"<br><b>weather location</b> : get the current weather conditions for a place (Yahoo weather). eg:weather antarctica"+
						"<br><b>define keyword</b> : get the meaning of a word from Merriam Webster a.k.a dictionary. eg: define big bang"+
						"<br><b>locate keyword</b> : locate a place on map (Google Maps). eg:wiki atlantis";
				}
				else if($command.trim()=="google"){
					$html="No Query Entered. Taking you to Google...<script>window.open('https://encrypted.google.com/','_blank');</script>";
				}
				else if(googleReg.test($command)){
					$qry = $command.substr(7);
					$html="Searching Google for \""+$qry+"\" ...<script>window.open('https://encrypted.google.com/search?q="+$qry+"','_blank');</script>";	
				}
				else if($command.trim()=="search"){
					$html="No Query Entered. Taking you to Duckduckgo...<script>window.open('https://duckduckgo.com/','_blank');</script>";
				}
				else if(searchReg.test($command)){
					$qry = $command.substr(7);
					$html="Searching Duckduckgo for \""+$qry+"\" ...<script>window.open('https://duckduckgo.com/?q="+$qry+"','_blank');</script>";	
				}
				else if($command.trim()=="wiki"){
					$html="No Query Entered. Taking you to Wikiwand (the better wikipedia)...<script>window.open('https://wikiwand.com/','_blank');</script>";
				}
				else if(wikiReg.test($command)){
					$qry = $command.substr(5);
					$html="Searching Wikiwand (the better wikipedia) for \""+$qry+"\" ...<script>window.open('https://www.wikiwand.com/en/"+$qry+"','_blank');</script>";	
				}
				else if($command.trim()=="locate"){
					$html="No Place specified. Please Enter a Location after the keyword and a space.";
				}
				else if(locateReg.test($command)){
					$qry = $command.substr(7);
					$html="Locating \""+$qry+"\" on google maps ...<script>window.open('https://www.google.com/maps/place/"+$qry+"','_blank');</script>";	
				}
				else if($command.trim()=="news"){
					$qry="gen";
					$clqry="gen";
					$html='<div class=" news news'+$clqry+'">Loading News... This may take some while.<script>hidedefault(); getnews("'+$qry+'");</script></div>';
				}				
				else if(newsReg.test($command)){
					$qry= $command.substr(5);
					$clqry=$qry.replace(' ','');
					$html='<div class=" news news'+$clqry+'">Loading '+$qry+' News...<script>hidedefault(); getnews("'+$qry+'");</script></div>';
				}
				else if($command.trim()=="weather"){
					$html="No Location specified. Please Enter a Location after the keyword and a space.";
				}				
				else if(weatherReg.test($command)){
					$qry= $command.substr(8);
					$clqry=$qry.replace(' ','');
					$html='<div class=" weather weather'+$clqry+'">Loading Weather...<script>hidedefault(); getweather("'+$qry+'");</script></div>';
				}
				else if($command.trim()=="define"){
					$html="Word not entered. Please Enter a word to find its dictionary meaning.";
				}
				else if(defineReg.test($command)){
					$qry= $command.substr(7);
					$clqry=$qry.replace(' ','');
					$html='<div class="meaning meaning'+$clqry+'">Loading the Meanings for '+$qry+'...<script>hidedefault(); getmeaning("'+$qry+'");</script></div>';
				}
				else if($command.trim()=="open"){
					$html="No URL Entered. Try Again.";
				}
				else if($command.trim()=="ping"){
					$html="Ping address not specified. specify a website to ping.";
					$html="Ping feature is on the way.";
				}
				else{
					switch($command){
						case 'hi':
						case 'hello':
						$html=$command+" to you too! Please type <b>help</b> and hit enter for info on commands. For just the list, type <b>ls</b>";
						break;

						case 'hola':
						$html="Hola! ¿Como estas? ¿Hablo Engles? Por favor, escribe <b>help</b> y pulsa enter para obtener información sobre los comandos. Por tan sólo la lista, escriba <b> ls </b>";
						break;
						
						case 'ls':
						$html="Available Commands<br><b>help\tcls\tbio\tdob\temail\tsocial\tmessage<br>\n\tgoogle\tsearch\twiki\tdefine\tweather\texit</b>";
						break;

						case 'bio':
						$html="Enter your Bio in the JS File";
						break;

						case 'user':
						$html="The only info I have is you are <span class='defaulttext'>"+ip+"</span>, and that's the most I can find out about you. Anyways thanks for visiting";
						break;

						case 'social':
						$html="Choose any of the Below Commands to socialize<br><b>fb</b>\t\t:Facebook Timeline<br><b>g+</b>\t\t:Google+ Page<br><b>tw</b>\t\t:Twitter Profile<br><b>in</b>\t\t:LinkedIn Profile<br><b>ig</b>\t\t:Instagram Photos<br><b>be</b>\t\t:Behance - Portfolio<br><b>skype</b>\t\t:Skype caller id";
						break;

						case 'help':
						$html=$help;
						break;

						case 'fb':
						$html="Update Social Link in the JS file<br>The usual link with '/username' at the end<br>use '<b>visit</b>' to open the link";
						$link="Update Social Link in the JS file";
						break;

						case 'g+':
						$html="Update Social Link in the JS file<br>The usual link with '/username' at the end<br>use '<b>visit</b>' to open the link";
						$link="Update Social Link in the JS file";
						break;

						case 'be':
						$html="Update Social Link in the JS file<br>The usual link with '/username' at the end<br>use '<b>visit</b>' to open the link";
						$link="Update Social Link in the JS file";
						break;

						case 'tw':
						$html="Update Social Link in the JS file<br>The usual link with '/username' at the end<br>use '<b>visit</b>' to open the link";
						$link="Update Social Link in the JS file";
						break;

						case 'in':
						$html="Update Social Link in the JS file<br>The usual link with '/username' at the end<br>use '<b>visit</b>' to open the link";
						$link="Update Social Link in the JS file";
						break;

						case 'ig':
						$html="Update Social Link in the JS file<br>The usual link with '/username' at the end<br>use '<b>visit</b>' to open the link";
						$link="Update Social Link in the JS file";
						break;

						case 'skype':
						$html="Update Skype Info in JS";
						$link="skype:skype_user?call";
						break;

						case 'email':
						$html="You can email me at <b>EmailAddress@Domain.com</b>";
						$link="EmailAddress@Domain.com";
						break;

						case 'pic':
						$img='Image Link to be Updated';
						$html="There you go. That's how I look."+'<br><img class="profilepic" style="width:150px;" src="'+$img+'">';
						break;

						case 'visit':
						if($link!=""){
							window.open($link,"_blank");
							$link="";
						}
						else $html="No Social Link has been loaded. Try this command after viewing an address link to my page";
						break;

						case 'exit':
						$html="The Site Will Self Destruct in <span id='dest'>5</span>";
						destroy();
						break;

						case 'message':
						case 'msg' :
						case 'ping':
						$html="Message Sending Initiated<br>To cancel sending message, use <i>\'cancelsending\'</i> command to cancel sending this message.<br>Enter Your Name:";
						$msg=1;
						$msgcmd=1;
						break;

						case 'clr':
						case 'cls':
						$clr=1;
						$msg=0;
						$html="";
						break;

						case '':
						$html="";
						break;

						case 'cancelsending':
						$html="Message Sending Cancelled";
						$msg=0;
						$msgcmd=0;
						break;

						case 'dob':
						$html="Add DOB to JS File";
						break;

						case 'reload':
						$html="<script>location.reload();</script>";
						break;

						/* Add New Commands Here. You know the drill now */

						default :
						$html="\'"+$command+"\' Is not a known Command. But that might change the next time you are here. Use '<b>help</b>' for the list of available commands";

					}

					if($save==1){
						savecommand($command,0);
						$save=0;
					}
					else{
						savecommand($command,1);
					}
				}

		}
		else{
			if($msgcmd==1){
				if(nameReg.test($command) && ($.trim($command)!="" )){
					$name=$command;
					$html="Hello "+$name+"<br>Enter Your Email so that I can contact you:";
					$msgcmd=2;
				}
				else{
					$html="Wow Wow, What sort of a name is that? Try again:";
					$msgcmd=1;	
				}
				
			}
			else if($msgcmd==2){
				if($command=='N' || $command=='n'){
					$phone='';
					$html="Ok. I will contact you via email. Now please Type the Message and Press Alt+S to Send or Alt+C to Cancel Sending: ";
					$msgcmd=4;
				}
				else if($command=='Y' || $command=='y'){
					$html="Thanks! Please enter your Number ( with ISD code if outside india ).";
					$msgcmd=3;	
				}
				else if($command.trim()!="" && emailReg.test($command)){
					$email=$command;
					$html="Thanks for the Email! Would you like to Submit your Phone number so that I can contact you faster? (Y/N) ";
					$msgcmd=2;
				}
				else{
					$html="Oops! Something Wrong with your Email. Please type a proper email: ";
					$msgcmd=2;	
				}
				
			}

			else if($msgcmd==3){
				if($command=='no number entered proceeding to message' || $command=='n'){
					$phone='';
					$html="Ok. I will contact you via email. Now Type the Message and Press Alt+S to Send or Alt+C to Cancel Sending: ";
					$msgcmd=4;
				}
				else if($command.trim()!="" && numReg.test($command)){
					$phone=$command;
					$html="Thanks! Now Type the Message and Press Alt+S to Send or Alt+C to Cancel Sending: ";
					$msgcmd=4;
				}
				else{
					$html="Oops! Something Wrong with your Phone Number. Please type a proper number: ";
					$msgcmd=3;	
				}
				
			}
			else if($msgcmd==4){
				if($command!=""){
					$message=$command;
					$html="Please Wait, Terminal is Sending your Message...";
					sendmsg();
					$msg=0;
					$sendact=0;
					$msgcmd=0;
				}
				else{
					$html="At Least say Hi :'( I'm So lonely ;)...";
					$msgcmd=3;
				}
			}
			
			
		}

		$('#defaultline').before('<div class="line" id="line'+$l+'"></div>');
		if($asciia==1){
			$html=$html.replace(/~/g,"&nbsp;");
			$html=$html.replace(/#/g,'<br>');			
			$asciia=0;
		}
		$('#line'+$l).html($html);
		$('#commandcontainer').text("");
		$('#actualinput').val("");
		$l++;
		if($clr==1){
			$l=0;
			$('.line').remove();
			$('.commandline').remove();
			$clr=0;
		}
		$('#actualinput').focus();
		$(document).scrollTop($(document).height());

	}

	$(document).bind('keyup', function(e) {
		$existing=$('#commandcontainer').text();

		if(e.which==27 && $intro_run==1){
			skipintro($type);
		}
		else if(e.which==38){
			if($x>0){
				$('#actualinput').val($history[$x-1]);
				$('#commandcontainer').text($history[$x-1]);
				$x--;
				if($x<0)
					$x=0;	
			}
			if($x<0){
				return false;
			}
			
		}
		else if(e.which==40){
			if($x>=0){
				$('#commandcontainer').text($history[$x+1]);
				$('#actualinput').val($history[$x+1]);
				$x++;
			}
			if($x>$z){
				return false;
			}
		}
		if(e.altKey && (e.which == 83)) {
		  
	    /*send msg if $msg==1 which is activated when message command is typed*/
		    if($msg==1){
		    	$sendact=1;
				 runcommand($existing);
			}

		 /*   return false; */
		}
		else if(e.ctrlKey && (e.which == 82)) {
		 e.preventDefault();
	    /*send msg if $msg==1 which is activated when message command is typed*/
		    if($msg==1){
				if (confirm('Refreshing the Page with Discard Message!!') == true) {
			        window.reload();
			    } else {
			        e.preventDefault();
			        return false;
			    }
			}

		 /*   return false;*/
		}
		else if(e.altKey && (e.which == 67)) {
		  
	    /*send msg if $msg==1 which is activated when message command is typed*/
		    if($msg==1){
		    	$msg=0;
				 runcommand('cancelsending');
			}

		 /*  return false;*/
		}
		else if(e.which==13){
			/*enter pressed */
			/*$key[$k]=$('#commandcontainer').text;*/
			runcommand($existing);
			$('#actualinput').focus();
		}
		else{
			$type=true;
		}
		/*else if(e.which==38){
			$('#commandcontainer').text=$key[$k];
		}*/
		});

	$('#actualinput').keyup(function(e){
		if(e.which==8){
		  	$exist=$('#commandcontainer').text();
		  	/*delete pressed */
		  	e.preventDefault();
		  	/*alert('del');*/
		  	$c=$exist.length-1;
		  	$('#commandcontainer').text($exist.slice(0,$c));
		}
	  	else{
	  		/*alert("pressed : "+e.which);*/
			$('#commandcontainer').text($(this).val());
		}
	});

	/*setInterval(function(){
					$('#actualinput').focus();
				},5000);*/


	$('body').click(function(){
		$('body').scrollTop($(window).height());
	});

	$(document).keydown(function(e) {
		$('#actualinput').focus();
	});

	
	function unnull(){
		for($i=0;$i<$history.length;$i++){
			if($history[$i]=="" || $history[$i]==null || $history[$i]==undefined ){
				for($j=$i;$j<$history.length;$j++){
					$history[$j]=$history[$j+1];
				}
				$z--;
			}
		}
		$z=$history.length;
	}

	function rehistory($cmd){
		if($history.indexOf($cmd)>=0){
			for($i=$history.indexOf($cmd);$i<$history.length;$i++){
				$history[$i]=$history[$i+1];
			}
			$z--;
		}
	}	
});