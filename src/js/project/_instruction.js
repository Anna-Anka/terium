export const instructionTriangle = () => {
    if (document.querySelector('.instruction-card__triangle')) {
        const allTriangle = document.querySelectorAll('.instruction-card__triangle')
        allTriangle.forEach(triangle => {
            console.log(triangle)

            const context = triangle.getContext('2d');

            context.beginPath();

            context.moveTo(120, 0);
            context.lineTo(120, 334);
            context.lineTo(20, 334);
            context.lineTo(120, 0);

            context.closePath();
            context.shadowColor = "rgba(0, 0, 0, 0.14)";
            context.shadowBlur = 18;
            context.shadowOffsetX = -14;
            context.shadowOffsetY = 0;
            context.fillStyle = "#fff";
            context.fill();
        })
    }

    if (document.querySelector('.instruction-card__triangle--mobile')) {
        const allTriangle = document.querySelectorAll('.instruction-card__triangle--mobile')
        allTriangle.forEach(triangle => {
            console.log(triangle)

            const context = triangle.getContext('2d');

            context.beginPath();

            context.moveTo(80, 0);
            context.lineTo(80, 180);
            context.lineTo(20, 180);
            context.lineTo(80, 0);

            context.closePath();
            context.shadowColor = "rgba(0, 0, 0, 0.14)";
            context.shadowBlur = 18;
            context.shadowOffsetX = -14;
            context.shadowOffsetY = 0;
            context.fillStyle = "#fff";
            context.fill();
        })
    }
}