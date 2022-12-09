class Bullets {
    
    constructor(ctx, playerPosX, playerPosY, floor, playerWidth, playerHeight) {

        this.ctx = ctx
        this.posX = playerPosX + playerWidth
        this.posY = 650

        this.floor = floor
        this.playerHeight = playerHeight

        this.radius = 10

        this.velX = 10
        this.velY = 1

        this.gravity = .9
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'black'
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()
        this.move()
    }

    move() {
        this.posX += this.velX
        this.posY += this.velY
        
        this.velY += this.gravity

        if (this.posY >= this.floor + this.playerHeight) {
            this.velY *= -1
        }
    }
}