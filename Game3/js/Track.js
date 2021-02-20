


//=====================================Constants (for Track)

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLS= 20;
const TRACK_GAP = 0;
const TRACK_ROWS = 15;



//=================================================================Arrays
var griddy= [	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	         1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	 	 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	 	 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	 	 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
		
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	         1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1,
		 1, 4, 4, 4, 4, 4, 4, 4, 0, 5, 0, 5, 0, 1, 0, 5, 1, 1, 1, 1,
		 1, 2, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4, 4, 1,
	 	 1, 4, 4, 4, 4, 4, 0, 4, 0, 1, 5, 0, 0, 1, 0, 1, 4, 4, 4, 1,
		 1, 1, 1, 1, 1, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4, 4, 1,
		 1, 1, 1, 1, 1, 4, 0, 4, 1, 1, 0, 0, 5, 1, 0, 1, 4, 4, 4, 1,
		 1, 1, 1, 1, 1, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 1,
	 	 1, 1, 1, 1, 1, 4, 0, 4, 1, 1, 0, 0, 1, 1, 0, 1, 4, 4, 4, 1,
		 1, 1, 1, 1, 1, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4, 4, 1,
		 1, 4, 4, 4, 4, 4, 0, 4, 0, 1, 5, 0, 0, 1, 0, 1, 4, 4, 4, 1,
		 1, 2, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4, 4, 1,
	 	 1, 4, 4, 4, 4, 4, 4, 4, 0, 5, 0, 5, 0, 1, 0, 5, 1, 1, 1, 1,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],


		
		[4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4,
	         4, 4, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
		 4, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 3, 0, 0,
	 	 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0,
		 1, 0, 0, 0, 5, 1, 0, 0, 0, 1, 1, 1, 1, 1, 4, 0, 0, 3, 0, 4,
		 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4,
		 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
	 	 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1,
		 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
	 	 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
		 1, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 4, 4,
		 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4, 4, 4,],
		
		
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	         1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 4, 3, 3, 1,
		 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1,
		 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4, 0, 0, 1,
	 	 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 1,
		 1, 0, 5, 0, 0, 0, 1, 4, 4, 4, 5, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
	 	 1, 0, 0, 0, 4, 0, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		 1, 0, 5, 0, 0, 0, 1, 4, 4, 4, 5, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 1,
		 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4, 0, 0, 1,
	 	 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1,
		 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 4, 3, 3, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
		
	
		[4, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4,
		 1, 0, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
		 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 4,
	 	 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		 4, 4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
		 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
	 	 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 4,
		 1, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 4, 4,
		 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 0,
	 	 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0,
		 4, 4, 1, 1, 0, 0, 0, 0, 1, 4, 4, 4, 1, 1, 0, 0, 0, 0, 3, 0,
		 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1,],
			
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	         1, 4, 4, 1, 0, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 0, 1, 4,
		 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 4,
		 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 1, 4,
	 	 1, 4, 4, 1, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 4,
		 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 4,
		 1, 0, 2, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 4,
		 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 4,
	 	 1, 0, 2, 0, 5, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 4,
		 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 5, 1, 1, 1,
		 1, 4, 4, 4, 1, 0, 0, 0, 1, 0, 0, 0, 5, 1, 0, 0, 0, 0, 3, 1,
		 1, 4, 4, 1, 0, 0, 0, 5, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 1,
	 	 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 1,
		 1, 4, 4, 4, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 3, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
		
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	         1, 3, 3, 1, 4, 1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
		 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1,
	 	 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 1,
		 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
		 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 5, 0, 0, 0, 1,
		 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
	 	 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 5, 0, 0, 0, 1,
		 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
		 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 1,
		 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1,
	 	 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 3, 3, 1, 4, 1, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
		
		[4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
     		 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
     		 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    	 	 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
    		 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 0, 1,
     		 1, 0, 0, 5, 1, 0, 0, 0, 0, 0, 1, 4, 5, 5, 5, 1, 0, 0, 0, 1,
     		 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 5, 0, 0, 1,
     		 1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
     		 4, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 5, 1,
     		 4, 1, 1, 1, 1, 1, 4, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
      		 1, 0, 0, 0, 5, 1, 1, 1, 0, 0, 0, 1, 5, 0, 5, 1, 5, 0, 0, 1,
     		 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
     		 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
     		 1, 0, 0, 0, 5, 1, 1, 1, 1, 1, 4, 4, 1, 0, 0, 0, 0, 0, 1, 4,
     		 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4,],

		[4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4,
	         4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 5, 0, 0, 0, 1, 1, 4, 4, 4, 4,
		 1, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4,
		 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 5, 0, 0, 0, 0, 0, 1, 4, 4, 4,
	 	 1, 0, 0, 5, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 4, 4,
		 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 1, 4, 4,
		 1, 0, 0, 0, 3, 4, 1, 0, 0, 0, 1, 1, 1, 1, 5, 0, 0, 0, 1, 4,
		 1, 0, 0, 0, 3, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
	 	 1, 0, 0, 0, 3, 4, 1, 0, 0, 0, 1, 1, 1, 1, 5, 0, 0, 0, 1, 4,
		 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 1, 4, 4,
		 1, 0, 0, 5, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 4, 4,
		 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 5, 0, 0, 0, 0, 0, 1, 4, 4, 4,
	 	 1, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4,
		 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 5, 0, 0, 0, 1, 1, 4, 4, 4, 4,
		 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4,],

		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	         1, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 0, 4, 0, 0, 4, 3, 1,
		 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 1,
		 1, 4, 0, 4, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 0, 4, 0, 0, 3, 1,
	 	 1, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 3, 1,
		 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		 1, 0, 4, 1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 1, 0, 0, 0, 4, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1,
	 	 1, 4, 0, 1, 0, 4, 0, 0, 0, 1, 0, 5, 0, 0, 0, 5, 0, 0, 0, 1,
		 1, 0, 0, 5, 0, 0, 5, 0, 4, 5, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1,
		 1, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
		 1, 0, 4, 0, 0, 0, 1, 4, 0, 0, 0, 1, 0, 2, 0, 0, 5, 0, 0, 1,
	 	 1, 0, 0, 4, 4, 0, 1, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
		 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 5, 0, 0, 1,
		 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
		

			];

