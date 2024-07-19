class gaurav{
constructor (name , color){
    this.name = name
    this.color = color
}
run(){
    console.log(this.name + " Is running ")
}
shout(){
    console.log(this.name + " Is shouting ")
}
colour(){
    console.log(this.color)
}
}

class kiyansh extends gaurav{
play(){
    console.log(this.name + " Is playing ")
}

}
let gaur = new gaurav("Shweta", "White")
let kiy = new kiyansh("Tarun", "Green")

gaur.shout()
gaur.colour()
kiy.colour()
kiy.play()

