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

function HashTable(){
	var table = [];

	this.put = function (key, value) {    
		var position = loseloseHashCode(key); //{5}     
		console.log(position + ' - ' + key); //{6}
		table[position] = value; //{7}
	}

	this.get = function (key) {    
		return table[loseloseHashCode(key)]; 
	}

	this.remove = function(key){    
		table[loseloseHashCode (key)] = undefined; 
	}
}

var loseloseHashCode = function (key) {     
	var hash = 0;                           //{1}     
	for (var i = 0; i < key.length; i++) 	{  //{2}         
		hash += key.charCodeAt(i);          //{3}   
  	}    
	 return hash % 37;                       //{4} 
};

var myDic = new Dictionary();

myDic.set("Will", "will@email.com");
myDic.set("Bob", "bob@email.com");
myDic.set("Nancy", "nancy@email.com");
myDic.set("Walfdo", "walfdo@email.com");

console.log(myDic.has("Will"));
console.log(myDic.getValue("Will"));


var myHash = new HashTable();

myHash.put("Will", "will@email.com")
myHash.put("Bob", "bob@email.com");
myHash.put("Nancy", "nancy@email.com");