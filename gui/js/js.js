function clear_chat(){
	$('.chat-window').html("");
}

$(document).ready(function(){

	function submit_message(){
		$content=$('.message').text();
		if($content!='Message' && $.trim($content)!=''){
			$html='<div class="ping"><div class="ping-out"><span class="message-content">'+$content+'</span><span class="other"><span class="timestamp">'+gettime()+'</span><span class="fa-check"></span><span class="fa-check"></span></span></div></div>';
			$('.chat-window').append($html);
			$('.message').text("");
			$('.message').text('Message');
			$('.message').css('color','#999');
			$(document).scrollTop($(document).height());	
			if(parseInt($start)>4){
				runcommand($content);	
			}
		}
	}

	function sendmessage(){
		/* add ajax code to send msg here */
		animate_output("Message Sent");
	}

	$header=$('#header').css('height');
	$typer=parseInt($('.type-window').css('height'))-30;
	$winheight=parseInt($(window).height())-(parseInt($typer));
	$('.chat-window').css({
		'margin-bottom':$typer,
		'min-height': $winheight,
		'bottom': '-'+$winheight,
		'padding-bottom':'30px'
	});

	$sender=$('.send').css('width');
	$msgwidth=parseInt($(window).width())-(parseInt($sender))-110;
	$winwidth=parseInt($(window).width());
	$('.message').css({
		'width':$msgwidth
	});


	$(window).resize(function(){
		$sender=$('.send').css('width');
		$msgwidth=parseInt($(window).width())-(parseInt($sender))-110;
		$winwidth=parseInt($(window).width());
		$('.message').css({
			'width':$msgwidth
		});
	});

	function pad(n, width, z) {
	  z = z || '0';
	  n = n + '';
	  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	function gettime(){
		$d = new Date();
		$h=$d.getHours();
		$m=$d.getMinutes();
		if($h==12){
			$a="PM";
		}
		else if($h==0){
			$h=12;
			$a="AM";
		}
		else if($h>0 && $h <12){
			$a="AM";
		}
		else{
			$a="PM";
			$h=$h-12;
		}
		
		$h=pad($h,2);
		$m=pad($m,2);

		return $h+':'+$m+' '+$a;
	}
	
	$welcome1='Hello There';

	$welcome2='Welcome to the GUI Interface. Yes this looks like a chat messenger. <br> You can use the message input at the bottom to look for queries. <br><br>Available Commands:<br><b>Bio</b>, <b>Email</b>, <b>Facebook</b>, <b>Twitter</b>, <b>Instagram</b>, <b>Message</b>, <br><br>And at any time, you can use \'<b>Help</b>\' for the list of available queries.';

	$welcome3='Also, remember you \'keyboarders\', \'<b>Enter</b>\' is new line. \'<b>Ctrl+Enter</b>\' is send.<br>- Atul <span class="emoji emoji-spock"></span><span class="emoji emoji-tongue"></span>';

	$welcome4='Visit the repository <a href=\"http://github.com/atulbhats/atulbhats.com-gui-version\">Here</a>';

	$help="<table>"+
		"<tr><td colspan='2'>Use these Identifiers as pings.</td></tr>"+
		"<tr><td><b>bio</b></td><td>Displays my bio</td></tr>"+
		"<tr><td><b>facebook</b></td><td>Gives a link to my facebook profile. <b>fb</b> will also work</td></tr>"+
		"<tr><td><b>twitter</b></td><td>Gives a link to my twitter profile. <b>tw</b> will also work</td></tr>"+
		"<tr><td><b>instagram</b></td><td>Gives a link to my instagram photos. <b>ig</b> will also work</td></tr>"+
		"<tr><td><b>linkedin</b></td><td>Gives a link to my linkedin profile. <b>in</b> will also work</td></tr>"+
		"<tr><td><b>email</b></td><td>Displays Email Address</td></tr>"+
		"<tr><td><b>ping</b></td><td>Guides you through the process to send me a message.<b>send message</b> will also work</td></tr>"+
		"<tr><td><b>exit</b></td><td>Exits Chat.</td></tr>"+
		"</table>";

	$msg=0;
	$img=0;
	$unknown=0;
	$start=1;
	var nameReg = /^[a-zA-Z0-9\s\+\-]+$/;
    var numReg =  /^[0-9\+\-]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


    setTimeout(function(){
    	animate_output($welcome1);
    	setTimeout(function(){
	    	animate_output($welcome2);
	    	setTimeout(function(){
	    		animate_output($welcome3);
	    		setTimeout(function(){
	    			animate_output($welcome4);
	    		},500);
	    	},500);
	    },500);
    },500);
	

	$('.message').focus(function(){
		if($(this).text()=='Message'){
			$(this).text('');
			$(this).css('color','#000');
		}
	});

	$('.message').blur(function(){
		$text=$(this).text();
		if($.trim($text)==''){
			$(this).text('Message');
			$(this).css('color','#999');
		}
	});

	$('.send').click(function(){
		submit_message();
		$inputfocus=0;
	});

	$inputfocus=0;

	$(document).bind('keyup', function(e) {
		if(e.ctrlKey && (e.which == 13)) {
			$('.message').blur();
			submit_message();
			$inputfocus=0;
		}
		else if(e.which==9){
			$('.message').focus();
		}
		else{
			if($inputfocus==0){
				return false;
			}
		}
	});

	$('.message').focus(function(){
		$inputfocus=1;
	});

	$('.message').blur(function(){
		$inputfocus=0;
	});
	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	function runcommand(command){
		command=command.toLowerCase();
		
		if($msg>0){
			if(command=='cancel'){
				$content='Message sending cancelled.<span class="emoji emoji-upset"></span>';
				$msg=0;
			}
			else if($msg==1){
				if(nameReg.test(command) && ($.trim(command)!="" )){
					$name=command;
					$content="Hello "+$name.capitalize()+",<br> Now please enter your email id, so that I can contact you";
					$msg=2;
				}
				else{
					$content='Wow Wow, What sort of a name is that? <span class="emoji emoji-doubt"></span>Try again';
				}
			}
			else if($msg==2){
				if(emailReg.test(command) && ($.trim(command)!="" )){
					$email=command;
					$content="Sweet! Would you Like to provide your Number? (yes/no)";
				}
				else if(command=='yes'){
					$content='Awesome! <span class="emoji emoji-smile"></span>. Please enter your Mobile Number. Prefixes, Suffixes Included.';
					$msg=3;
				}
				else if(command=='no'){
					$content='It\'s ok. <span class="emoji emoji-smile"></span>. Now type in the message you have for me.';
					$number="Not Provided";
					$msg=4;
				}
				else{
					$content='Is that really your email? Please check again. <span class="emoji emoji-uncertain"></span>';
				}
			}
			else if($msg==3){
				if(numReg.test(command) && ($.trim(command)!="" )){
					$number=command;
					$content="Thanks! Now type in the message you have for me.";
					$msg=4;
				}
				else{
					$content='Your number does not seem to be right <span class="emoji emoji-uncertain"></span>';
				}
			}
			else if($msg==4){
				if($.trim(command)!=""){
					$message=command;
					$content='Yay! Your Message has been sent. <span class="emoji emoji-success"></span>';
					sendmessage();
					$msg=0;
				}
				else{
					$content='Nothing to tell me? At say Hi! <span class="emoji emoji-upset"></span>';
				}
			}
		}
		else{
			switch(command){

				case 'hi':
				case 'hola':
				case 'hello': $content='Hi. <span class="emoji emoji-bye"></span>.';
				break;

				case 'lol':
				case 'lmao':
				case 'rofl':
				case 'roflmao':
				case 'lulz':
				case 'muahaha':
				case 'hehehe':
				case 'hahaha':
				case 'ha ha ha': $content='<span class="emoji emoji-laugh"></span><span class="emoji emoji-laugh"></span><span class="emoji emoji-laugh"></span>. Wait!!!! What are you laughing about <span class="emoji emoji-doubt"></span><span class="emoji emoji-doubt"></span>.';
				break;

				case 'fb':
				case 'facebook': $content='The Admin has not updated facebook profile link.';
				break;

				case 'tw':
				case 'twitter': $content='The Admin has not updated twitter profile link.';
				break;

				case 'in':
				case 'linkedin' : $content='The Admin has not updated twitter profile link.';

				break;

				case 'pic': $content='The Admin has not updated image link/tag.';
							$img=1;
				break;
				
				case 'bio' : $content='The Admin has not updated bio.<span class="emoji emoji-smile"></span>';
				break;

				case 'help' : $content=$help;
				break;

				case 'ping':
				case 'send message' : $content='Ok. So let\'s get started. Let\'s Begin with your Name. <br>Please enter your Name';
									  $msg=1;
				break;

				case 'exit' : $content='Ok then. Ciao. <span class="emoji emoji-bye"></span>.<br>Window will close in 5 seconds. <script>setTimeout(function(){window.open("about:blank","_self");},5000);</script>';
				break;

				/* Add new commands here */

				
				default: $content=sortunknown();
				//'I\'m sorry. I dont know what to reply for that. <span class="emoji emoji-messed"></span>';
			}
		}


		if($img==1){
			animate_image($content);
			$img=0;
		}
		else{
			animate_output($content);	
		}
		

		
	}

	function sortunknown(){
		$reply="";
		$slno=parseInt((Math.random() * 10)/2);
		switch($slno){
			case 1: $reply="I'm Sorry, I dont understand Human Speaking patterns completely yet! <span class='emoji emoji-messed'></span>";
			break;

			case 2: $reply="Ok. But I understood none of that. Just a Bot not an A.I! <span class='emoji emoji-messed'></span>";
			break;

			case 3: $reply="If only I was a human to understand unprogrammed commands! <span class='emoji emoji-doubt'></span>";
			break;

			case 4: $reply="You know I am a programmed web page right??! <span class='emoji emoji-uncertain'></span>";
			break;

			case 0: $reply="Oops! Didn't get your there. <span class='emoji emoji-uncertain'></span>";
			break;
		}
		return $reply;
	}

	function animate_output(content){
		$('.contact p').text('...typing');
		setTimeout(function(){
			$('.ping-out:last-child').find('.fa-check:nth-child(2)').css('visibility','visible');
			setTimeout(function(){
				$start++;
				$('.chat-window').append('<div class="ping"><div class="ping-in"><span class="message-content">'+content+'</span><span class="other"><span class="timestamp">'+gettime()+'</span></span></div></div>');
				$('.contact p').text('Online');
				$(document).scrollTop($(document).height());	
				$('.message').blur();
			},1000);
		},500);
	}

	function animate_image(content){
		$('.contact p').text('...uploading image');
		setTimeout(function(){
			$('.ping-out:last-child').find('.fa-check:nth-child(2)').css('visibility','visible');
			setTimeout(function(){
				$('.chat-window').append('<div class="ping-img"><div class="ping-in">'+content+'<span class="other"><span class="timestamp">'+gettime()+'</span></span></div></div>');
				$('.contact p').text('Online');
				$(document).scrollTop($(document).height());	
				$('.message').blur();
				setTimeout(function(){
					$('.ping-img:last-child').find('img').css({
						'-webkit-filter': 'none',
					    '-o-filter': 'none',
					    '-moz-filter': 'none',
					    'filter': 'none',
					});
				},500);
			},1000);
		},500);
	}

	
});