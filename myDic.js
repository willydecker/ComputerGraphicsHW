function Dictionary(){    
	var items = {}; 

	this.has = function(key){     
		return key in items; 
	};

	this.set = function(key, value){     
		items[key] = value; //{1} 
	};

	this.getValue = function(key){
		var value = items[key];
		return(value);
	}

	this.remove = function(key){    
 		if (this.has(key)){         
			delete items[key];         
			return true;     
		}
		return false; 
	}

	
}