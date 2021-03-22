function Tree(tr)
{
    if(tr){
        this.nm  = tr.nm;
        this.ar  = tr.ar;
    }
}

Tree.rand = function (depth, branches, cut)
{
    if(this.count===undefined)
        this.count = -1;
    this.count++;

    if(depth < 1 || Math.random() < cut)
        return { nm: this.count};

    let nm = this.count;
    let ar = new Array(1+Math.floor(Math.random()*branches));
    for(let i=0; i < ar.length; i++)
        ar[i] = this.rand(depth-1, branches, cut);
    return  { nm:nm, ar:ar };
};

Tree.getJSON = function (tr)
{
    return JSON.stringify(tr).replace(/"(\w+)":/g, "$1:");
};

let ar = Tree.rand(2, 2, 0.2);
let json = Tree.getJSON(ar);