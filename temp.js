class Circle {
    #radius;
    setRadius(r) {
        if (r >= 0) {
            this.#radius = r;
        }
    }
    getRadius(){
        if(this.#radius){
            return this.#radius;
        }else{
            throw "Radius is undefined"
        }
    }
    getDiameter() {
        return this.getRadius() * 2
    }
    getCircumferance() {
        return Math.PI * getDiameter();
    }
    getArea() {
        return Math.PI * this.getRadius() * this.getRadius();
    }
}

let c = new Circle();
c.setRadius(3)
console.log(c.getDiameter())

