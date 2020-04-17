Surfaces.prototype.sphere = (count = 16, R = 10) => {
    const points = [];
    const edges = [];

    function setRoundOfPoints(count, R) {
        const da =  Math.PI / count;
        const dph =  2 * Math.PI / count
        for (let i = 0; i < 2 * Math.PI; i += da) {
            for( let j = 0; j < Math.PI; j += dph){
                const x = R * Math.sin(i) * Math.cos(j);
                const y = R * Math.sin(i) * Math.sin(j);
                const z = R * Math.cos(i);
                points.push(new Point(x, y, z));
    
            }
        }
    }

    setRoundOfPoints(count, R);

    for (let i = 0; i < points.length; i++) {
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
        if (points[i + 1] && i !== count - 1) {
            edges.push(new Edge(i, i + 1));
        }    
    }
    
    for(let i = 0; i < count; i++){
        edges.push(new Edge((i * count / 2) + (count / 2)  , (points.length - 1)  - (i * count / 2))) 
        edges.push(new Edge(((points.length / 2 - 1) - i * count / 2) + (count / 2), (points.length / 2 ) + i * count / 2));
    }
    
    return new Subject(points, edges);
}