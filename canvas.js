CanvasRenderingContext2D.prototype.roundedRectShadow = 
 
/**
 * Draws the shadow of a rounded rectangle using the current state 
 * of the canvas.
 * @param {Number} x
 * 		The top left x coordinate
 * @param {Number} y
 * 	 	The top left y coordinate 
 * @param {Number} width
 * 		The width of the rectangle 
 * @param {Number} height 
 * 		The height of the rectangle
 * @param {Number} radiusBottomLeft
 * 		The corner radius of the bottom left corner. Defaults to 0;
 * @param {Number} radiusBottomRight
 * 		The corner radius of the bottom right corner. Defaults to 0;
 */
function(x, y, width, height, radiusBottomLeft, radiusBottomRight) {
  	if (typeof radiusBottomLeft === "undefined") {
	    radius = 0;
	}
	if (typeof radiusBottomRight === "undefined") {
	    radius = 0;
	}
	
	this.beginPath();
	this.moveTo(x+width, y + height - radiusBottomRight);

	// bottom right corner
	this.quadraticCurveTo(x + width, y + height, x + width - radiusBottomRight, y + height);
	this.lineTo(x + radiusBottomLeft, y + height);
	
	// bottom left corner
	this.quadraticCurveTo(x, y + height, x, y + height - radiusBottomLeft);
	
	this.stroke();
};

CanvasRenderingContext2D.prototype.roundedRect = 
 
/**
 * Draws a rounded rectangle using the current state of the canvas. 
 * @param {Number} x
 * 		The top left x coordinate
 * @param {Number} y
 * 	 	The top left y coordinate 
 * @param {Number} width
 * 		The width of the rectangle 
 * @param {Number} height 
 * 		The height of the rectangle
 * @param {Number} radiusBottomLeft
 * 		The corner radius of the bottom left corner. Defaults to 0;
 * @param {Number} radiusBottomRight
 * 		The corner radius of the bottom right corner. Defaults to 0;
 * @param {Number} radiusTopRight
 * 		The corner radius of the top right corner. Defaults to 0;
 * @param {Number} radiusTopLeft
 * 		The corner radius of the top left corner. Defaults to 0;
 * @param {Boolean} fill 
 * 		Whether to fill the rectangle. Defaults to false.
 */
function(x, y, width, height, radiusBottomLeft, radiusBottomRight, radiusTopRight, radiusTopLeft, fill, stroke) {
  	if (typeof radiusBottomLeft === "undefined") {
	    radiusBottomLeft = 0;
	}
	if (typeof radiusBottomRight === "undefined") {
	    radiusBottomRight = 0;
	}
	if (typeof radiusTopRight === "undefined") {
	    radiusTopRight = 0;
	}
	if (typeof radiusTopLeft === "undefined") {
	    radiusTopLeft = 0;
	}

	if (typeof fill == "undefined" ) {
	  fill = false;
	}
	
	if (typeof stroke == "undefined" ) {
	  stroke = true;
	}

	this.beginPath();
	this.moveTo(x + radiusTopLeft, y);
	this.lineTo(x + width - radiusTopRight, y);
	
	// top right corner
	this.quadraticCurveTo(x + width, y, x + width, y + radiusTopRight);
	this.lineTo(x + width, y + height - radiusBottomRight);
	
	// bottom right corner
	this.quadraticCurveTo(x + width, y + height, x + width - radiusBottomRight, y + height);
	this.lineTo(x + radiusBottomLeft, y + height);
	
	// bottom left corner
	this.quadraticCurveTo(x, y + height, x, y + height - radiusBottomLeft);
	this.lineTo(x, y + radiusTopLeft);
	
	// top left corner
	this.quadraticCurveTo(x, y, x + radiusTopLeft, y);
	this.closePath();
	
	if (stroke) {
	  this.stroke();
	}
	
	this.stroke();
	
	if (fill) {
	  this.fill();
	}        
}