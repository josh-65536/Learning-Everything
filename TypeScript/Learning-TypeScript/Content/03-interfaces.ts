
function part3() {
    console.clear();

    interface RectangleOptions {
        width: number;
        height: number;
        depth?: number;
    }

    function drawRectangle(options: RectangleOptions) {
        let width = options.width;
        let height = options.height;

        console.log(`width: ${width}`);
        console.log(`height: ${height}`);

        if (options.depth) {
            console.log(`height: ${options.depth}`);
        }
    }

    drawRectangle({
        width: 800,
        height: 600
    });

    drawRectangle({
        width: 1000,
        height: 2000,
        depth: 3000
    });
}