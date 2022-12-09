class Obstacle {
    constructor(ctx, gameWidth, floor, playerHeight) {
        
        this.ctx = ctx
        this.width = 12
        this.height = this.width * 5

        this.posX = gameWidth
        this.posY = floor + playerHeight - this.height


        this.velX = 10
    }
    
    draw() {

        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posX -= this.velX
    }
}