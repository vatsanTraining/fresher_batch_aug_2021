
export interface State{
    clap:number;
}

export interface Props{
    message:string;
}

export interface Props{
       id:number;reviewerName?:string;review:string;rating:number;
    
    }
    
    export interface ShowProp{
        review:Props;
      }
   
    export interface Title{

        title:string;
        logo:string;

    }

    export interface MenuItem{
        link:string;
        linkText:string;
    }

    export interface Menu{
        list:Array<MenuItem>
    }

    export interface HeaderProps{
        title:Title,
        list:Array<MenuItem>
    }

    export interface Restaurant{
      id:number,restaurantName:string, location:string,
      category:string,rating:number;
	  
    }
