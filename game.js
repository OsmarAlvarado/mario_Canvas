const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    framesCounter: 0,

    background: undefined,
    player: undefined,
    obstacles: [],

    keys: {
        TOP: 38,
        SPACE: 32
    },


    init(canvasID) {
        this.canvas = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvas.getContext('2d')
        this.setDimensions()
        this.start()
    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {

        this.reset()

        this.interval = setInterval(() => {

            this.framesCounter > 2000 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()

            this.generateObstacles()
            this.clearObstacles()

            this.isCollision() ? this.gameOver() : null

        }, 20)

       
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, './img/bg.png')
        this.player = new Player(this.ctx, this.width, this.height, this.keys)
        this.obstacles = []
    },
    

    clearAll() {
        this.ctx.clearRect(0,0,this.width, this.height)
    },

    drawAll() {
        this.background.draw()
        this.player.draw(this.framesCounter)
        this.obstacles.forEach(obstacle => {
            obstacle.draw()
        }
        )
    },

    generateObstacles() {
        if (this.framesCounter % 50 === 0) {
            this.obstacles.push(new Obstacle (this.ctx, this.width, this.player.floor, this.player.height))
        }
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= 0)
    },

    isCollision() {
        return this.obstacles.some(obs => {
            return (
                this.player.posX + this.player.width >= obs.posX &&
                this.player.posY + this.player.height >= obs.posY &&
                this.player.posX <= obs.posX + obs.width
            )
        })
    },

    gameOver() {
        clearInterval(this.interval)
    }


}