//trackGrid = griddy[griddy.length-1];//Math.floor(Math.random()*100)%1];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;
const REVERS = -1; 


var goAsYouWere = true;

function returnTileTypeAtColRow(col,row) {
	if(col >=0 && col < TRACK_COLS &&
	   row >= 0 && row < TRACK_ROWS) {
		var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		return trackGrid[trackIndexUnderCoord];
	} else {
		return TRACK_WALL;
	}
}


function carTrackHandling(whichCar) {	

	var carTrackCol = Math.floor(whichCar.x / TRACK_W);
	var carTrackRow = Math.floor(whichCar.y / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);
			


				leftyF = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2 ) ) * Math.cos(whichCar.ang - Math.atan((carHeight/2)/(carLength/2 + 3))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2  ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2 ) ) * Math.sin(whichCar.ang - Math.atan((carHeight/2)/(carLength/2 + 3))))/TRACK_H) )];
				
				
	
				rightyF = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2) + (carHeight/2) * (carHeight/2  ) ) * Math.cos(whichCar.ang + Math.atan((carHeight/2)/(carLength/2 + 10 ))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2  ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2 ) ) * Math.sin(whichCar.ang + Math.atan((carHeight/2)/(carLength/2 + 10 ))))/TRACK_H) )];





				weirdo1F = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2) + (carHeight/2/2) * (carHeight/2/2 ) ) * Math.cos(whichCar.ang - Math.atan((carHeight/2/2)/(carLength/2 + 11.5))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2  ) * (carLength/2 ) + (carHeight/2/2  ) * (carHeight/2/2 ) ) * Math.sin(whichCar.ang - Math.atan((carHeight/2/2)/(carLength/2 + 11.5))))/TRACK_H) )];




				weirdo2F = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2) + (carHeight/2) * (carHeight/2  ) ) * Math.cos(whichCar.ang + Math.atan((carHeight/2)/(carLength/2 + 11.5))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2  ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2 ) ) * Math.sin(whichCar.ang + Math.atan((carHeight/2)/(carLength/2 + 11.5))))/TRACK_H) )];


				weirdo3F = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + (carLength/2 ) * Math.cos(whichCar.ang)) /TRACK_W)  ,
											Math.floor((whichCar.y + (carLength/2 ) * Math.sin(whichCar.ang)) /TRACK_H))];



				rightyB = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2  ) ) * Math.cos(whichCar.ang + Math.PI - Math.atan((carHeight/2 )/(carLength/2 + 11 ))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2 ) ) * Math.sin(whichCar.ang + Math.PI - Math.atan((carHeight/2)/(carLength/2 + 11 ))))/TRACK_H) )];


				
				leftyB = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2  ) ) * Math.cos(whichCar.ang + Math.PI + Math.atan((carHeight/2 )/(carLength/2 + 2.1 ))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2  ) * (carHeight/2 ) ) * Math.sin(whichCar.ang + Math.PI + Math.atan((carHeight/2)/(carLength/2 + 2.1))))/TRACK_H) )];



				weirdo1B = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2/2  ) * (carHeight/2/2  ) ) * Math.cos(whichCar.ang + Math.PI - Math.atan((carHeight/2/2 )/(carLength/2 + 2.1 ))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2/2  ) * (carHeight/2/2 ) ) * Math.sin(whichCar.ang + Math.PI - Math.atan((carHeight/2/2)/(carLength/2 + 2.1 ))))/TRACK_H) )];


				

				weirdo2B = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2/2  ) * (carHeight/2/2  ) ) * Math.cos(whichCar.ang + Math.PI + Math.atan((carHeight/2/2 )/(carLength/2 + 2.1 ))))/TRACK_W),
											Math.floor((whichCar.y + Math.sqrt( (carLength/2 ) * (carLength/2 ) + (carHeight/2/2  ) * (carHeight/2/2 ) ) * Math.sin(whichCar.ang + Math.PI + Math.atan((carHeight/2/2)/(carLength/2 + 2.1))))/TRACK_H) )];




				weirdo3B = trackGrid[rowColToArrayIndex(Math.floor((whichCar.x + (carLength/2 ) * Math.cos(whichCar.ang + Math.PI)) /TRACK_W)  ,
											Math.floor((whichCar.y + (carLength/2 ) * Math.sin(whichCar.ang + Math.PI)) /TRACK_H))];



				goAsYouWere = true;
					bubb = 0;

						if(whichCar.speed > 0) { 
							if(leftyF != TRACK_ROAD )  { 

									bubb = leftyF;
									goAsYouWere = false;
									
							} // ====================leftFront 

							if(rightyF != TRACK_ROAD )  { 
									bubb = rightyF;
									goAsYouWere = false;
							
							} //==========rightfront
							
							if(weirdo1F != TRACK_ROAD )  { 
									bubb = weirdo1F; 
									goAsYouWere = false;
							
							}
						
							if(weirdo2F != TRACK_ROAD )  { 
									
									bubb = weirdo2F;
									goAsYouWere = false;
									
							}

							if(weirdo3F != TRACK_ROAD )  { 
									bubb = weirdo3F;	
									goAsYouWere = false;
							}
							
						} 

