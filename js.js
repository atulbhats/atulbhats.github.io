/* Atul Bhat : Website Terminal code. 
/* Author: Atul Bhat
/* Website: http://atulbhats.com
/* Updated: May 2016
*/


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
	$intro=$intro.replace(/~/g,'</b>');
	$intro=$intro.replace(/\^/g,'<b>');
	$intro=$intro.replace(/CPY/gi,'<span id="copy">&copy;'+$copy+'</span>');
	$('#introdiv').html($intro);	
	$('#defaultline').show();
	clearInterval($type);		
}


$(document).ready(function(){

	$('#introdiv').html('');

	$time=new Date();
	$time_hours=$time.getHours();
	$time_mins=$time.getMinutes();


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
	$copy=" 2016 AtulBhatS - terminal version. Hosted by GitHub"; /* Hey you Code Reader. You may Steal the Idea. Copy the code. But dont steal the code */
	$intro="Welcome to atulbhats.github.io . Designed like a terminal. ##"+
			"To view any of my repositories, enter the respective names or codes as commands: #"+
			"^Terminal~ : atulbhats.com-terminal-version #"+
			"^GUI~ : atulbhats.com-gui-version #"+
			"^friggeri~ or ^cv~ : Friggeri-CV-HTML-Template #"+
			"#"+
			"You can also use: #"+
			"^website~ or ^atulbhats.com~ : To visit my website www.atulbhats.com #"+
			"^github~ : To visit my github space github.com/atulbhats #"+
			"^cls~ : To Clear Screen #"+
			"##CPY";
	
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
				else if($intro[$p]=='C' && $intro[$p+1]=='P' && $intro[$p+2]=='Y'){
					$('#introdiv').html($html+'<span id="copy">&copy;'+$copy+'</span>');
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
			}
			$p++;
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
	$demo=0;
	$repo=0;

	var $history=new Array();
	
	function runcommand($command){
		/*addcommand();*/
		unnull();
		rehistory($command);
		$history[$z]=$command;
		$z++;
		$x=$z;
		$command=$command.toLowerCase();

		$('#defaultline').before('<div class="commandline" id="commandline'+$l+'"><span class="defaulttext">user@atulbhtas.github : ~$ </span>'+$command+'</div>');
		if($command=='exit'){
			$html="The Site Will Self Destruct in <span id='dest'>5</span>";
			hidedefault();
			destroy();		
		}
		else{
			switch($command){
				case 'repo':
					if($repo!=0){
						$html='Loading the respository. Please Wait. <script>setTimeout(function(){window.open("'+$repo+'","_self");},2000);';
					}
					else{
						$html='Project was not loaded correctly. Please type the project name first. And then type repo';
					}
				break;

				case 'demo':
					if($demo!=0){
						$html='Loading the demo. Please Wait. <script>setTimeout(function(){window.open("'+$demo+'","_self");},2000);';
					}
					else{
						$html='Project was not loaded correctly. Please type the project name first. And then type demo';
					}
				break;

				case 'terminal' : 
				case 'atulbhats.com-terminal-version' :
					$html='Please enter \'<b>demo</b>\' to view the demo or \'<b>repo</b>\' to view the respository of Terminal Website Code';
					$demo='http://atulbhats.github.io/terminal';
					$repo='http://github.com/atulbhats/atulbhats.com-terminal-version';
				break;

				case 'gui' : 
				case 'atulbhats.com-gui-version' : 
					$html='Please enter \'<b>demo</b>\' to view the demo or \'<b>repo</b>\' to view the respository of Terminal Website Code';
					$demo='http://atulbhats.github.io/gui';
					$repo='http://github.com/atulbhats/atulbhats.com-gui-version';
				break;
				
				case 'friggeri' : 
				case 'cv' : 
				case 'friggeri-cv-html-template' : 
					$html='Please enter \'<b>demo</b>\' to view the demo or \'<b>repo</b>\' to view the respository of Terminal Website Code';
					$demo='http://atulbhats.github.io/friggeri';
					$repo='http://github.com/atulbhats/friggeri-cv-html-template';
					break;

				case 'website' : 
				case 'atulbhats.com' : 
					$html='Taking you to my website. Please Wait. <script>setTimeout(function(){window.open("http://atulbhats.com","_self");},2000);';
				break;

				case 'github' : 
					$html='Taking you to my github space. Please Wait. <script>setTimeout(function(){window.open("http://github.com/atulbhats","_self");},2000);';
				break;

				case 'hi':
				case 'hello':
					$html=$command+" to you too!";
				break;

				case 'hola':
					$html="Hola! ¿Como estas? ¿Hablo Engles? ";
				break;
				
				case 'email':
					$html="You can email me at <b>ping@atulbhats.com</b>";
					$link="mailto:ping@atulbhats.com";
					break;

				case 'exit':
					$html="The Site Will Self Destruct in <span id='dest'>5</span>";
					destroy();
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

				case 'reload':
				$html="<script>location.reload();</script>";
				break;

				default :
				$html="\'"+$command+"\' Is not a known Command. But that might change the next time you are here. Use '<b>help</b>' for the list of available commands";

			}
		}

	

		$('#defaultline').before('<div class="line" id="line'+$l+'"></div>');
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