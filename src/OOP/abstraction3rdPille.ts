//1.Interface
interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}

//Implementation
class Musicplayer implements MediaPlayer{
    play(){
        console.log('Playing music');
    }
    pause(){
        console.log('Music paused...')
    }
    stop(){
        console.log('Music stopped')
    }
}

const MezbaPlayer=new Musicplayer();
MezbaPlayer.play()



//2.abstract class
abstract class MDPlayer{
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}
//Implementation
class MozedPlayer extends MDPlayer{
    play(){
        console.log('Playing MD')
    }
    pause(){
        console.log('MD paused')
    }
    stop(){
        console.log('MD stopped')
    }
}

const mozedPlayer=new MozedPlayer();
mozedPlayer.play()