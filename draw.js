class Canvas {
    static font = "Arial";

    #ctx;
    latestDraw;

    constructor(id, colorTheme) {
        this.colorTheme = colorTheme;
        this._c = document.getElementById(id);
        this.#ctx = this._c.getContext("2d");
        this.#ctx.lineCap = "round";
        this.resize();

        addEventListener("resize", e => this.resize());
    }

    drawTermFrame(name, dayCount) {
        let dayWidth = Math.floor((this.width - this.margin) / dayCount);
        this.line(this.margin, 0, this.margin, this.height, this.colorTheme, 5);
        for(let i = 0; i < dayCount; i++) {
            this.line(this.margin + i * dayWidth, 0, this.margin + i * dayWidth, this.height, this.colorTheme, 5);
            this.text(["H", "K", "Sze", "Cs", "P", "Szo", "V"][i], this.margin + (i + 0.5) * dayWidth, this.hourHeight / 2, this.hourHeight * 0.7, this.colorTheme, this.colorTheme);
        }
        for(let i = 8; i < 20; i++) {
            this.line(0, (i - 7) * this.hourHeight, this.width, (i - 7) * this.hourHeight, this.colorTheme, 5);
            this.text(i + "-" + (i+1), this.margin / 2, (i - 6.5) * this.hourHeight, this.hourHeight * 0.7, this.colorTheme, this.colorTheme);
        }

        this.text(name, this.margin / 2, this.hourHeight / 2, this.hourHeight * 0.4, this.colorTheme, this.colorTheme);
    }
    drawDayFrame(term, day) {
        this.line(this.margin, 0, this.margin, this.height, this.colorTheme, 5);
        this.text(["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"][day], this.width / 2 + this.margin / 2, this.hourHeight / 2, this.hourHeight * 0.7, this.colorTheme, this.colorTheme);
        for(let i = 8; i < 20; i++) {
            this.line(0, (i - 7) * this.hourHeight, this.width, (i - 7) * this.hourHeight, this.colorTheme, 5);
            this.text(i + "-" + (i+1), this.margin / 2, (i - 6.5) * this.hourHeight, this.hourHeight * 0.7, this.colorTheme, this.colorTheme);
        }

        this.text(term.name, this.margin / 2, this.hourHeight / 2, this.hourHeight * 0.4, this.colorTheme, this.colorTheme);
    }
    drawCourse(course, days) {
        if(course.temp) {
            this.globalAlpha = 0.6;
        }
        let dayWidth = (this.width - this.margin) / days;
        let centerX = this.margin + (course.time.day * (days != 1) + course.width / 2 + course.width * course.splitPlace) * dayWidth;
        let startY = course.time.hour + course.time.min / 60 - 7;
        this.rectangle(centerX, (startY + course.time.length * 0.75 / 2) * this.hourHeight, (dayWidth - 5) * course.width, course.time.length * 0.75 * this.hourHeight - 5, undefined, course.category.color);
        this.text(course.name, centerX, (startY + 0.2) * this.hourHeight, this.hourHeight * 0.25, this.colorTheme, this.colorTheme);
        this.text(course.teacher, centerX, (startY + 0.5) * this.hourHeight, this.hourHeight * 0.2, this.colorTheme, this.colorTheme);
        if(course.disabled) {
            this.line(centerX - (dayWidth - 5) * course.width / 2, startY * this.hourHeight, centerX + (dayWidth - 5) * course.width / 2, (startY + course.time.length * 0.75) * this.hourHeight - 5, "red", 3);
            this.line(centerX + (dayWidth - 5) * course.width / 2, startY * this.hourHeight, centerX - (dayWidth - 5) * course.width / 2, (startY + course.time.length * 0.75) * this.hourHeight - 5, "red", 3);
        }
        this.globalAlpha = 1;
    }

    shape(drawColor, fillColor, shapeFunc, thickness = 1, drawFunc = () => this.#ctx.stroke(), fillFunc = () => this.#ctx.fill()) {
        if(!drawColor && !fillColor) {
            console.warn(`Calling drawing function without color parameters`);
            return;
        }
        shapeFunc();
        if(fillColor) {
            this.fillColor = fillColor;
            fillFunc();
        }
        if(drawColor) {
            this.drawColor = drawColor;
            this.lineWidth = thickness;
            drawFunc();
        }
    }
    rectangle(centerX, centerY, width, height, drawColor, fillColor, thickness) {
        let rect = () => {
            this.#ctx.beginPath();
            this.#ctx.rect(
                centerX - width / 2, 
                centerY - height / 2, 
                width, height
            );
        };
        this.shape(drawColor, fillColor, rect, thickness);
    }
    circle(centerX, centerY, r, drawColor, fillColor, thickness) {
        let arc = () => {
            this.#ctx.beginPath();
            this.#ctx.arc(
                centerX, 
                centerY, 
                r, 0, Math.PI * 2
            );
        };
        this.shape(drawColor, fillColor, arc, thickness);
    }
    text(text, centerX, centerY, size, drawColor, fillColor, textAlign = "center") {
        this.textAlign = textAlign;
        this.shape(
            drawColor, fillColor, 
            () => this.fontSize = size, undefined,
            () => this.#ctx.strokeText(text, centerX, centerY + size / 4),
            () => this.#ctx.fillText(text, centerX, centerY + size / 4)
        );
    }
    line(startX, startY, endX, endY, color, thickness = 1) {
        this.drawColor = color;
        this.lineWidth = thickness;
        this.#ctx.beginPath();
        this.#ctx.moveTo(startX, startY);
        this.#ctx.lineTo(endX, endY);
        this.#ctx.stroke();
    }
    clear(color = "white") {
        this.#ctx.clearRect(0, 0, this.width, this.height);
        this.fillColor = color;
        this.#ctx.fillRect(0, 0, this.width, this.height);
    }

    resize() {
        this._c.width = this.width;
        this._c.height = this.height;

        this.clear();
        this.latestDraw?.();
    }

    get width() {
        return globalThis.innerWidth;
    }
    get height() {
        return globalThis.innerHeight;
    }
    get hourHeight() {
        return Math.floor(this.height / 13);
    }
    get margin() {
        return Math.floor(this.width / 7);
    }

    set fillColor(value) {
        if(this.#ctx.fillStyle != value) {
            this.#ctx.fillStyle = value;
        }
    }
    get fillColor() {
        return this.#ctx.fillStyle;
    }
    set drawColor(value) {
        if(this.#ctx.strokeStyle != value) {
            this.#ctx.strokeStyle = value;
        }
    }
    get drawColor() {
        return this.#ctx.strokeStyle;
    }
    set lineWidth(value) {
        if(this.#ctx.lineWidth != value) {
            this.#ctx.lineWidth = value;
        }
    }
    get lineWidth() {
        return this.#ctx.lineWidth;
    }
    set fontSize(value) {
        value = value + "px " + Canvas.font;
        if(this.#ctx.font != value) {
            this.#ctx.font = value;
        }
    }
    get fontSize() {
        let i;
        for(i = 0; i < this.#ctx.font.length; i++) {
            if(this.#ctx.font[i] == "p") {
                break;
            }
        }
        return +this.#ctx.font.substring(0, i);
    }
    set textAlign(value) {
        if(this.#ctx.textAlign != value) {
            this.#ctx.textAlign = value;
        }
    }
    get textAlign() {
        return this.#ctx.textAlign;
    }
    set globalAlpha(value) {
        if(this.#ctx.globalAlpha != value) {
            this.#ctx.globalAlpha = value;
        }
    }
    get globalAlpha() {
        return this.#ctx.globalAlpha;
    }
}

const C = new Canvas("main", "black");