//=========================
					
						if(whichCar.speed < 0) {

							
							if(rightyB != TRACK_ROAD )  { 

									bubb = rightyB;
									goAsYouWere = false;
									
							}//=====================rightbottom
							
							
							if(leftyB != TRACK_ROAD )  { 
									bubb = leftyB ;
									goAsYouWere = false;
									
							} //==============================leftbottom		
							
							if(weirdo1B != TRACK_ROAD )  { 
									bubb = weirdo1B;
									goAsYouWere = false;
									
							} 	


							if(weirdo2B != TRACK_ROAD )  { 
									bubb = weirdo2B;
									goAsYouWere = false;
								
							} 
							
							if(weirdo3B != TRACK_ROAD )  { 
									bubb = weirdo3B ;
									goAsYouWere = false;
						
							}
								
							//console.log('111111111111111111');
								
							
						}

		//} 	// end of tracknumber to column
	//}	//end of tracknumber to row
	
	if (whichCar.bums > 0) {
		whichCar.timE += 1;
	}
	if (whichCar.addbool == true) {
		whichCar.speed *= 0.2;
		whichCar.addbool = false;
		whichCar.addbool2 = false;
		console.log("carma police is here!");
	}
	if (bubb == TRACK_GOAL) {
		whichCar.speed *= REVERS;
		loadLevel(Math.floor(Math.random()*10) % (griddy.length-1));
		console.log(whichCar.name + " WINS!Congratulations");
		whichCar.speed = whichCar.speed + Math.sign(whichCar.speed)*0.19;
		whichCar.wins += 1;

	} else{
		if (bubb != TRACK_ROAD ) {
			whichCar.speed *= REVERS;
			whichCar.speed = whichCar.speed + Math.sign(whichCar.speed)*0.19;
			if (whichCar.addbool2) {
				whichCar.bums +=1 ;
			}
			whichCar.addbool2 = true;
		}		
	}
	if (whichCar.bums == 1 && whichCar.timE > 60) {
		whichCar.timE = 1;
		whichCar.bums--;
	}
	if (whichCar.bums == 2 && (whichCar.timE) <= 60) {
		whichCar.addbool = true;
		whichCar.bums--;
		whichCar.timE = 1;
		
	}
	if (Math.abs(this.speed) <= WEIRD_ONE) {
		this.speed = 0;
	} else { 
		this.speed = -Math.sign(this.speed)*WEIRD_ONE;
	}

}       //end of trackHandling func



function rowColToArrayIndex(col, row) {   //========================================================
	return col + TRACK_COLS * row;
}


function drawTracks() {
var arrayIndex = 0;
var drawTileX = 0;
var drawTileY = 0;
	for(var eachRow = 0;eachRow < TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol < TRACK_COLS;eachCol++) {

			//var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
 			var tileKindHere = trackGrid[arrayIndex];
			var useImg;	
			
			
			useImg = trackPics[tileKindHere];
			

			/*switch(tileKindHere) {

			case(TRACK_ROAD) :
				useImg = roadPic;
				break;
			case(TRACK_WALL) :
				useImg = t;
				break;
			case(TRACK_GOAL) :
				useImg = goalPic;
				break;
			case(TRACK_TREE) :
				useImg = treePic;
				break;
			case(TRACK_FLAG) :
				useImg = flagPic;
				break;
			}*/


			canvasContext.drawImage(useImg, drawTileX,drawTileY);
			drawTileX += TRACK_W;
			arrayIndex++;
		} 	// end of FOR each column
		drawTileY += TRACK_H;
		drawTileX = 0;
	}	//end of FOR each row
}	//end of function(drawTracks)




