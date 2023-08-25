

class Square{
	
	constructor(area){
		
		this.area = area;
		
		
	}
	
	get volume(){
		return this.vol;
	}
	
	
	get vol(){
		
		return this.area* this.area;
		
	}
	
	
	
}

let vol = new Square(10);

console.log(vol.volume);